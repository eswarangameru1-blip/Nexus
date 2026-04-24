const hierarchyData = [
  {
    grade: "HOD/ NXPD",
    subtitle: "Head of Department",
    ranks: [
      { code: "DIB", name: "Director of Intelligence Bureau" },
      { code: "Chief", name: "Chief Director" }
    ]
  },
  {
    grade: "Directors",
    subtitle: "Directorial Level",
    ranks: [
      { code: "DGP", name: "Director General of Police" },
      { code: "SDGP", name: "Special Director General of Police" },
      { code: "ADGP", name: "Assistant Director General of Police" }
    ]
  },
  {
    grade: "High Command of Police",
    subtitle: "High Command",
    ranks: [
      { code: "IG", name: "Inspector General of Police" },
      { code: "ADIG", name: "Additional Inspector General of Police" },
      { code: "SIG", name: "Special Inspector General of Police" },
      { code: "DIG", name: "Deputy Inspector General of Police" },
      { code: "AIG", name: "Assistant Inspector General of Police" }
    ]
  },
  {
    grade: "Commander of Police",
    subtitle: "Command Level",
    ranks: [
      { code: "SSP", name: "Senior Superintendent of Police" },
      { code: "SP", name: "Superintendent of Police" },
      { code: "ADSP", name: "Additional Superintendent of Police" },
      { code: "DSP", name: "Deputy Superintendent of Police" },
      { code: "ASP", name: "Assistant Superintendent of Police" }
    ]
  },
  {
    grade: "Supervisor of Police",
    subtitle: "Supervisory Level",
    ranks: [
      { code: "CCOM", name: "Chief Commissioner of Police" },
      { code: "COM", name: "Commissioner of Police" },
      { code: "ADCP", name: "Additional Commissioner of Police" },
      { code: "DCP", name: "Deputy Commissioner of Police" },
      { code: "ACP", name: "Assistant Commissioner of Police" }
    ]
  },
  {
    grade: "Enlisted Police",
    subtitle: "Enlisted Officers",
    ranks: [
      { code: "CINS", name: "Chief Inspector of Police" },
      { code: "INS", name: "Inspector" },
      { code: "AIP", name: "Assistant Inspector" },
      { code: "SI", name: "Sub Inspector" },
      { code: "ASI", name: "Assistant Sub Inspector" },
      { code: "HC", name: "Head Constable" },
      { code: "SC", name: "Senior Constable" },
      { code: "CONS", name: "Constable" }
    ]
  },
  {
    grade: "Probation",
    subtitle: "Probationary",
    ranks: [
      { code: "TR", name: "Trainee" }
    ]
  }
];

const protocolsData = [
  {
    title: "Patrolling Procedure",
    items: [
      "Notify active patrol sector before shift movement.",
      "Obey traffic law unless active emergency response.",
      "Interact professionally with civilians at all times.",
      "Log seized evidence immediately into department storage.",
      "Never hand department vehicles to unauthorized persons."
    ]
  },
  {
    title: "Traffic Stop Procedure",
    items: [
      "Activate lights and signal vehicle to pull over.",
      "Call stop details over radio with location.",
      "Approach only when scene is safe.",
      "Verify license, registration, and driver identity.",
      "Issue warning or citation based on valid offense."
    ]
  },
  {
    title: "High Risk Stop",
    items: [
      "Use only with valid threat or warrant basis.",
      "Request backup before direct confrontation.",
      "Give clear verbal commands.",
      "Secure suspect first, then inspect vehicle.",
      "Document full report after scene clearance."
    ]
  },
  {
    title: "Hostage Response",
    items: [
      "Preserve hostage life over capture priority.",
      "Establish lead negotiator and outer perimeter.",
      "Avoid rushed force unless immediate danger exists.",
      "Track suspect demands and hostage condition.",
      "Debrief scene and log all actions."
    ]
  },
  {
    title: "Use of Force",
    items: [
      "Force must match the level of threat presented.",
      "Deadly force only for imminent deadly danger.",
      "Warning must be given where possible.",
      "Preserve life whenever feasible.",
      "All force incidents require report submission."
    ]
  },
  {
    title: "Radio Discipline",
    items: [
      "Keep comms clear during pursuit or shots fired.",
      "Lead unit controls scene call flow.",
      "Do not spam channel with unnecessary talk.",
      "Use approved call signs and short codes.",
      "Acknowledge command instructions promptly."
    ]
  },
  {
    title: "Vehicle Response Codes",
    items: [
      "Code 1: No lights, no sirens, must obey traffic laws. (Routine patrol)",
      "Code 2: Lights on, no sirens. (Responding to crimes / carrying suspects)",
      "Code 3: Lights and sirens on. (Urgent response: Robbery, chase)"
    ]
  },
  {
    title: "10-Codes",
    items: [
      "10-2 : Arrived on Scene",
      "10-3 : On My Way",
      "10-4 : Copy That",
      "10-5 : Service Break",
      "10-6 : Back from Service Break",
      "10-7 : Off Duty",
      "10-8 : On Duty",
      "10-9 : Repeat the message",
      "10-10 : Fight in Progress",
      "10-20 : State your Location",
      "10-25 : Suspect Caught",
      "10-31 : Carjacking",
      "10-32 : Shots Fired",
      "10-33 : Requesting Medical Emergency",
      "10-50 : Requesting Officer Backup",
      "10-74 : Negative",
      "10-75 : Positive",
      "10-80 Vector : Vehicle Pursuit",
      "10-80 Foxtrot : Pursuit on Foot",
      "10-81 : Going On Foot",
      "10-90 : Robbery Alarm",
      "10-100: Situation Clear"
    ]
  }
];

