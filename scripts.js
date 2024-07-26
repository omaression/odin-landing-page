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
    const hrefs = {
        '/world-religions/': {
            about: './about.html',
            contact: './contact.html'
        },
        '/world-religions/about.html': {
            about: './about.html',
            contact: './contact.html'
        },
        '/world-religions/contact.html': {
            about: './about.html',
            contact: './contact.html'
        },
        '/world-religions/religions/christianity.html': {
            about: './../about.html',
            contact: './../contact.html'
        },
        '/world-religions/religions/islam.html': {
            about: './../about.html',
            contact: './../contact.html'
        },
        '/world-religions/religions/confucianism.html': {
            about: './../about.html',
            contact: './../contact.html'
        },
        '/world-religions/religions/hinduism.html': {
            about: './../about.html',
            contact: './../contact.html'
        },
        '/world-religions/religions/buddhism.html': {
            about: './../about.html',
            contact: './../contact.html'
        },
        '/world-religions/religions/judaism.html': {
            about: './../about.html',
            contact: './../contact.html'
        },
        '/world-religions/religions/taoism.html': {
            about: './../about.html',
            contact: './../contact.html'
        }
    };

    if (hrefs[path]) {
        document.querySelector('#about').setAttribute('href', hrefs[path].about);
        document.querySelector('#contact').setAttribute('href', hrefs[path].contact);
    }
}