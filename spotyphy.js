document.getElementById("spotyphy-login").addEventListener("click", () => {
  alert("Function not available;");
});

const signUpFree = document.getElementById("spotyphy-login-guest");
const firstPage = document.getElementById("guest-account");
const secondPage = document.getElementById("guest-account-2");

const musicplay = document.getElementById('musicplay');
const footer = document.querySelector('footer');

signUpFree.addEventListener("click", () => {

  firstPage.style.display = "none";
  secondPage.style.setProperty("visibility", "visible", "important")
});



function validateForm() {
  let myEmail = document.getElementById("input-email");
  let name = document.getElementById("input-name").value;
  let number = document.getElementById("input-number").value;

  // if (name.trim() === "") {
  //     alert("Please enter your name.");
  //     return;
  // }

  // if (number.length !== 10 || isNaN(number)) {
  //     alert("Please enter a valid 10-digit phone number.");
  //     return;
  // }

  secondPage.style.display = "none";
  document.querySelector('.container').style.setProperty('display', "inherit")
  document.getElementById('spotifyUser').innerText = "Hello " + name;
  footer.style.setProperty('display', 'inherit');
};



















const contHead = document.getElementById('cont-head');
const contMain = document.getElementById('cont-main');
const search = document.getElementById('search');
const contMenu = document.getElementById('cont-menu');

const myaudio1 = document.getElementById('myaudio1');
const myaudio2 = document.getElementById('myaudio2');
const myaudio3 = document.getElementById('myaudio3');
const myaudio4 = document.getElementById('myaudio4');
// const myaudio5 = document.getElementById('myaudio5');
// const myaudio6 = document.getElementById('myaudio6');
// const myaudio7 = document.getElementById('myaudio7');
// const myaudio8 = document.getElementById('myaudio8');
// const myaudio9 = document.getElementById('myaudio9');
// const myaudio10 = document.getElementById('myaudio10');
// const myaudio11 = document.getElementById('myaudio11');
// const myaudio12 = document.getElementById('myaudio12');
// const myaudio13 = document.getElementById('myaudio13');
// const myaudio14 = document.getElementById('myaudio14');
// const myaudio15 = document.getElementById('myaudio15');
// const myaudio16 = document.getElementById('myaudio16');
// const myaudio17 = document.getElementById('myaudio17');
// const myaudio18 = document.getElementById('myaudio18');

const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const songThumb = document.getElementById("song-thumb");
const closeMusicPlay = document.getElementById("closeMusicPlay");


const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const song5 = document.getElementById("song5");
const song6 = document.getElementById("song6");
const song7 = document.getElementById("song7");
const song8 = document.getElementById("song8");
const song9 = document.getElementById("song9");
const song10 = document.getElementById("song10");
const song11 = document.getElementById("song11");
const song12 = document.getElementById("song12");
const song13 = document.getElementById("song13");
const song14 = document.getElementById("song14");
const song15 = document.getElementById("song15");
const song16 = document.getElementById("song16");
const song17 = document.getElementById("song17");
const song18 = document.getElementById("song18");



const audiotime = document.getElementById('audiotime');
const songduration = document.getElementById('songduration');





let anyaudio = "";

function playaudio(audioId, thumbnail) {
  musicplay.style.setProperty('display', "flex");

  const myaudio = document.getElementById(audioId);
  const close111 = document.querySelectorAll("audio");
  close111.forEach(close1 => {
    close1.pause();
  });


  if (myaudio.paused) {
    myaudio.play();
    playPauseBtn.textContent = 'Pause';
    if (window.matchMedia("(orientation: landscape)").matches) {

      musicplay.style.setProperty('display', 'inherit');}
      else{
        musicplay.style.setProperty('display', 'flex');
      };
      
  } else {
    myaudio.pause();
    musicplay.style.setProperty('display', "none");
  };
  anyaudio = myaudio;
  seekBar.value = "0";
  myaudio.currentTime = seekBar.value;
  songThumb.style.setProperty("background", thumbnail);
  songThumb.style.setProperty("background-size", "cover");




  myaudio.addEventListener('timeupdate', () => {
    seekBar.max = anyaudio.duration;
    seekBar.value = anyaudio.currentTime;

    let minutes = Math.floor(anyaudio.currentTime / 60);
    let seconds = Math.floor(anyaudio.currentTime % 60);

    // Formatting seconds to always show two digits
    seconds = seconds < 10 ? "0" + seconds : seconds;

    audiotime.innerHTML = `${minutes}:${seconds}`;

    let minutes2 = Math.floor(anyaudio.duration / 60);
    let seconds2 = Math.floor(anyaudio.duration % 60);

    seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
    songduration.innerHTML = `${minutes2}:${seconds2}`;

  });
};

