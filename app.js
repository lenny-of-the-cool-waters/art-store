const selectElement = (elem) => document.querySelector(elem);

//open the nav menu
selectElement(".open-nav-menu").addEventListener("click", () => {
    selectElement(".nav-menu").classList.add("active");
})

//close the nav menu
selectElement(".close-nav-menu").addEventListener("click", () => {
    selectElement(".nav-menu").classList.remove("active");
})