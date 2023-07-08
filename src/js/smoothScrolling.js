function smoothScrolling() {
    const navLinks = document.querySelectorAll('.navigation__link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const seccionId = e.target.attributes.href.value;
            // console.log(typeof seccionScroll);
            const seccionToScroll = document.querySelector(seccionId);
            seccionToScroll.scrollIntoView({ behavior: "smooth" });
        });
    });
}

export default smoothScrolling;