document.getElementById("spotyphy-login").addEventListener("click", ()=>{
    alert("Function not available;");
});

const signUpFree = document.getElementById("spotyphy-login-guest");
const firstPage = document.getElementById("guest-account");
const secondPage = document.getElementById("guest-account-2");

const myEmail = document.getElementById("input-email");


signUpFree.addEventListener("click", ()=>{

    firstPage.style.display = "none";
    secondPage.style.setProperty("visibility", "visible" , "important")
});

function spotyphyLoginCheck(){
    secondPage.style.display = "none";
    document.querySelector('.container').style.setProperty('display',"inherit")
};

function playaudio(){
    const audio = document.getElementById('myaudio1');
    audio.play();
};