const ordersData = [
  { code: "NXPD 01", text: "All officers must remain professional, non-corrupt, and accountable in every interaction." },
  { code: "NXPD 02", text: "Do not use force without lawful cause and immediate operational necessity." },
  { code: "NXPD 03", text: "Follow chain of command unless emergency conditions make delay dangerous." },
  { code: "NXPD 04", text: "Do not leak active operational intelligence to unauthorized personnel." },
  { code: "NXPD 05", text: "Officers must maintain radio awareness during patrol and emergency response." },
  { code: "NXPD 06", text: "Evidence, contraband, and recovered property must be logged without delay." },
  { code: "NXPD 07", text: "Search, stop, or detain actions require valid legal or operational basis." },
  { code: "NXPD 08", text: "Respect civilians, fellow officers, and detainees at all times." }
];

const personnelData = [
  { name: "ESWARA PANDIYAN", rank: "DIB", grade: "Grade A+", unit: "Command", status: "Active" },
  { name: "VIKRAM RATHORE", rank: "Chief of Police", grade: "Grade A", unit: "Command", status: "Active" },
  { name: "Rayan Frost", rank: "Captain", grade: "Grade B", unit: "Tactical", status: "Active" },
  { name: "Mira Stone", rank: "Lieutenant", grade: "Grade B", unit: "Patrol", status: "Active" },
  { name: "Kavin Torch", rank: "Sergeant", grade: "Grade C", unit: "Field Supervision", status: "Active" },
  { name: "Isha Nova", rank: "Detective", grade: "Grade D", unit: "Investigations", status: "Active" },
  { name: "Reo Cipher", rank: "Police Officer", grade: "Grade E", unit: "Response", status: "Active" },
  { name: "Aadhya Flux", rank: "Police Officer", grade: "Grade E", unit: "Traffic", status: "Active" },
  { name: "Zayn Pulse", rank: "Cadet", grade: "Grade F", unit: "Academy", status: "Training" },
  { name: "Tara Hex", rank: "Trainee Officer", grade: "Grade F", unit: "Academy", status: "Training" }
];

const gradeGrid = document.getElementById("gradeGrid");
const protocolGrid = document.getElementById("protocolGrid");
const rulesGrid = document.getElementById("rulesGrid");
const personnelList = document.getElementById("personnelList");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const emptyState = document.getElementById("emptyState");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function renderHierarchy() {
  gradeGrid.innerHTML = hierarchyData.map(group => `
    <article class="grade-card">
      <div class="grade-header">
        <div>
          <h4>${group.grade}</h4>
          <div class="grade-sub">${group.subtitle}</div>
        </div>
      </div>

      <div class="rank-list">
        ${group.ranks.map(rank => `
          <div class="rank-item">
            <span class="rank-code">${rank.code}</span>
            <span class="rank-name">// ${rank.name}</span>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderProtocols() {
  protocolGrid.innerHTML = protocolsData.map(protocol => `
    <article class="protocol-card">
      <h4>${protocol.title}</h4>
      <ol>
        ${protocol.items.map(item => `<li>${item}</li>`).join("")}
      </ol>
    </article>
  `).join("");
}

function renderRules() {
  rulesGrid.innerHTML = ordersData.map(order => `
    <article class="order-card">
      <div class="order-code">${order.code}</div>
      <div class="order-text">${order.text}</div>
    </article>
  `).join("");
}

function renderPersonnel(data) {
  personnelList.innerHTML = data.map(person => `
    <article class="person-card">
      <div class="person-top">
        <div>
          <h4 class="person-name">${person.name}</h4>
          <div class="person-rank">${person.rank}</div>
        </div>
      </div>

      <div class="person-meta">
        <span class="pill">${person.grade}</span>
        <span class="pill">${person.unit}</span>
        <span class="pill green">${person.status}</span>
      </div>
    </article>
  `).join("");

  emptyState.classList.toggle("hidden", data.length !== 0);
}

function filterPersonnel() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = personnelData.filter(person => {
    return (
      person.name.toLowerCase().includes(query) ||
      person.rank.toLowerCase().includes(query) ||
      person.grade.toLowerCase().includes(query) ||
      person.unit.toLowerCase().includes(query) ||
      person.status.toLowerCase().includes(query)
    );
  });

  renderPersonnel(filtered);
}

searchInput.addEventListener("input", filterPersonnel);

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderPersonnel(personnelData);
  searchInput.focus();
});

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});

renderHierarchy();
renderProtocols();
renderRules();
renderPersonnel(personnelData);