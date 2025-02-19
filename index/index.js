const home = document.getElementById("home");
const setting = document.getElementById("setting");
const apps = document.getElementById("apps");
const about = document.getElementById("about");

const main = document.querySelector("main");




const headerMain = document.getElementById("header-main");

const subSetting = document.getElementById("sub-setting");
const subApps = document.getElementById("sub-apps");
const indexControl = document.querySelectorAll(".index-control");

const controlClose = document.querySelectorAll('.index-control-closebtn');




let a = "a";
let b = "a";

setting.addEventListener("click", () => {

    if (a == "a") {
        a = "b"; b = "a"; headerMain.innerHTML = ` <div id="sub-setting" class="sub-setting sub-setting-themes1">
                <ul id="sub-setting-ul" class="sub-setting-ul">
                    <li class="scale" id="themes-button" onclick="controler('themes')">Themes</li>
                    <li class="scale" id="fonts-button" onclick="controler('fonts')">Fonts</li>
                    <li class="scale" id="fun-button" onclick="controler('langs')">Language</li>
                    <li class="scale" id="about-button" onclick="controler('login')">Login</li>
                </ul>
            </div>`;
    main.style.setProperty("top","124px");

    } else if (a == "b") {
        a = "a"; headerMain.innerHTML = "<div></div>";
        main.style.setProperty("top","87px");

    };


});

apps.addEventListener("click", () => {
    if (b == "a") {
        b = "b"; a = "a"; headerMain.innerHTML = `<div id="sub-apps" class="sub-apps sub-apps-themes1">
                <ul id="sub-apps-ul" class="sub-apps-ul">
                    <li class="scale" id="calc-button" onclick="controler('calc')">Calc</li>
                    <li class="scale" id="tic-button" onclick="controler('tic')">Tic Tac Toe</li>
                    <li class="scale" id="Xpotyphy-button" onclick="controler('spotyphy')">Spotyphy</li>
                    <li class="scale" id="pubg-button" onclick="controler('pubg')">Coming..</li>
                </ul>
            </div>
        </div>`;
    main.style.setProperty("top","124px");

    } else if (b == "b") {
        b = "a"; headerMain.innerHTML = "<div></div>";
        main.style.setProperty("top","87px");

    };
});


console.log("Jai Shree krishna");

function controler(someone){
    indexControl.forEach(ind => {
ind.classList.add('hidden');
    });
    document.getElementById(someone).classList.toggle('hidden');
    
};








// close index-control close all index-control
controlClose.forEach(close1 => {
    close1.addEventListener("click", ()=>{

        indexControl.forEach(ind => {
            ind.classList.add('hidden');
                });
            });
    });











// fatch html files fatch html file
// fatch html files fatch html file





// function loadPage(thepage){
   
//     fetch(`${thepage}.html`).then(response => response.text()).then(html =>{
//         document.querySelector("main").innerHTML = html;
//     });
    // const newscript = document.createElement('script');
    // newscript.src = `${thepage}.js`;
    // newscript.onload = () => console.log(`${thepage}.js loaded successfully`);
    // newscript.onerror = () => console.error(`Error loading ${thepage}.js`);
    // document.body.appendChild(newscript);
    
// };

