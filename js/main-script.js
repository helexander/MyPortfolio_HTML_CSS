/* Pausing for a moment to have items loaded */
// Prepare the body tag by adding a "js-paused class"
document.body.className += " js-loading";

// Listens for when everything has loaded
window.addEventListener("load", showPage, false);

function showPage() {
    // Remove the js-paused class when page has loaded
    document.body.className = document.body.className.replace("js-loading", "");
}