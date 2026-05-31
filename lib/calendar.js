import { google } from "googleapis"

function getCalClient(accessToken) {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  )
  auth.setCredentials({ access_token: accessToken })
  return google.calendar({ version: "v3", auth })
}

const RRULES = {
  fitness:    "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
  fitness_pm: "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
  weekend:    "RRULE:FREQ=WEEKLY;BYDAY=SA,SU",
  tinyyogis:  "RRULE:FREQ=WEEKLY;BYDAY=SA,SU",
}

export async function syncClassToCalendar(accessToken, cls) {
  const cal = getCalClient(accessToken)
  const now = new Date()
  const timeStr = cls.time_slot.split("–")[0].trim()
  const [time, period] = timeStr.split(" ")
  let [h, m] = time.split(":").map(Number)
  if (period === "PM" && h !== 12) h += 12
  const start = new Date(now)
  start.setHours(h, m||0, 0, 0)
  const end = new Date(start)
  end.setHours(h+1, m||0, 0, 0)

  const event = {
    summary: `${cls.emoji} ${cls.name}`,
    description: `${cls.description}\n\nYoga Samvidaa · yogasamvidaa.com`,
    start: { dateTime: start.toISOString(), timeZone: "Asia/Kolkata" },
    end:   { dateTime: end.toISOString(),   timeZone: "Asia/Kolkata" },
    recurrence: RRULES[cls.id] ? [RRULES[cls.id]] : undefined,
    conferenceData: {
      createRequest: {
        requestId: `ys-${cls.id}-${Date.now()}`,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  }

  const res = await cal.events.insert({
    calendarId: "primary",
    conferenceDataVersion: 1,
    resource: event,
  })

  const meetLink = res.data.conferenceData?.entryPoints
    ?.find(e => e.entryPointType === "video")?.uri || null
  return { eventId: res.data.id, meetLink }
}

export async function createAppointmentEvent(accessToken, appt) {
  const cal = getCalClient(accessToken)
  const start = new Date(`${appt.date}T${appt.time}:00+05:30`)
  const end   = new Date(start.getTime