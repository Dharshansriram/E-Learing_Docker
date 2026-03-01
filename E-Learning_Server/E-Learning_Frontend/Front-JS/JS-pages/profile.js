function ProfilePage() {
    const user = AppState.user;

    const credits = AppState.credits || 0;
    const badges = AppState.badges || [];
    const certs = AppState.certificates || [];

    const attempts = (AppState.sessionResult && AppState.sessionResult.attempts) || [];
    const correct = attempts.filter(a => a.isCorrect).length;
    const total = attempts.length;
    const accuracy = total ? Math.round((correct / total) * 100) : 0;

    const learnerTitle =
        credits >= 500 ? "Gold Performer 🏆" :
        credits >= 250 ? "Silver Performer 🥈" :
        credits >= 100 ? "Bronze Performer 🥉" :
        "Starter ⚡";

    const aptitudeAttempts = attempts.filter(a => a.skill === "aptitude");
    const dsaAttempts = attempts.filter(a => a.skill === "dsa");

    const aptCorrect = aptitudeAttempts.filter(a => a.isCorrect).length;
    const dsaCorrect = dsaAttempts.filter(a => a.isCorrect).length;

    const aptAcc = aptitudeAttempts.length ? Math.round((aptCorrect / aptitudeAttempts.length) * 100) : 0;
    const dsaAcc = dsaAttempts.length ? Math.round((dsaCorrect / dsaAttempts.length) * 100) : 0;

    const aptProgress = Math.min((credits / 500) * 100, 100);
    const dsaProgress = Math.min((credits / 500) * 100, 100);

    // Dynamic quote
    setTimeout(() => {
        rotateProfileQuotes();
    }, 200);

    return `
    <div class="profile-page">

      <!-- HERO -->
      <section class="profile-hero-pro">
        <div class="hero-left">
          <div class="avatar-pro">
            ${getInitials(user.name)}
          </div>

          <div class="hero-info">
            <h2>${user.name}</h2>
            <p class="hero-sub">${user.dept.toUpperCase()} · Year ${user.year}</p>
            <span class="hero-title">${learnerTitle}</span>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-stat">
            <h3>${credits}</h3>
            <p>Credits</p>
          </div>
          <div class="hero-stat">
            <h3>${accuracy}%</h3>
            <p>Accuracy</p>
          </div>
          <div class="hero-stat">
            <h3>${certs.length}</h3>
            <p>Certificates</p>
          </div>
        </div>

        <div class="hero-glow"></div>
      </section>

      <!-- GRID -->
      <section class="profile-grid">

        <!-- LEFT COLUMN -->
        <div class="profile-col">

          <!-- Progress -->
          <div class="pro-card">
            <div class="card-head">
              <h3>📈 Skill Progress</h3>
              <span class="mini-tag">Live</span>
            </div>

            <div class="skill-progress">
              <div class="skill-row">
                <div class="skill-left">
                  <b>🧠 Aptitude</b>
                  <span>${aptAcc}% accuracy</span>
                </div>
                <div class="bar">
                  <div class="fill aptitude" style="width:${aptProgress}%"></div>
                </div>
              </div>

              <div class="skill-row">
                <div class="skill-left">
                  <b>💻 DSA</b>
                  <span>${dsaAcc}% accuracy</span>
                </div>
                <div class="bar">
                  <div class="fill dsa" style="width:${dsaProgress}%"></div>
                </div>
              </div>
            </div>

            <div class="skill-actions">
              <button class="pro-btn" onclick="navigate('training')">Start Training</button>
              <button class="pro-btn-outline" onclick="navigate('certificates')">View Certificates</button>
            </div>
          </div>

          <!-- Weekly Heatmap -->
          <div class="pro-card">
            <div class="card-head">
              <h3>🗓 Weekly Activity</h3>
              <span class="mini-tag">7 Days</span>
            </div>

            <div class="heatmap">
              ${generateHeatmapBlocks()}
            </div>

            <p class="heatmap-note">
              Workout streak increases your consistency score 🔥
            </p>
          </div>

        </div>

        <!-- RIGHT COLUMN -->
        <div class="profile-col">

          <!-- Badges -->
          <div class="pro-card">
            <div class="card-head">
              <h3>🏅 Badges</h3>
              <span class="mini-tag">${badges.length}</span>
            </div>

            <div class="badge-grid">
              ${
                badges.length
                  ? badges.map(b => `<div class="badge-pro">${b}</div>`).join("")
                  : `<p class="muted">No badges yet. Start workout mode 🔥</p>`
              }
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="pro-card">
            <div class="card-head">
              <h3>⚡ Recent Activity</h3>
              <span class="mini-tag">${total}</span>
            </div>

            <div class="activity-list">
              ${renderRecentAttempts(attempts)}
            </div>
          </div>

          <!-- Motivation Quote -->
          <div class="pro-card quote-card">
            <div class="card-head">
              <h3>💬 Motivation</h3>
              <button class="mini-refresh" onclick="manualQuoteChange()">↻</button>
            </div>

            <p class="quote-text" id="quoteText">
              Loading motivation...
            </p>

            <p class="quote-sub">
              Keep doing workouts daily to unlock certificates faster ✅
            </p>
          </div>
          
        </div>
     
          

      </section>
    </div>
  `;
}

/* --------------------- Helpers --------------------- */

function getInitials(name) {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function generateHeatmapBlocks() {
  // Creates 14 blocks (2 rows) with random activity strength
  let html = "";
  for (let i = 0; i < 14; i++) {
    const level = Math.floor(Math.random() * 4); // 0-3
    html += `<div class="heat-block level-${level}" title="Activity level ${level}"></div>`;
  }
  return html;
}

function renderRecentAttempts(attempts) {
  if (!attempts.length) {
    return `<p class="muted">No attempts yet. Start training now 🚀</p>`;
  }

  const last = attempts.slice(-6).reverse();

  return last.map(a => `
    <div class="activity-item">
      <div class="dot ${a.isCorrect ? "good" : "bad"}"></div>
      <div class="activity-info">
        <b>${a.skill.toUpperCase()}</b>
        <span>${a.difficulty.toUpperCase()} · ${a.isCorrect ? "Correct ✅" : "Wrong ❌"}</span>
      </div>
    </div>
  `).join("");
}

/* --------------------- Quotes --------------------- */

const PROFILE_QUOTES = [
  "Discipline beats motivation. Show up daily ✅",
  "Today’s workout = tomorrow’s offer letter 💼",
  "Your consistency is your superpower 🔥",
  "Stop scrolling. Start solving. ⚡",
  "One question at a time. One step closer. 🚀",
  "Aptitude + DSA = Placement Ready 🎯"
];

let quoteIndex = 0;

function rotateProfileQuotes() {
  const el = document.getElementById("quoteText");
  if (!el) return;

  el.classList.remove("quote-animate");
  void el.offsetWidth; // restart animation

  el.textContent = PROFILE_QUOTES[quoteIndex % PROFILE_QUOTES.length];
  el.classList.add("quote-animate");

  quoteIndex++;
}

function manualQuoteChange() {
  rotateProfileQuotes();
}