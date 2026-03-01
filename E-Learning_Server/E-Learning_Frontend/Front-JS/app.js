if (!AppState.user) {
    window.location.href = "auth.html";
}


document.getElementById("app").innerHTML = `
  ${Sidebar()}
  <main class="main" id="mainContent"></main>
`;


function navigate(page) {

    // 1️⃣ Save page in browser history
    history.pushState({ page: page }, "", "#" + page);

    // 2️⃣ Load selected page
    loadPage(page);
}

/* =====================================================
   PAGE LOADER – decides which page to render
   ===================================================== */
function loadPage(page) {
    const main = document.getElementById("mainContent");

    if (page === "dashboard") {
        main.innerHTML = DashboardPage();
    } else if (page === "training") {
        main.innerHTML = TrainingPage();
    } else if (page === "assessment") {
        main.innerHTML = AssessmentPage();
    } else if (page === "certificates") {
        main.innerHTML = CertificatesPage();
    } else if (page === "leaderboard") {
        main.innerHTML = LeaderboardPage();
    } else if (page === "profile") {
        main.innerHTML = ProfilePage();
    } else {
        main.innerHTML = `
      <h2>Page Not Found</h2>
      <p>The requested page does not exist.</p>
    `;
    }
}


window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page);
    }
};


initCredits();
initCertificates();


const pageFromURL = location.hash.replace("#", "") || "dashboard";
loadPage(pageFromURL);

history.replaceState({ page: pageFromURL }, "", "#" + pageFromURL);