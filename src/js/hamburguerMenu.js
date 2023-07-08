function hamburguerMenu() {
    const hamburguerMenu = document.querySelector('.navigation__icon');
    const navigation = document.querySelector('.navigation');

    hamburguerMenu.addEventListener("click", () => {
        navigation.classList.toggle('show');
    });
}

export default hamburguerMenu;