const notes = {
  "Note 00": "Combination changes default to the most stringent process.",
  "Note 0": "Items for Associate Dean signature may get referred to Academic Affairs if they are other than routine, have complicated effects, or need broader review.",
  "Note 1": "Escalate if the change impacts the program, core, or other departments/areas.",
  "Note 2": "Initiate by March 1; must be complete by April 1 for the catalog cutoff.",
  "Note 3": "Initiate by October 1. Submit the APC to the Associate Provost by October 31. College approvals should be complete by February 28. Workflow and catalog implementation begin March 1, with an April 1 catalog cutoff.",
  "Note 4": "Submit the PRNP to the Associate Provost by October 31. College approval by December 31. UAA approval by or in March. Workflow/catalog done April 1. Common App timing is June 1.",
  "Note 5": "No form. Usually an instructor or Core Course Coordinator responsibility.",
  "Note 6": "See Housekeeping.",
  "Note 7": "Housekeeping Caveat: Changes to align previously approved course information across SPA and the Catalog do not need approvals or forms. Chairs and/or Program Directors work with Department Administrators directly. Solicit Associate Dean support as needed."
};

const forms = {
  WNCCP: {
    code: "WNCCP",
    title: "WCBT New or Changed Course Proposal Form",
    file: "WNCCP WCBT New or Changed Course Proposal Form.docx",
    purpose: "Use this for deleting, adding, or changing a course.",
    checklist: [
      "Identify the department, program, submitter, existing course, proposed course fields, and effective term.",
      "Choose the action requested: delete, create, change number/title/prefix/credits/description/prerequisite, or other.",
      "Attach required supplemental material, including old and new syllabi when applicable.",
      "Provide catalog language, curriculum impact, reason for the request, effects of the change, staffing impact, and affected department comments."
    ]
  },
  APC: {
    code: "APC",
    title: "Academic Program Change Form",
    file: "APC Academic Program Change Form.docx",
    purpose: "Use this for changes to an existing academic program.",
    checklist: [
      "Identify the department, submitter, existing program type, existing program name, effective date, and whether college approval is required.",
      "Describe the proposed changes and rationale, including student impact and any retroactive catalog impact.",
      "For curriculum changes, provide a revised plan of study and side-by-side current/proposed requirements.",
      "Explain effects on learning goals, assessment, enrollment, budget/resources, other departments or colleges, and collect required comments."
    ]
  },
  PRNACMCP: {
    code: "PRNACMCP",
    title: "Preliminary Review for New Academic Minor or Certificate Program",
    file: "PRNACMCP Preliminary Review for New Academic Minor or Certificate Program Form.docx",
    purpose: "Use this for a new minor, undergraduate certificate, or graduate certificate preliminary review.",
    checklist: [
      "Provide proposal date, college/school/department, proposer names, administrative contacts, title, and effective term.",
      "Explain rationale, mission alignment, demand, target audience, market demand, and curriculum structure.",
      "List required courses, credits, prerequisites, and any new courses in the proposed minor or certificate.",
      "Document resources, delivery, enrollment, admission criteria, certificate-only financial details, CIP code, duration, and Dean signature."
    ]
  },
  PRNP: {
    code: "PRNP",
    title: "Preliminary Review for New Program",
    file: "PRNP Preliminary Review for New Program Form.docx",
    purpose: "Use this for preliminary review of a new undergraduate or graduate degree program.",
    checklist: [
      "Provide proposal date, college/school/department, proposer names, administrative contacts, program title, degree award, and CIP code.",
      "Explain marketplace fit, mission alignment, differentiation, competitors, learning outcomes, post-graduation outcomes, and accreditation.",
      "Document resources, faculty/staff/facilities support, tuition, student costs, financial aid, admission criteria, audience, delivery, schedule, enrollment, and effective term.",
      "Include IPEDS duration, additional information, and Dean signature."
    ]
  },
  UNAP: {
    code: "UNAP",
    title: "UAA New Program Application",
    file: "UNAP UAA New Program Application Form.docx",
    purpose: "Use this when the new program workflow reaches the UAA Academic Affairs Committee application stage.",
    checklist: [
      "Provide college/department, submission date, initiation date, duration, proposed program name, delivery mode, credential type, credits, housing department, and contact information.",
      "Complete sections on accreditation, program description, program demand, enrollment, purpose/objectives, assessment, administration, faculty, admissions, special requirements, and resources.",
      "Attach or complete Appendix A for inter-departmental curriculum communication, Appendix B curriculum table, and Appendix C resource summary as applicable."
    ]
  },
  WNCPP: {
    code: "WNCPP",
    title: "WCBT New or Changed Program Proposal Form",
    file: "WNCPP New or Changed Program Form.docx",
    purpose: "Use this for deleting, adding, or changing a Welch College program after the workflow reaches the WCBT program proposal stage.",
    checklist: [
      "Identify the department, submitter, existing program type, existing program name, and effective date of change.",
      "Choose the action requested: delete a program, create an entirely new program, or change an existing program.",
      "Attach old and new program descriptions when applicable.",
      "Describe the new program or changes, explain the rationale, and document effects on learning goals, staffing, enrollment, and affected courses or programs.",
      "Collect Department Chair, Academic Affairs Committee, and Dean recommendations or approvals as required."
    ]
  },
  None: {
    code: "None",
    title: "No form required",
    file: "",
    purpose: "The workflow does not require a form for this activity.",
    checklist: [
      "Confirm whether the change is routine and whether any program, core, or department impacts trigger escalation.",
      "Work with the Chair, Program Director, or Department Administrator as appropriate."
    ]
  },
  Housekeeping: {
    code: "Housekeeping",
    title: "Housekeeping or direct administrative update",
    file: "",
    purpose: "Use the housekeeping path when the change aligns already approved course information across SPA and the Catalog.",
    checklist: [
      "No approvals or forms are required for true housekeeping alignment.",
      "Chair and/or Program Director should work directly with Department Administrators.",
      "Solicit Associate Dean support as needed."
    ]
  },
  Coordinator: {
    code: "Coordinator",
    title: "Instructor or Core Course Coordinator responsibility",
    file: "",
    purpose: "The workflow marks this as no form, usually handled by an instructor or Core Course Coordinator.",
    checklist: [
      "Confirm whether the change affects a program, core, or other departments.",
      "Escalate if the change has broader curriculum impact."
    ]
  }
};