song1.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = "<span style='color: white;'>Kal the yahi <br> Kyu ab nahi  <br>  Tum aur mai saath dono <br> Kya mil gyi tumko khusi <br> Hoke juda yeh toh bolo <br> Pyar tha waqt nahi <br> jo beet gya do pal me <br> tu banke yaad rahe  <br> fariyad rahega dil me <br>  Socha , kahunga ek din <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga <br> jo tu na mila mujhe<br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga  <br> <br>Kah de tu aayega nhi  <br> mujhse mil payega nhi <br> Dekhun kyu rahe mai teri <br> Dil se tu jayega nhi <br> Tu dard samjhega ye nhi <br> Mushkil hai aage Zindgi <br>  <br> Mann tha bada, tu hota mera <br> Tu na mila, ghum hai tera <br>  <br> Kyun dia dard hume <br> hum aaj talak na samjhe <br> Bure hai kya itne  <br> Tum aa na sake jo milne <br> Tu humko bhool gya  <br> Bus yrr hum hi pagal the <br> Sochha Tumhe Jo Raat Din <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga  <br> jo tu jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga</span>";
  lyricsdivmain2.innerHTML =  `Listen Jo tu na mila on yt<iframe width="340" height="192" src="https://www.youtube.com/embed/wPqpmsYISBc?si=_OswlQxXZSM1534X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
});

song2.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = "<span style='color: white;'><span class='headingInLyrics'>[Verse 1]</span><br>Hum tere bin ab reh nahi sakte<br>Tere bina kya wajood mera?<br>Hum tere bin ab reh nahi sakte<br>Tere bina kya wajood mera?<br>Tujhse juda gar ho jayenge<br>To khudse hi ho jayenge juda<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Verse 2]</span><br>Tera mera rishta hai kaisa<br>Ek pal dur gawara nahi<br>Tere liye har roz hai jeete<br>Tujhko diya mera waqt sabhi<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><br>Koi lamha mera na ho tere bina<br>Har saans pe naam tera<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Bridge]</span><br>Tum hi ho<br>Tum hi ho<br>Tere liye hi jiya main<br>Khudko jo yun de diya hai<br>Teri wafa ne mujhko sambhala<br>Sare ghamon ko dil se nikala<br> <br><span class='headingInLyrics'>[Pre-Chorus]</span><br>Tere saath mera hai naseeb juda<br>Tujhe paake aadura na raha<br> <br><span class='headingInLyrics'>[Chorus]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho<br> <br><span class='headingInLyrics'>[Outro]</span><br>Kyunki tum hi ho, ab tum hi ho<br>Zindagi, ab tum hi ho<br>Chain bhi, mera dard bhi<br>Meri aashiqui, ab tum hi ho</span>";
lyricsdivmain2.innerHTML =  `Listen Tum hi ho on yt<iframe width="340" height="192" src="https://www.youtube.com/embed/asxmdFaIock?si=tTMSwLlZo9jX3pJn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
});

song3.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = " ";
});

song4.addEventListener("click", () => {
  lyricsdivmain1.innerHTML = "<span style='color: white;'>panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>haye o ta ra ra ru<br>haye o ta ra ra ru<br>panna ki tamanna hal ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br>hira toh pehle hi kisi aur kaa ho chuka<br>hira toh pehle hi kisi aur kaa ho chuka<br>kissi ki, madbhari aankho me kho chuka<br>yado ki bas dhul ban chuka dil kaa phul<br>sine pe mai rakh du jo hath<br>phir khil jaye chahe meri jaan jaye chahe meraa dil jaye <br> ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> dil toh dete hai lete hai log kayi baar <br> dil toh dete hai lete hai log kayi baar <br>huwa kya, kisi se, kiya tha tumne pyar<br>yado ko chhod de, wado ko tod de<br>apni  jagah se kaise parbat hil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> bhula naa mere dil ko kabhi jis kaa khayal<br>bhula naa mere dil ko kabhi jis kaa khayal<br>ho sake, toh use, mere dil se tu nikal<br>naa karu mai yeh kam toh nahi meraa naam<br>naa karu mai yeh kam toh nahi meraa naam<br>baton se yeh jakhme-jigar kaise sil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho le lo, ta ra ra ru, ho le lo, ta ra ra ru</span>";
});








