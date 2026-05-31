const { google } = require("googleapis")

function getCalClient(accessToken) {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  )
  auth.setCredentials({ access_token: accessToken })
  return google.calendar({ version: "v3", auth })
}

module.exports.syncClassToCalendar = async function(accessToken, cls) {
  const cal = getCalClient(accessToken)
  const now = new Date()
  let h = 11, m = 0
  const start = new Date(now)
  start.setHours(h, m, 0, 0)
  const end = new Date(start)
  end.setHours(h + 1, m, 0, 0)
  const RRULES = {
    fitness: "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
    fitness_pm: "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
    weekend: "RRULE:FREQ=WEEKLY;BYDAY=SA,SU",
    tinyyogis: "RRULE:FREQ=WEEKLY;BYDAY=SA,SU",
  }
  const event = {
    summary: cls.name,
    description: cls.description || "",
    start: { dateTime: start.toISOString(), timeZone: "Asia/Kolkata" },
    end: { dateTime: end.toISOString(), timeZone: "Asia/Kolkata" },
    recurrence: RRULES[cls.id] ? [RRULES[cls.id]] : undefined,
    conferenceData: {
      createRequest: {
        requestId: "ys-" + cls.id,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  }
  const res = await cal.events.insert({
    calendarId: "primary",
    conferenceDataVersion: 1,
    resource: event,
  })
  var meetLink = null
  if (res.data.conferenceData && res.data.conferenceData.entryPoints) {
    for (var i = 0; i < res.data.conferenceData.entryPoints.length; i++) {
      if (res.data.conferenceData.entryPoints[i].entryPointType === "video") {
        meetLink = res.data.conferenceData.entryPoints[i].uri
        break
      }
    }
  }
  return { eventId: res.data.id, meetLink: meetLink }
}

module.exports.createAppointmentEvent = async function(accessToken, appt) {
  const cal = getCalClient(accessToken)
  var startTime = new Date(appt.date + "T" + appt.time + ":00")
  var endTime = new Date(startTime.getTime() + 3000000)
  var withMeet = appt.mode && appt.mode.indexOf("Online") !== -1
  const event = {
    summary: "Yoga Session - " + appt.student_name,
    description: appt.notes || "",
    start: { dateTime: startTime.toISOString(), timeZone: "Asia/Kolkata" },
    end: { dateTime: endTime.toISOString(), timeZone: "Asia/Kolkata" },
    conferenceData: withMeet ? {
      createRequest: {
        requestId: "ys-appt-" + appt.student_name,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    } : undefined,
  }
  const res = await cal.events.insert({
    calendarId: "primary",
    conferenceDataVersion: withMeet ? 1 : 0,
    resource: event,
  })
  var meetLink = null
  if (res.data.conferenceData && res.data.conferenceData.entryPoints) {
    for (var i = 0; i < res.data.conferenceData.entryPoints.length; i++) {
      if (res.data.conferenceData.entryPoints[i].entryPointType === "video") {
        meetLink = res.data.conferenceData.entryPoints[i].uri
        break
      }
    }
  }
  return { calEventId: res.data.id, meetLink: meetLink }
}