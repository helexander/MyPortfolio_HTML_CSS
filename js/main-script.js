/* Pausing for a moment to have items loaded */
// Prepare the body tag by adding a "js-paused class"
document.body.className += " js-loading";

// Listens for when everything has loaded
window.addEventListener("load", showPage, false);

function showPage() {
    // Remove the js-paused class when page has loaded
    document.body.className = document.body.className.replace("js-loading", "");
}

// Contact section

function hoverMail(elem) {
    elem.addClass("section__contact-item-mail-animated").removeClass("section__contact-item-mail");
    // elem.setAttribute('src', '../images/contact-icons/animated-mail.gif');
}
function unhoverMail(elem) {
    elem.setAttribute('src', '../images/contact-icons/static-mail.svg');
}

function hoverLinkedin(elem) {
    elem.setAttribute('src', '../images/contact-icons/animated-linkedin.gif');
}
function unhoverLinkedin(elem) {
    elem.setAttribute('src', '../images/contact-icons/static-linkedin.svg');
}

function hoverGithub(elem) {
    elem.setAttribute('src', '../images/contact-icons/animated-github.gif');
}
function unhoverGithub(elem) {
    elem.setAttribute('src', '../images/contact-icons/static-github.svg');
}