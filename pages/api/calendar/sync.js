import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { syncClassToCalendar } from "../../../lib/calendar"
import { getClasses, updateMeetLink } from "../../../lib/supabase"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ error: "Not authenticated" })

  try {
    const classes = await getClasses()
    const results = []
    for (const cls of classes) {
      if (cls.id === "therapy" || cls.id === "vedic") continue
      const { eventId, meetLink } = await syncClassToCalendar(session.accessToken, cls)
      if (meetLink) await updateMeetLink(cls.id, meetLink)
      results.push({ id: cls.id, eventId, meetLink })
    }
    res.json({ success: true, synced: results })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
}