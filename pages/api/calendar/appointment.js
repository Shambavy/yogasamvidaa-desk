import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { createAppointmentEvent } from "../../../lib/calendar"
import { addAppointment } from "../../../lib/supabase"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ error: "Not authenticated" })

  try {
    const appt = req.body
    const { calEventId, meetLink } = await createAppointmentEvent(session.accessToken, appt)
    const saved = await addAppointment({ ...appt, cal_event_id: calEventId, meet_link: meetLink })
    res.json({ success: true, appointment: saved, meetLink })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}