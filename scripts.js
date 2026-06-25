// Utilities Linking
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname

    fetch(
        path.includes('/religions/')
        ? './../utilities/header.html'
        : './utilities/header.html'
        )
        .then(response => response.text())
        .then(data => {
            document.querySelector('#header').innerHTML = data;
            setNavLinks();
    });  
      
    fetch(
        path.includes('/religions/')
        ? './../utilities/footer.html'
        : './utilities/footer.html'
        )
        .then(response => response.text())
        .then(data => {
            document.querySelector('#footer').innerHTML = data;
            document.getElementById("year").innerHTML = new Date().getFullYear();
    });
});

function setNavLinks() {
    const path = window.location.pathname;
    
    // Determine base path for relative links
    const isReligionPage = path.includes('/religions/');
    
    const aboutHref = isReligionPage ? './../about.html' : './about.html';
    const contactHref = isReligionPage ? './../contact.html' : './contact.html';
    
    document.querySelector('#about').setAttribute('href', aboutHref);
    document.querySelector('#contact').setAttribute('href', contactHref);
}

// Animation for GitHub icon on phones (only present on the home page)
const icon = document.querySelector('#github_icon');
if (icon) {
    document.addEventListener('scrollend', function(e) {
        icon.classList.toggle('rotate');
    });
}
