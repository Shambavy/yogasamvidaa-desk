import { getStudents, addStudent } from "../../../lib/supabase"

export default async function handler(req, res) {
  if (req.method === "GET") {
    const students = await getStudents()
    return res.json(students)
  }
  if (req.method === "POST") {
    const student = await addStudent(req.body)
    return res.json(student)
  }
  res.status(405).end()
}