// document.querySelector("main").addEventListener("click", ()=>{
//     apps.classList.remove("sub-nav-show2");
//     apps.classList.add("sub-apps-nav");
//     // calcScrn.style.setProperty("top", "-40px");
//     const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
//     setting.classList.remove("sub-nav-show1");
//     setting.classList.add("sub-setting-nav");

//     close11.forEach(close1 => {
//         if (close1.style.visibility !== "hidden") {
//             close1.style.setProperty("visibility", "hidden", "important");
//         };
//     });

// });
const homeMain = document.getElementById('main');
const spotyphyMain = document.getElementById('spotyphy-main');
const header = document.getElementById('header');

const settingButton = document.querySelector("#setting-button");
const appsButton = document.querySelector("#apps-button");

const setting = document.querySelector("#setting");
const apps = document.querySelector("#apps");


settingButton.addEventListener("click", () => {
    if (window.getComputedStyle(setting).visibility === "hidden") {
        setting.classList.add("sub-nav-show1");
        apps.classList.remove("sub-nav-show2");
        apps.classList.add("sub-apps-nav");
        // calcScrn.style.setProperty("top", "-40px");
        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about, #calc, #tic, #lords, #pubg");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        setting.classList.remove("sub-nav-show1");
        setting.classList.add("sub-setting-nav");

        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

        // calcScrn.style.setProperty("top", "");

    };
});

appsButton.addEventListener("click", () => {
    if (window.getComputedStyle(apps).visibility === "hidden") {
        apps.classList.add("sub-nav-show2");
        setting.classList.remove("sub-nav-show1");
        setting.classList.add("sub-setting-nav");
        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about, #calc, #tic, #lords, #pubg");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        apps.classList.remove("sub-nav-show2");
        apps.classList.add("sub-apps-nav");

        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #about");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });


        //         // calcScrn.style.setProperty("top", "");

    };
});



// closebtn  for closing the themes/fonts/fun-calc/about div 👇👇👇
// closebtn  for closing the themes/fonts/fun-calc/about div 👇👇👇
const closebtn = document.querySelectorAll(".calc-closebtn-control");
closebtn.forEach(clsbtn => {
    clsbtn.addEventListener("click", () => {
        const close11 = document.querySelectorAll(".setting-control,.apps-control");
        close11.forEach(close1 => {
            close1.style.setProperty("visibility", "hidden");
            apps.classList.remove("sub-nav-show2");
            apps.classList.add("sub-apps-nav");
            setting.classList.remove("sub-nav-show1");
            setting.classList.add("sub-apps-nav");
        
        });
    });
});
// closebtn  for closing the themes/fonts/fun-calc/about div 👆👆👆
// closebtn  for closing the themes/fonts/fun-calc/about div 👆👆👆



// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
const themesButton = document.querySelector("#themes-button");
const fontsButton = document.querySelector("#fonts-button");
const funButton = document.querySelector("#fun-button");
const aboutButton = document.querySelector("#about-button");

const themes = document.querySelector("#themes");
const fonts = document.querySelector("#fonts");
const fun = document.querySelector("#fun");
const about = document.querySelector("#about");

console.log("so maine 8 o ko contian kar liya hai");

