import { getReceipts, addReceipt } from "../../../lib/supabase"

export default async function handler(req, res) {
  if (req.method === "GET") {
    const receipts = await getReceipts()
    return res.json(receipts)
  }
  if (req.method === "POST") {
    const receipt = await addReceipt(req.body)
    return res.json(receipt)
  }
  res.status(405).end()
}