import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function getStudents() {
  const { data, error } = await supabase.from("students").select("*").order("name")
  if (error) throw error
  return data
}

export async function addStudent(s) {
  const { data, error } = await supabase.from("students").insert([s]).select().single()
  if (error) throw error
  return data
}

export async function getReceipts() {
  const { data, error } = await supabase.from("receipts").select("*").order("date", { ascending: true })
  if (error) throw error
  return data
}

export async function addReceipt(r) {
  const { data, error } = await supabase.from("receipts").insert([r]).select().single()
  if (error) throw error
  return data
}

export async function getClasses() {
  const { data, error } = await supabase.from("classes").select("*").eq("active", true)
  if (error) throw error
  return data
}

export async function updateMeetLink(classId, meetLink) {
  const { error } = await supabase.from("classes").update({ meet_link: meetLink, cal_synced: true }).eq("id", classId)
  if (error) throw error
}

export async function saveAttendance(records) {
  const { error } = await supabase.from("attendance").upsert(records, { onConflict: "class_id,student_csid,date" })
  if (error) throw error
}

export async function getAppointments() {
  const { data, error } = await supabase.from("appointments").select("*").gte("date", new Date().toISOString().slice(0,10)).order("date")
  if (error) throw error
  return data
}

export async function addAppointment(a) {
  const { data, error } = await supabase.from("appointments").insert([a]).select().single()
  if (error) throw error
  return data
}