const activities = [
  { id: "course-prereq", type: "Course", title: "Add or remove pre- or co-requisite", form: "WNCCP", caution: ["Note 1"], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]], extra: ["Associate Dean signature items may be referred to Academic Affairs if they are not routine or have complicated effects."] },
  { id: "course-number", type: "Course", title: "Change course number", form: "WNCCP", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-title", type: "Course", title: "Change course title", form: "WNCCP", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-description", type: "Course", title: "Change course description", form: "WNCCP", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-objectives", type: "Course", title: "Change course-level objectives", form: "Coordinator", caution: ["Note 1"], timeline: "", vote: "", steps: [] },
  { id: "course-resources", type: "Course", title: "Change course resources", form: "Coordinator", caution: [], timeline: "", vote: "", steps: [] },
  { id: "special-topics-current", type: "Course", title: "Offer special topics course using current ST number", form: "None", caution: ["Note 1"], timeline: "", vote: "Chair discretion", steps: [] },
  { id: "special-topics-new", type: "Course", title: "Create new special topics number", form: "WNCCP", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-offering-pattern", type: "Course", title: "Change offering pattern", form: "Housekeeping", caution: ["Note 1"], timeline: "Note 2", vote: "", steps: [] },
  { id: "course-credits", type: "Course", title: "Change course credits", form: "WNCCP", caution: ["Note 1"], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-delete", type: "Course", title: "Delete course from catalog", form: "Housekeeping", caution: [], timeline: "Note 2", vote: "", steps: [] },
  { id: "course-prefix", type: "Course", title: "Change course prefix", form: "WNCCP", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-delivery", type: "Course", title: "Change/add/delete course delivery mode", form: "WNCCP", caution: ["Note 1"], timeline: "", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Dept Admin"]] },
  { id: "course-new-prefix", type: "Course", title: "Create new prefix", form: "WNCCP", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Assoc Dean"], ["AD sign", "To Assoc Provost"]] },
  { id: "course-new", type: "Course", title: "Create new course", form: "WNCCP", caution: ["Note 1"], timeline: "Note 2", vote: "Chair discretion", steps: [["Chair sign", "To Academic Affairs"], ["Academic Affairs sign", "To Dean"], ["Dean sign", "To Dept Admin"]] },
  { id: "program-small-curriculum", type: "Program", title: "Small curriculum adjustments", form: "APC", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Dean sign", "To Assoc Provost"], ["Provost Office review", "If routine, then COB AD"], ["AD sign", "To Assoc Provost"]] },
  { id: "program-no-credit-impact", type: "Program", title: "Changes with no impact on total program credits", form: "APC", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Dean sign", "To Assoc Provost"], ["Provost Office review", "If routine, then COB AD"], ["AD sign", "To Assoc Provost"]] },
  { id: "program-admin-updates", type: "Program", title: "Administrative updates or small admissions workflow adjustments", form: "APC", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Dean sign", "To Assoc Provost"], ["Provost Office review", "If routine, then COB AD"], ["AD sign", "To Assoc Provost"]] },
  { id: "program-outcomes", type: "Program", title: "Changing outcomes", form: "APC", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Dean sign", "To Assoc Provost"], ["Provost Office review", "If routine, then COB AD"], ["AD sign", "To Assoc Provost"]] },
  { id: "program-curriculum-outcomes", type: "Program", title: "Changing the curriculum in ways that alter outcomes", form: "APC", caution: [], timeline: "Note 2", vote: "Chair discretion", steps: [["Dean sign", "To Assoc Provost"], ["Provost Office review", "If routine, then COB AD"], ["AD sign", "To Assoc Provost"]] },
  { id: "program-total-credits", type: "Program", title: "Change to total program credits", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-eliminate-minor-track", type: "Program", title: "Elimination of minor, concentration, tracks, or specializations", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-create-concentration", type: "Program", title: "Create graduate concentration, track, specialization", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-create-minor-cert", type: "Program", title: "Create minor, undergraduate certificate, or graduate certificate", form: "PRNACMCP", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Form change: WNCPP"], ["Academic Affairs sign", "To Dean"], ["Dean sign", "To Assoc Provost"]], laterForms: ["WNCPP"] },
  { id: "program-redesign-cost", type: "Program", title: "Curriculum redesign affecting program cost or student progression", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-delivery", type: "Program", title: "Change to delivery modality", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-resources", type: "Program", title: "Resource-intensive changes requiring new lines, space, or equipment", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-retention-progression", type: "Program", title: "Changes that impact retention, progression, or time-to-degree", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-name-cip", type: "Program", title: "Program name change or CIP code change with regulatory implications", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-suspension", type: "Program", title: "Program suspension or teach-out planning", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-dual-degree", type: "Program", title: "Create or eliminate dual degree options", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-calendar", type: "Program", title: "Change academic calendar", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-degree-award", type: "Program", title: "Change the degree award", form: "APC", caution: [], timeline: "Note 3", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or Academic Affairs"], ["To Academic Affairs", "Academic Affairs sign"], ["To Dean", "Dean sign"], ["To Assoc Provost", "Implementation routing"]] },
  { id: "program-new", type: "Program", title: "Create new program", form: "PRNP", caution: [], timeline: "Note 4", vote: "Yes", steps: [["Dean sign", "To Assoc Provost"], ["NPSC review", "Revise/resubmit or enter governance"], ["To Academic Affairs", "Form change: WNCPP"], ["To Assembly", "Form change: UNAP"], ["Assembly vote and Dean sign", "To UAA"], ["UAA vote", "Final approval path"]], laterForms: ["WNCPP", "UNAP"] }
];

let currentFilter = "All";
let selectedId = "";

const activityList = document.querySelector("#activityList");
const activityCount = document.querySelector("#activityCount");
const chatLog = document.querySelector("#chatLog");
const quickActions = document.querySelector("#quickActions");
const workflowDetail = document.querySelector("#workflowDetail");
const emptyState = document.querySelector("#emptyState");
const chatTitle = document.querySelector("#chatTitle");
const searchInput = document.querySelector("#searchInput");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formFor(activity) {
  return forms[activity.form] || forms.None;
}

function readableType(activity) {
  return activity.type === "Program" ? "program" : "course";
}

function filteredActivities() {
  const query = searchInput.value.trim().toLowerCase();
  return activities.filter((activity) => {
    const typeMatch = currentFilter === "All" || activity.type === currentFilter;
    const searchText = `${activity.title} ${activity.type} ${activity.form}`.toLowerCase();
    return typeMatch && (!query || searchText.includes(query));
  });
}

function renderActivityList() {
  const list = filteredActivities();
  activityCount.textContent = `${list.length} activities shown`;
  activityList.innerHTML = list.map((activity) => {
    const form = formFor(activity);
    return `
      <button class="activity-item ${activity.id === selectedId ? "is-selected" : ""}" type="button" data-id="${activity.id}">
        <strong>${escapeHtml(activity.title)}</strong>
        <span class="chips">
          <span class="chip ${activity.type === "Program" ? "program" : ""}">${activity.type}</span>
          <span class="chip">${escapeHtml(form.code)}</span>
          ${activity.vote ? `<span class="chip">${escapeHtml(activity.vote)}</span>` : ""}
        </span>
      </button>
    `;
  }).join("");
}

function addMessage(kind, text) {
  const message = document.createElement("div");
  message.className = `message ${kind}`;
  message.innerHTML = text;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function noteText(noteKey) {
  return notes[noteKey] || noteKey || "Not specified in source workflow.";
}

function formLink(form) {
  if (!form.file) return "";
  return `<a class="button-link" href="${encodeURI(form.file)}" download>Download ${escapeHtml(form.code)} form</a>`;
}

function renderDetail(activity) {
  const form = formFor(activity);
  const cautionNotes = activity.caution.map(noteText);
  const timelineText = activity.timeline ? noteText(activity.timeline) : "No specific date note listed in the source workflow.";
  const laterForms = (activity.laterForms || []).map((code) => forms[code]).filter(Boolean);
  const processSteps = activity.steps.length
    ? activity.steps.map((step, index) => `
      <li>
        <span class="step-number">${index + 1}</span>
        <div><strong>${escapeHtml(step[0])}</strong><span>${escapeHtml(step[1])}</span></div>
      </li>
    `).join("")
    : `<li><span class="step-number">1</span><div><strong>Confirm local handling</strong><span>No formal routing sequence is listed for this activity in the source workflow.</span></div></li>`;

  emptyState.hidden = true;
  workflowDetail.hidden = false;
  workflowDetail.innerHTML = `
    <div class="detail-head">
      <span class="chips">
        <span class="chip ${activity.type === "Program" ? "program" : ""}">${activity.type}</span>
        <span class="chip">${escapeHtml(form.code)}</span>
      </span>
      <h2>${escapeHtml(activity.title)}</h2>
      <p class="meta">Source category: create or revise a ${readableType(activity)}.</p>
    </div>

    <div class="summary-grid">
      <div class="summary-box"><span>Form</span><strong>${escapeHtml(form.title)}</strong></div>
      <div class="summary-box"><span>Timeline</span><strong>${activity.timeline ? escapeHtml(activity.timeline) : "Not specified"}</strong></div>
      <div class="summary-box"><span>Department vote</span><strong>${escapeHtml(activity.vote || "Not specified")}</strong></div>
    </div>

    <div class="form-card">
      <div>
        <h3>${escapeHtml(form.title)}</h3>
        <p>${escapeHtml(form.purpose)}</p>
      </div>
      <div class="button-row">
        ${formLink(form)}
      </div>
    </div>

    <section class="detail-card">
      <h3>Process Route</h3>
      <ol class="timeline">${processSteps}</ol>
    </section>

    <section class="detail-card ${activity.timeline === "Note 3" || activity.timeline === "Note 4" ? "warning" : ""}">
      <h3>Timing</h3>
      <p>${escapeHtml(timelineText)}</p>
    </section>

    ${cautionNotes.length || activity.extra ? `
      <section class="detail-card warning">
        <h3>Cautions</h3>
        <ul class="note-list">
          ${cautionNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
          ${(activity.extra || []).map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
        </ul>
      </section>
    ` : ""}

    ${laterForms.length ? `
      <section class="detail-card">
        <h3>Later Form Changes</h3>
        <ul class="note-list">
          ${laterForms.map((later) => `<li><strong>${escapeHtml(later.code)}:</strong> ${escapeHtml(later.purpose)} ${later.file ? formLink(later) : ""}</li>`).join("")}
        </ul>
      </section>
    ` : ""}

    <section class="detail-card">
      <h3>What To Have Ready</h3>
      <ul class="checklist">
        ${form.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <div class="button-row">
        <button class="button-link secondary" type="button" id="copySummary">Copy process summary</button>
      </div>
    </section>
  `;

  document.querySelector("#copySummary")?.addEventListener("click", () => copySummary(activity));
}

function copySummary(activity) {
  const form = formFor(activity);
  const lines = [
    `Activity: ${activity.title}`,
    `Category: ${activity.type}`,
    `Form: ${form.code} - ${form.title}`,
    `Timeline: ${activity.timeline ? noteText(activity.timeline) : "Not specified"}`,
    `Department vote: ${activity.vote || "Not specified"}`,
    "Process:",
    ...(activity.steps.length ? activity.steps.map((step, index) => `${index + 1}. ${step[0]} -> ${step[1]}`) : ["1. No formal routing sequence listed in the source workflow."]),
    "Checklist:",
    ...form.checklist.map((item) => `- ${item}`)
  ];
  navigator.clipboard?.writeText(lines.join("\n"));
}

function selectActivity(id, fromUser = true) {
  const activity = activities.find((item) => item.id === id);
  if (!activity) return;
  selectedId = id;
  renderActivityList();
  renderDetail(activity);
  chatTitle.textContent = activity.title;

  if (fromUser) {
    addMessage("user", escapeHtml(activity.title));
  }

  const form = formFor(activity);
  const formSentence = form.file
    ? `Use <strong>${escapeHtml(form.code)}</strong>: ${escapeHtml(form.title)}. Download it from the form panel.`
    : `The workflow says <strong>${escapeHtml(form.title)}</strong>.`;
  const processLead = "Confirm the scope of the change, check whether a department vote is recommended, and follow the listed approval route.";

  addMessage("bot", `${processLead}<br><br>${formSentence}<br>${escapeHtml(activity.timeline ? noteText(activity.timeline) : "No specific timeline note is listed for this activity.")}`);
}

function renderQuickActions() {
  const picks = [
    "course-new",
    "course-credits",
    "program-small-curriculum",
    "program-total-credits",
    "program-create-minor-cert",
    "program-new"
  ];
  quickActions.innerHTML = picks.map((id) => {
    const activity = activities.find((item) => item.id === id);
    return `<button type="button" data-id="${id}">${escapeHtml(activity.title)}</button>`;
  }).join("");
}

function resetConversation() {
  selectedId = "";
  chatTitle.textContent = "Select a change to start";
  chatLog.innerHTML = "";
  workflowDetail.hidden = true;
  emptyState.hidden = false;
  renderActivityList();
  addMessage("bot", "What type of academic change are you making? Choose an activity from the list, or use one of the quick prompts below.");
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    currentFilter = button.dataset.filter;
    renderActivityList();
  });
});

activityList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (button) selectActivity(button.dataset.id);
});

quickActions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (button) selectActivity(button.dataset.id);
});

searchInput.addEventListener("input", renderActivityList);
document.querySelector("#resetButton").addEventListener("click", resetConversation);

renderActivityList();
renderQuickActions();
resetConversation();
