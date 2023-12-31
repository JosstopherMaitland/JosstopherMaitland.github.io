const sidebarbutton = document.querySelector(".sidebarbutton"); // get sidebarbutton item for click event

sidebarbutton.addEventListener("click", function () {
    expandSidebar();
});

/**
 * expand sidebar if it is short, otherwise collapse it
 */
function expandSidebar() {
    document.querySelector("body").classList.toggle("short");
    let keepSidebar = document.querySelectorAll("body.short");
    if (keepSidebar.length === 1) {
		document.getElementById("sidebutton-icon").innerText = "»";
        localStorage.setItem("keepSidebar", "true");
    } else {
		document.getElementById("sidebutton-icon").innerText = "«";
        localStorage.removeItem("keepSidebar");
    }
}

/**
 * check local storage for keep sidebar
 */
function showStoredSidebar() {
    if (localStorage.getItem("keepSidebar") === "true") {
		document.getElementById("sidebutton-icon").innerText = "»";
        document.querySelector("body").classList.add("short");
        showHover();
        getSearch();
    }
}

showStoredSidebar(); // show sidebar if stored in local storage