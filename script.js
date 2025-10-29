const output = document.getElementById("scanOutput");
const progressBar = document.getElementById("progressBar");
const threatBar = document.getElementById("threatBar");
const threatLabel = document.getElementById("threatLabel");
const badgeList = document.getElementById("badgeList");
const personaReveal = document.getElementById("personaReveal");

const traces = [
  "🔍 Surface Web: Email address found on public forums",
  "🔍 Deep Web: Username linked to leaked credentials",
  "🔍 Dark Web: Phone number listed in breach archive",
  "🔍 Social Graph: Location data inferred from photo metadata",
  "🔍 AI Analysis: Behavioral fingerprint matched to 3 profiles"
];

const personas = [
  { name: "The Influencer", traits: "High social exposure", tier: "Shield Your Brand" },
  { name: "The Activist", traits: "Political footprint detected", tier: "Dark Web Defense" },
  { name: "The Developer", traits: "Tech leaks and forum traces", tier: "Code Cloak" },
  { name: "The Ghost", traits: "Minimal footprint, metadata vulnerable", tier: "Stay Invisible" }
];

const badgePool = [
  { name: "Data Breach Survivor", emoji: "🧨" },
  { name: "Dark Web Detected", emoji: "🌑" },
  { name: "Metadata Ghost", emoji: "👻" },
  { name: "Social Leak", emoji: "📸" },
  { name: "Trace Hunter", emoji: "🕵️‍♂️" }
];

document.querySelector(".cta").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("scan").scrollIntoView({ behavior: "smooth" });
  document.getElementById("loading").style.display = "block";
  document.getElementById("scanSound").play();
  output.innerHTML = "";
  progressBar.style.width = "0%";
  i = 0;
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    revealTrace();
  }, 3000);
});

let i = 0;
function revealTrace() {
  if (i < traces.length) {
    output.innerHTML += `<p>${traces[i]}</p>`;
    progressBar.style.width = `${((i + 1) / traces.length) * 100}%`;
    i++;
    setTimeout(revealTrace, 1500);
  } else {
    output.innerHTML += `<p style="color:#ff00c8; font-weight:bold;">Scan Complete. Digital footprint exposed.</p>`;
    updateThreatLevel(Math.floor(Math.random() * 100));
    revealPersona();
    unlockBadges();
  }
}

function updateThreatLevel(score) {
  threatBar.style.width = `${score}%`;
  if (score < 30) threatLabel.textContent = "🟢 Low Risk";
  else if (score < 70) threatLabel.textContent = "🟠 Moderate Risk";
  else threatLabel.textContent = "🔴 High Risk";
}

function revealPersona() {
  const persona = personas[Math.floor(Math.random() * personas.length)];
  personaReveal.innerHTML = `
    <h3 style="color:#00f5ff;">🧠 Persona: ${persona.name}</h3>
    <p>Traits: ${persona.traits}</p>
    <a href="#upgrade" style="display:inline-block; margin-top:1rem; padding:0.8rem 1.5rem; background:#ff00c8; color:#fff; border-radius:6px; text-decoration:none;">Upgrade to "${persona.tier}"</a>
  `;
}

function unlockBadges() {
  badgeList.innerHTML = "";
  const unlocked = badgePool.sort(() => 0.5 - Math.random()).slice