themesButton.addEventListener("click", () => {
    if (window.getComputedStyle(themes).visibility === "hidden") {
        themes.style.setProperty("visibility", "visible", "important");

        const close11 = document.querySelectorAll("#fonts, #fun, #about, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        themes.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("themes button js passed");

fontsButton.addEventListener("click", function () {
    if (window.getComputedStyle(fonts).visibility === "hidden") {
        fonts.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#themes, #fun, #about, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }

    else {
        fonts.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter ="none";

    };

});
console.log("fonts button js passed");



funButton.addEventListener("click", function () {
    if (window.getComputedStyle(fun).visibility === "hidden") {
        fun.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#themes, #fonts, #about, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        fun.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };

});
console.log("fun button js passed");



aboutButton.addEventListener("click", function () {

    if (window.getComputedStyle(about).visibility === "hidden") {
        about.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#themes, #fonts, #fun, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        about.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("about button js passed");

// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
























// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
const calcButton = document.querySelector("#calc-button");
const ticButton = document.querySelector("#tic-button");
const lordsButton = document.querySelector("#lords-button");
const pubgButton = document.querySelector("#pubg-button");

const calc = document.querySelector("#calc");
const tic = document.querySelector("#tic");
const lords = document.querySelector("#lords");
const pubg = document.querySelector("#pubg");

console.log("so maine 8 o ko contian kar liya hai");

calcButton.addEventListener("click", () => {
    if (window.getComputedStyle(calc).visibility === "hidden") {
        calc.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#tic, #lords, #pubg, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

    }
    else {
        calc.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("calc button js passed");

ticButton.addEventListener("click", function () {
    if (window.getComputedStyle(tic).visibility === "hidden") {
        tic.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc, #lords, #pubg, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }

    else {
        tic.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter ="none";

    };

});
console.log("tic button js passed");



lordsButton.addEventListener("click", function () {
    if (window.getComputedStyle(lords).visibility === "hidden") {
        lords.style.setProperty("visibility", "visible", "important");

        const close11 = document.querySelectorAll("#calc, #tic, #pubg, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        lords.style.setProperty("visibility", "hidden", "important");
    };
 header.style.setProperty('display','none');
 homeMain.style.setProperty('display','none');
 spotyphyMain.style.setProperty('inherit');


});
console.log("lords button js passed");



pubgButton.addEventListener("click", function () {

    if (window.getComputedStyle(pubg).visibility === "hidden") {
        pubg.style.setProperty("visibility", "visible", "important");
        // document.querySelector("#calc-main2").style.opacity = 0.7;
        // document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc, #tic, #lords, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        pubg.style.setProperty("visibility", "hidden", "important");
        // document.getElementById("calc-main2").style.opacity = 1;
        // document.getElementById("calc-main2").style.filter = "none";

    };
});
console.log("pubg button js passed");



const openapp = document.querySelectorAll(".openApp");
openapp.forEach(button =>{
    button.addEventListener("click", ()=>{
        const close11 = document.querySelectorAll("#calc, #tic, #lords,#pubg, #helpbox");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });

});
});
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185
// for opening sub-nav-bar themes fun calc bali hidden div options from line 66 to 185








// help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle help circle
const mainchild = document.querySelector('main').firstElementChild.classList;
const helpcircle = document.getElementById("helpcircle");
const helpbox = document.getElementById("helpbox");
let isTranslated = false;


helpcircle.addEventListener("click", () => {
    const visibility = window.getComputedStyle(helpbox).visibility;
    if (visibility === "hidden") { helpbox.style.visibility = "visible", 
        helpbox.style.animation= "zoom 0.9s linear 1 normal forwards",
        setTimeout(()=>{
            
                helpbox.innerHTML=`<h1>Hey User</h1>
        <div class="help1" id="help1">
            <div class="transparent-card">

                <span class="one1">
                    My name is navigator. </span>
                <span class="one1">
                    BTW, you can also call me HelpCircle.</span><br><br>
                <span class="one1">
                    (Touch me for better visuals) </span>
                <br><br>
                <span class="one1">
                    I'm here just for you, </span>
                <span class="one1">
                    to remind you that you have a magical touch.💕💖 </span>
                <span class="one1">
                    So go ahead, touch things </span>
                <span class="one1">
                    and watch the magic happen!</span><br><br>
                ( scroll 👇)
            </div>
        </div>
        <div class="purple" id="help2">
            <div class="transparent-card">
                <p>Long press me 😁</p>
            </div>
            <div class="transparent-card">

                <span class="one1">
                    Yes ! this is how you are to touch things and make the web beautiful. </span>
            </div>
            <div class="transparent-card">

                <span class="one1">
                    but it's not the only thing what you can do.. explore down </span>
            </div>

        </div>
        <div class="yellow" id="help2">
            <div class="transparent-card one1" id="help2">
                <span class="one1">Header me,, de rakhe "setting" options se aap themes, fonts style,language change kar
                    sakte ho, aur login bhi</span>
            </div>
            <div class="transparent-card one1" id="help2">
                <span class="one1">Currently Language option isn't available</span>
            </div>
        </div>
        <div class="orange" id="help2">
            <div class="transparent-card one1" id="help2">
                <span class="one1">Apps tab me jaane per aap calc aur tic tac toe app khol sakte hai</span>
            </div>
            <div class="transparent-card one1" id="help2">
                <span class="one1">About tab me - Developer yani ki mai (mere) vishay me janane ke liye sampark kare
                </span>
            </div>
        </div>
        <div class="blue" id="help2">
            <div class="transparent-card one1" id="help2">
                <span class="one1">Hey front per lagi photo ko touch karne per hone bala magic at leeast mere liye
                    satisfying hai </span>
            </div>
            <div class="transparent-card one1" id="help2">
                <span class="one1">( SCROLL )</span>
            </div>
        </div>
        <div class="green" id="help2">
            <div class="transparent-card one1" id="help2">
                <span class="one1">So finally you have discoverded the complete home page .. </span>
            </div>
            <div class="transparent-card one1" id="help2">
                <span class="one1">Now,, time to viste to other page as calc..</span>
            </div>
        </div>
        <div class="red" id="help2">
            <div class="transparent-card one1" id="help2">
                <span class="one1"></span>
            </div>
            <div class="transparent-card one1" id="help2">
                <span class="one1"></span>
            </div>
        </div>`;
            

        },1000);
 
    } else { helpbox.style.visibility = "hidden", document.querySelector("main").style.overflow = "auto", document.querySelector("main").style.height = "auto" ,helpbox.style.animation="none" };

    if (isTranslated === false) {
        helpcircle.style.transform = " translateX(-40vw) translateY(-3vh )";
        isTranslated = true;
    } else {
        isTranslated = false;
        helpcircle.style.transform = "translateX(0) translateY(0)";
    };

});














const newlink = document.createElement('link');

const loadCalc = document.getElementById("loadCalc");
const loadhome = document.getElementById("home");

loadCalc.addEventListener("click", ()=>{

    fetch('calc.html').then(response => response.text()).then(html =>{
        document.querySelector("main").innerHTML = html;
    });

    let oldScript = document.getElementById("calcjs");
    if(oldScript){
        oldScript.remove();
    };

    let newscript = document.createElement('script');
    newscript.src= 'calc.js';
    newscript.type= 'text/javascript';
    newscript.id= 'calcjs';
    document.body.appendChild(newscript);
    
});

loadhome.addEventListener("click", ()=>{
    document.querySelector("main").innerHTML = `        <div class="home main">
            <div class="flexcenter calc-main">
                <div class="nouse">
                    <div id="main-home-id" class="flexcenter main-home-id white-border">


                    
                    <div>
                    <h1 class="first-text" id="first-text">Dear&nbsp;&nbsp;<span id="id1"> Your Name</span>
                    <span>
                    <span class="break">Welcome &nbsp; to </span>
                    <span class="break">My web</span>
                    </span>
                    </h1>
                    </div>
                    

                    
                    <div class="dialog">
                    <div>
                    <p id="welcome1" class="welcome">Let me take you to a place</p>
                    <p id="welcome2" class="welcome">Where dreams meet design ❤</p>
                    </div><!-- <hr> -->
                    <div id="photo-frame" class="flexcenter">
                    <div class="photo"></div>
                    </div>
                    </div>
                    
                    <div id="mymedia">
                    <div id="prev" class="flexcenter scale button">Pre...</div>
                    <div id="next" class="flexcenter scale button">Next</div>
                        </div>
                        <div class="bigtext flexcenter ">
                        <h1 class="noteforyou flexcenter">A Little Note for You</h1>
                            <p>
                            Sometimes, life gives us surprises in the most unexpected ways. Meeting you feels like
                            one
                            of those
                            rare gifts that make everything brighter. Whether it's the way you laugh, the way you
                                see
                                the world,
                                or the way you make even the simplest moments feel magical, it all inspires me. They say
                                some people
                                cross our paths for a reason, and I truly believe you are one of them.
                                </p>
                            <p>
                            Friendship is where it all begins, and it's amazing how a simple bond can transform into
                                something
                                so meaningful. I've always admired the way you treat others with kindness and how your
                                presence
                                lights up any room. You might not even realize it, but you have this ability to make
                                people
                                feel
                                special just by being yourself.
                                </p>
                                
                                <p>
                                If I were to write about everything I admire about you, this page might not be enough!
                                But
                                here's
                                the thing—life is not just about grand moments or big words. It's also about those
                                little
                                things:
                                the small gestures, the smiles that linger, and the conversations that stay with us long
                                after
                                they're over. And with you, every moment feels like a memory worth cherishing.
                                </p>
                                <p>
                                To be honest, I sometimes wonder if words are enough to express what I feel, but then
                                again,
                                words
                                are all I have. I wanted to take this chance to tell you how much your presence means to
                                me.
                                Whether
                                we're laughing over silly jokes, talking about random things, or just sitting in
                                silence, it
                                all
                                feels special because it's with you.
                                </p>
                                <p>
                                At the end of the day, all I truly wish for is your happiness. Whether you're chasing
                                your
                                dreams,
                                overcoming challenges, or just enjoying life's little moments, I hope you know there
                                will
                                always be
                                someone cheering for you. Because you're not just a friend, you're someone who inspires
                                me
                                to be
                                better, to see the beauty in everything, and to believe in the power of connection.
                                </p>
                                <p>
                                So, here's to many more shared laughs, unforgettable moments, and beautiful days ahead.
                                Life
                                has so
                                much to offer, and I feel lucky to share even a small part of it with you. Thank you for
                                being you,
                                for being someone who makes life a little more meaningful.
                                </p>
                        </div>
                        <div class="afternote p flexcenter" style="text-align: center; font-weight: bold;">You’re truly
                        special, and
                        I hope you never forget that.🥰</div>

                        
                        
                        <div class="afternote flexcenter">Hiihihi Kaisa Laga Mera Majak.. <br> I was just kidding. 😁
                        </div>
                        <div class="imgafternote"></div>
                        </div>
                        </div>
                        <div class="aftrerpic" id="afterpic"></div>
                        
            </div>
        </div>
`;
document.getElementById("calcjs").remove();
});