playPauseBtn.addEventListener('click', () => {
  if (anyaudio.paused) {
    anyaudio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    anyaudio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

seekBar.addEventListener('input', () => {
  anyaudio.currentTime = seekBar.value;
});

volumeBar.addEventListener('input', () => {
  anyaudio.volume = volumeBar.value;
});





closeMusicPlay.addEventListener('click', () => {

  if (lyricsdivmain1.style.display === "inherit") {
    musicplay.style.removeProperty('top', "10px");
    contHead.style.setProperty('display', 'flex');
    contMain.style.setProperty('display', 'flex');
    search.style.setProperty('display', 'inherit');
    lyricsdivclose.style.setProperty('display', "none");
    fullLyrics.style.setProperty('display', "none");
    lyricsdivmain1.style.setProperty('display', "none");
    lyricsdivmain2.style.setProperty('display', "none");
    }else{
  musicplay.style.setProperty('display', "none");
  anyaudio.pause();
  playPauseBtn.textContent = 'Play';
  musicplay.style.removeProperty('top', "10px");
  contHead.style.setProperty('display', 'flex');
  contMain.style.setProperty('display', 'flex');
  search.style.setProperty('display', 'inherit');
  lyricsdivclose.style.setProperty('display', "none");
  fullLyrics.style.setProperty('display', "none");
  lyricsdivmain1.style.setProperty('display', "none");
  lyricsdivmain2.style.setProperty('display', "none");
    };


    if(fullLyrics.textContent === "Short Lyrics"){
      lyricsdivclose.style.removeProperty('top', "0");
      fullLyrics.style.removeProperty('top', "0");
      divExtraBali.style.removeProperty('top', "0");
      lyricsdivmain2.style.removeProperty('top', "0");
      lyricsdivmain1.style.removeProperty('top', "10px");
      lyricsdivmain1.style.removeProperty('width', "100%");
      lyricsdivmain1.style.removeProperty('height', "100%");
      fullLyrics.textContent = "Full Lyrics";}
  
});


const lyrics = document.getElementById('lyrics');
const lyricsdivclose = document.getElementById('lyricsdivclose');
const lyricsdivmain1 = document.getElementById('lyricsdivmain1');
const lyricsdivmain2 = document.getElementById('lyricsdivmain2');
const fullLyrics = document.getElementById('fullLyrics');
const divExtraBali = document.querySelector('.divExtraBali');


lyrics.addEventListener('click', () => {

  if (window.matchMedia("(orientation: landscape)").matches) {
    lyricsdivclose.style.setProperty('display', "none");
    fullLyrics.style.setProperty('display', "none");
    lyricsdivmain2.style.setProperty('display', "none");
    lyricsdivmain1.style.setProperty('top', "0");
    lyricsdivmain1.style.setProperty('width', "90%");
    lyricsdivmain1.style.setProperty('height', "100%");}
    else{musicplay.style.setProperty('top', "10px");};

    
  contHead.style.setProperty('display', 'none');
  contMain.style.setProperty('display', 'none');
  search.style.setProperty('display', 'none');
  lyricsdivmain1.style.setProperty('display', "inherit");
  lyricsdivmain2.style.setProperty('display', "inherit");
  lyricsdivclose.style.setProperty('display', "flex");
  fullLyrics.style.setProperty('display', "flex");
});

lyricsdivclose.addEventListener('click', () => {
  musicplay.style.removeProperty('top', "10px");
  contHead.style.setProperty('display', 'flex');
  contMain.style.setProperty('display', 'flex');
  search.style.setProperty('display', 'inherit');
  lyricsdivclose.style.setProperty('display', "none");
  fullLyrics.style.setProperty('display', "none");
  lyricsdivmain1.style.setProperty('display', "none");
  lyricsdivmain2.style.setProperty('display', "none");

  if(fullLyrics.textContent === "Short Lyrics"){
    lyricsdivclose.style.removeProperty('top', "0");
    fullLyrics.style.removeProperty('top', "0");
    divExtraBali.style.removeProperty('top', "0");
    lyricsdivmain2.style.removeProperty('top', "0");
    lyricsdivmain1.style.removeProperty('top', "10px");
    lyricsdivmain1.style.removeProperty('width', "100%");
    lyricsdivmain1.style.removeProperty('height', "100%");
    fullLyrics.textContent = "Full Lyrics";}
});

fullLyrics.addEventListener('click', () => {
  if(fullLyrics.textContent === "Full Lyrics"){
  musicplay.style.removeProperty('top', "0px");
  lyricsdivclose.style.setProperty('top', "0");
  fullLyrics.style.setProperty('top', "0");
  divExtraBali.style.setProperty('top', "0");
  lyricsdivmain2.style.setProperty('top', "0");
  lyricsdivmain1.style.setProperty('top', "0");
  lyricsdivmain1.style.setProperty('width', "90%");
  lyricsdivmain1.style.setProperty('height', "100%");
  fullLyrics.textContent = "Short Lyrics";}
  else{
    musicplay.style.setProperty('top', "10px");
    lyricsdivclose.style.removeProperty('top', "0");
    fullLyrics.style.removeProperty('top', "0");
    divExtraBali.style.removeProperty('top', "0");
    lyricsdivmain2.style.removeProperty('top', "0");
    lyricsdivmain1.style.removeProperty('top', "10px");
    lyricsdivmain1.style.removeProperty('width', "100%");
    lyricsdivmain1.style.removeProperty('height', "100%");
    fullLyrics.textContent = "Full Lyrics";
  }

});






const contHome = document.getElementById('cont-home');
const homeDiv = document.querySelector('.spotyphy');

const contExplore = document.getElementById('cont-explore');
const exploreDiv = document.getElementById('explore-div');

// const contLikes = document.getElementById('cont-likes');
// const likesDiv = document.getElementById('likes-div');

const contPre = document.getElementById('cont-pre');
const premiumDiv = document.getElementById('premium-div');


contHome.addEventListener('click', () => {
  exploreDiv.style.setProperty('display', "none");
  premiumDiv.style.setProperty('display', "none");
  // likesDiv.style.setProperty('display', "none");
  homeDiv.style.setProperty('display', "inherit");

});

contExplore.addEventListener('click', () => {
  exploreDiv.style.setProperty('display', "inherit");
  premiumDiv.style.setProperty('display', "none");
  // likesDiv.style.setProperty('display', "none");
  homeDiv.style.setProperty('display', "none");
});

// constLikes.addEventListener('click',()=>{
// homeDiv.innerHTML = " ";
// homeDiv.style.setProperty('background',"black");

// });

contPre.addEventListener('click', () => {
  exploreDiv.style.setProperty('display', "none");
  premiumDiv.style.setProperty('display', "flex");
  homeDiv.style.setProperty('display', "none");

});

// const searchbtn = document.getElementById('searchbtn');
// const searchinput = document.getElementById('searchinput');

// searchbtn.addEventListener('click',()=>{
//   let searchvalue = searchinput.value;
//   searchinput.value = "";
//   alert("Search for "+ searchvalue + " is not available right now.");
// });







document.getElementById("makePaymentBtn").addEventListener("click", () => {
  const upiID = "9580338477@ptyes";  // सही UPI ID डालें
  const name = "Himanshu Singh";
  const amount = "10000";  // अमाउंट बदल सकते हैं
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&mc=&tid=&tr=&tn=Payment&am=${amount}&cu=INR`;

  window.location.href = upiLink;
});

document.getElementById("makePaymentBtn2").addEventListener("click", () => {
  const upiID = "9580338477@ptyes";  // सही UPI ID डालें
  const name = "Himanshu Singh";
  const amount = "2";  // अमाउंट बदल सकते हैं
  const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&mc=&tid=&tr=&tn=Payment&am=${amount}&cu=INR`;

  window.location.href = upiLink;
});


