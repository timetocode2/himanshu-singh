const header1 = document.querySelector(".header1");
const nav1 = document.querySelector(".nav1");
const headerMain = document.querySelectorAll("#setting,#apps,#themes, #fonts, #fun, #about, #calc, #tic, #lords, #pubg");



const lovelyThemes = document.querySelector("#lovely-theme");
const darkThemes = document.querySelector("#dark-theme");
const blueThemes = document.querySelector("#blue-theme");
const greenThemes = document.querySelector("#green-theme");
const cyanThemes = document.querySelector("#cyan-theme");


lovelyThemes.addEventListener("click", () => {
    document.documentElement.style.setProperty('--b-color-white', "white");
    document.documentElement.style.setProperty('--head-n-nav-color', '');
    document.documentElement.style.setProperty('--main-bg', '');
    header1.style.setProperty("background", '');
    nav1.style.setProperty("background", '');
    headerMain.forEach(element => {
        element.style.setProperty("background", '');
    });

});

darkThemes.addEventListener("click", () => {
    document.documentElement.style.setProperty('--b-color-white', "white");
    document.documentElement.style.setProperty('--head-n-nav-color', 'white');
    document.documentElement.style.setProperty("--main-bg",'linear-gradient(to right, black, #484748');
    header1.style.setProperty("background", 'linear-gradient(to bottom, rgb(56, 55, 55), rgb(34, 32, 32))');
    nav1.style.setProperty("background", 'linear-gradient(to top, rgb(56, 55, 55), rgb(34, 32, 32)');
    headerMain.forEach(element => {
        element.style.setProperty("background", 'linear-gradient(to left, rgb(83, 82, 82), rgb(56, 54, 54),rgb(83, 82, 82))');
    });

});

blueThemes.addEventListener("click", () => { 
    document.documentElement.style.setProperty('--b-color-white', "#F1F5FF");
    document.documentElement.style.setProperty('--head-n-nav-color', '#F1F5FF');
    document.documentElement.style.setProperty("--main-bg",'linear-gradient(to right, #142E66, #4A79C5');
    header1.style.setProperty("background", '#0A1F44');
    nav1.style.setProperty("background", '#0A1F44');
    headerMain.forEach(element => {
        element.style.setProperty("background", 'linear-gradient(to right, #142E66, #4A79C5');
    }); 
});

greenThemes.addEventListener("click", () => { document.documentElement.style.setProperty('--b-color-white', "green"); });

cyanThemes.addEventListener("click", () => { document.documentElement.style.setProperty('--b-color-white', "cyan"); });

