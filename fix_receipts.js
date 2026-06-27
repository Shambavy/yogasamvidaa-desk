const { createClient } = require("@supabase/supabase-js")

const supabase = createClient(
  "https://clgjlikftquxpweasesx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZ2psaWtmdHF1eHB3ZWFzZXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjE5NzYsImV4cCI6MjA5NTczNzk3Nn0.dkGuwunHih9qh5q_eNs-MUAtBp9-nMqHcIS-FkOHK2I"
)

async function fix() {
  // Step 1 — check what's there
  const { data, error } = await supabase.from("receipts").select("*").order("inv")
  if (error) { console.log("Error:", error.message); return }
  
  console.log(`Total receipts in Supabase: ${data.length}`)
  console.log(`Total amount: ₹${data.reduce((s,r) => s+(r.amount||0), 0).toLocaleString()}`)
  
  // Step 2 — delete ALL and reseed cleanly
  console.log("\nClearing duplicates...")
  const { error: delError } = await supabase.from("receipts").delete().gte("inv", 0)
  if (delError) { console.log("Delete error:", delError.message); return }
  console.log("Cleared. Run node seed_receipts.js now.")
}

fix()