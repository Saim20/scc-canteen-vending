// Login Check

function checkLogin() {
    var currentUser = null
    currentUser = JSON.parse(sessionStorage.getItem("admin"));
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (currentUser == null && page != "login.html") {
        window.location.href = "login.html";
    }
    else if (page == "login.html" && currentUser != null) {
        window.location.href = "index.html";
    }
}