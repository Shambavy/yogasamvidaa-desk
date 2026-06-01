const { createClient } = require("@supabase/supabase-js")

const supabase = createClient(
  "https://clgjlikftquxpweasesx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZ2psaWtmdHF1eHB3ZWFzZXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjE5NzYsImV4cCI6MjA5NTczNzk3Nn0.dkGuwunHih9qh5q_eNs-MUAtBp9-nMqHcIS-FkOHK2I"
)

async function seed() {
  console.log("Seeding students...")
  const students = [
  {"name":"Advik","csid":"YSPS1054","phone":"","classId":"tinyyogis","initials":"AD"},
  {"name":"Aishwarya","csid":"YSAR1141","phone":"","classId":"fitness","initials":"AI"},
  {"name":"Anindita","csid":"YSPS1048","phone":"","classId":"fitness","initials":"AN"},
  {"name":"Anjana","csid":"YSPS1052","phone":"","classId":"tinyyogis","initials":"AN"},
  {"name":"Dharshwin","csid":"YSPS1041","phone":"","classId":"tinyyogis","initials":"DH"},
  {"name":"Hyma","csid":"YSPS1049","phone":"","classId":"weekend","initials":"HY"},
  {"name":"Jayamathi","csid":"YSPS1010","phone":"","classId":"fitness","initials":"JA"},
  {"name":"Kalaivanan Nv","csid":"YSPS1004","phone":"","classId":"fitness","initials":"KN"},
  {"name":"Lalitha","csid":"YSPS1039","phone":"","classId":"fitness","initials":"LA"},
  {"name":"Lakshmikara","csid":"YSPS1002","phone":"","classId":"therapy","initials":"LA"},
  {"name":"Lithikka","csid":"YSPS1044","phone":"","classId":"tinyyogis","initials":"LI"},
  {"name":"Moushmi","csid":"YSPS1005","phone":"","classId":"weekend","initials":"MO"},
  {"name":"Pavai Sujatha","csid":"YSPS1007","phone":"","classId":"fitness","initials":"PS"},
  {"name":"Parineetha","csid":"YSPS1045","phone":"","classId":"tinyyogis","initials":"PA"},
  {"name":"Prathiksha","csid":"YSPS1145","phone":"7338869270","classId":"fitness","initials":"PR"},
  {"name":"Ramamurthy","csid":"YSPS1001","phone":"","classId":"therapy","initials":"RA"},
  {"name":"Sadhvi","csid":"YSPS1042","phone":"","classId":"fitness","initials":"SA"},
  {"name":"Sanvitha","csid":"YSPS1016","phone":"","classId":"tinyyogis","initials":"SA"},
  {"name":"Senthamarai","csid":"YSPS1043","phone":"","classId":"therapy","initials":"SE"},
  {"name":"Shakila","csid":"YSPS1037","phone":"","classId":"therapy","initials":"SH"},
  {"name":"Sharmila","csid":"YSPS1050","phone":"","classId":"weekend","initials":"SH"},
  {"name":"Tapasya","csid":"YSPS1051","phone":"","classId":"tinyyogis","initials":"TA"},
  {"name":"Umarani","csid":"YSPS1041B","phone":"","classId":"fitness_pm","initials":"UM"},
  {"name":"Uthiralakshmi Sivaraman","csid":"YSPS1003","phone":"","classId":"fitness","initials":"US"}
  ]

  for (const s of students) {
    const { error } = await supabase.from("students").upsert({
      name: s.name, csid: s.csid, phone: s.phone,
      class_id: s.classId, initials: s.initials,
      status: "active", remaining: 8
    }, { onConflict: "csid" })
    if (error) console.log("Student error:", s.name, error.message)
    else console.log("✓ Student:", s.name)
  }

  console.log("\nDone! Check Supabase for the data.")
}

seed()