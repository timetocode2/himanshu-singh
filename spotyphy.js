document.getElementById("spotyphy-login").addEventListener("click", () => {
  alert("Function not available;");
});

const signUpFree = document.getElementById("spotyphy-login-guest");
const firstPage = document.getElementById("guest-account");
const secondPage = document.getElementById("guest-account-2");

const musicplay = document.getElementById('musicplay');


signUpFree.addEventListener("click", () => {

  firstPage.style.display = "none";
  secondPage.style.setProperty("visibility", "visible", "important")
});



function validateForm() {
  let myEmail = document.getElementById("input-email");
  let name = document.getElementById("input-name").value;
  let number = document.getElementById("input-number").value;

  if (name.trim() === "") {
      alert("Please enter your name.");
      return;
  }

  if (number.length !== 10 || isNaN(number)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  secondPage.style.display = "none";
  document.querySelector('.container').style.setProperty('display', "inherit")
  document.getElementById('spotifyUser').innerText= "Hello "+ name;
};



// function playaudio(aaa){
//   const audio111 = document.getElementById(aaa);
//   audio111.play();

// playPauseBtn.addEventListener('click', () => {
//   if (audio111.paused) {
//     audio111.play();
//     playPauseBtn.textContent = 'Pause';
//   } else {
//     audio111.pause();
//     playPauseBtn.textContent = 'Play';
//   }
// });

// seekBar.addEventListener('input', () => {
  // audio111.currentTime = seekBar.value;
// });

// volumeBar.addEventListener('input', () => {
//   audio111.volume = volumeBar.value;
// });

// audio111.addEventListener('timeupdate', () => {
  // seekBar.max = audio111.duration;
  // seekBar.value = audio111.currentTime;
// });

// audio111.addEventListener('ended', () => {
//   playPauseBtn.textContent = 'Play';
// });


// };
const contHead = document.getElementById('cont-head');
const contMain = document.getElementById('cont-main');
const search = document.getElementById('search');

const audio1 = document.getElementById('myaudio1');
const audio2 = document.getElementById('myaudio2');
const audio3 = document.getElementById('myaudio3');
const audio4 = document.getElementById('myaudio4');
const audio5 = document.getElementById('myaudio5');
const audio6 = document.getElementById('myaudio6');
const audio7 = document.getElementById('myaudio7');
const audio8 = document.getElementById('myaudio8');
const audio9 = document.getElementById('myaudio9');
const audio10 = document.getElementById('myaudio10');
const audio11 = document.getElementById('myaudio11');
const audio12 = document.getElementById('myaudio12');
const audio13 = document.getElementById('myaudio13');
const audio14 = document.getElementById('myaudio14');
const audio15 = document.getElementById('myaudio15');
const audio16 = document.getElementById('myaudio16');
const audio17 = document.getElementById('myaudio17');
const audio18 = document.getElementById('myaudio18');

const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const songThumb = document.getElementById("song-thumb");

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

song1.addEventListener("click", ()=>{
const close111 = document.querySelectorAll(" #myaudio2, #myaudio3, #myaudio4, #myaudio5, #myaudio6, #myaudio7, #myaudio8, #myaudio9, #myaudio10, #myaudio11, #myaudio12, #myaudio13, #myaudio14, #myaudio15, #myaudio16, #myaudio17, #myaudio18");
close111.forEach(close1 =>{
  close1.pause();
});
if (audio1.paused) {
audio1.play();
  playPauseBtn.textContent = 'Pause';
} else {
  audio1.pause();
  playPauseBtn.textContent = 'Play';
};
anyaudio = audio1;
seekBar.value = "0";
audio1.currentTime = seekBar.value;

songThumb.style.setProperty("background","url('media/jo\ tu\ na\ mila\ thumbnail.jpg')");
songThumb.style.setProperty("background-size","cover");

lyricsdivmain.style.setProperty("background","url('')");
lyricsdivmain.innerHTML = "<span style='color: white;'>Kal the yahi <br> Kyu ab nahi  <br>  Tum aur mai saath dono <br> Kya mil gyi tumko khusi <br> Hoke juda yeh toh bolo <br> Pyar tha waqt nahi <br> jo beet gya do pal me <br> tu banke yaad rahe  <br> fariyad rahega dil me <br>  Socha , kahunga ek din <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga <br> jo tu na mila mujhe<br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga  <br> <br>Kah de tu aayega nhi  <br> mujhse mil payega nhi <br> Dekhun kyu rahe mai teri <br> Dil se tu jayega nhi <br> Tu dard samjhega ye nhi <br> Mushkil hai aage Zindgi <br>  <br> Mann tha bada, tu hota mera <br> Tu na mila, ghum hai tera <br>  <br> Kyun dia dard hume <br> hum aaj talak na samjhe <br> Bure hai kya itne  <br> Tum aa na sake jo milne <br> Tu humko bhool gya  <br> Bus yrr hum hi pagal the <br> Sochha Tumhe Jo Raat Din <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga <br> jo tu na mila mujhe <br> jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga  <br> jo tu jo tu na mila mujhe <br> Dil ko Kya bataunga <br> Dil ko Kya bataunga</span>";

});

song2.addEventListener("click", ()=>{
  const close111 = document.querySelectorAll("#myaudio1, #myaudio3, #myaudio4, #myaudio5, #myaudio6, #myaudio7, #myaudio8, #myaudio9, #myaudio10, #myaudio11, #myaudio12, #myaudio13, #myaudio14, #myaudio15, #myaudio16, #myaudio17, #myaudio18");
  close111.forEach(close1 =>{
    close1.pause();
  });
  if (audio2.paused) {
    audio2.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio2.pause();
    playPauseBtn.textContent = 'Play';
  };
  anyaudio = audio2;
  seekBar.value = "0";
  audio2.currentTime = seekBar.value;
  
  songThumb.style.setProperty("background","url('media/tum\ hi\ ho\ thumbnail.jpg')");
  songThumb.style.setProperty("background-size","cover");
  lyricsdivmain.style.setProperty("background","url('media/tum\ hi\ ho\ lyrics.jpg')");
  lyricsdivmain.style.setProperty("background-repeat","no-repeat");
  lyricsdivmain.style.setProperty("background-size","cover");
  lyricsdivmain.style.setProperty("background-position","center");
  lyricsdivmain.innerHTML = " ";

});


song3.addEventListener("click", ()=>{
  const close111 = document.querySelectorAll("#myaudio1, #myaudio2, #myaudio4, #myaudio5, #myaudio6, #myaudio7, #myaudio8, #myaudio9, #myaudio10, #myaudio11, #myaudio12, #myaudio13, #myaudio14, #myaudio15, #myaudio16, #myaudio17, #myaudio18");
  close111.forEach(close1 =>{
    close1.pause();
  });
  if (audio3.paused) {
    audio3.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio3.pause();
    playPauseBtn.textContent = 'Play';
  };
  anyaudio = audio3;
  seekBar.value = "0";
  audio3.currentTime = seekBar.value;

  songThumb.style.setProperty("background","url('media/teri\ ore\ thumbnail.jpg')");
  songThumb.style.setProperty("background-size","cover");
  lyricsdivmain.style.setProperty("background","url('images\ (1).jpeg')");
  lyricsdivmain.innerHTML = " ";
  lyricsdivmain.style.setProperty("background-repeat","no-repeat");
  lyricsdivmain.style.setProperty("background-size","cover");
  lyricsdivmain.style.setProperty("background-position","center");

  
});


song4.addEventListener("click", ()=>{
const close111 = document.querySelectorAll(" #myaudio2, #myaudio3, #myaudio1, #myaudio5, #myaudio6, #myaudio7, #myaudio8, #myaudio9, #myaudio10, #myaudio11, #myaudio12, #myaudio13, #myaudio14, #myaudio15, #myaudio16, #myaudio17, #myaudio18");
close111.forEach(close1 =>{
  close1.pause();
});
if (audio4.paused) {
audio4.play();
  playPauseBtn.textContent = 'Pause';
} else {
  audio4.pause();
  playPauseBtn.textContent = 'Play';
};
anyaudio = audio4;
seekBar.value = "0";
audio4.currentTime = seekBar.value;

songThumb.style.setProperty("background","url('panna-ki-tamanna-thumb.jpeg')");
songThumb.style.setProperty("background-size","cover");

lyricsdivmain.style.setProperty("background","url('')");
lyricsdivmain.innerHTML = "<span style='color: white;'>panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>haye o ta ra ra ru<br>haye o ta ra ra ru<br>panna ki tamanna hal ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br>hira toh pehle hi kisi aur kaa ho chuka<br>hira toh pehle hi kisi aur kaa ho chuka<br>kissi ki, madbhari aankho me kho chuka<br>yado ki bas dhul ban chuka dil kaa phul<br>sine pe mai rakh du jo hath<br>phir khil jaye chahe meri jaan jaye chahe meraa dil jaye <br> ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> dil toh dete hai lete hai log kayi baar <br> dil toh dete hai lete hai log kayi baar <br>huwa kya, kisi se, kiya tha tumne pyar<br>yado ko chhod de, wado ko tod de<br>apni  jagah se kaise parbat hil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br> <br> bhula naa mere dil ko kabhi jis kaa khayal<br>bhula naa mere dil ko kabhi jis kaa khayal<br>ho sake, toh use, mere dil se tu nikal<br>naa karu mai yeh kam toh nahi meraa naam<br>naa karu mai yeh kam toh nahi meraa naam<br>baton se yeh jakhme-jigar kaise sil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho panna ki tamanna hai ke hira mujhe mil jaye<br>chahe meri jaan jaye chahe meraa dil jaye<br>ho le lo, ta ra ra ru, ho le lo, ta ra ra ru</span>";

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

audio3.addEventListener('ended', () => {
  playPauseBtn.textContent = 'Play';
});


audio1.addEventListener('timeupdate', () => {
  seekBar.max = anyaudio.duration;
  seekBar.value = anyaudio.currentTime;
});
audio2.addEventListener('timeupdate', () => {
  seekBar.max = anyaudio.duration;
  seekBar.value = anyaudio.currentTime;
});
audio3.addEventListener('timeupdate', () => {
  seekBar.max = anyaudio.duration;
  seekBar.value = anyaudio.currentTime;
});

audio1.addEventListener('timeupdate', ()=>{

  let minutes = Math.floor(anyaudio.currentTime / 60);
  let seconds = Math.floor(anyaudio.currentTime % 60);

  // Formatting seconds to always show two digits
  seconds = seconds < 10 ? "0" + seconds : seconds;

  audiotime.innerHTML = `${minutes}:${seconds}`;

  let minutes2 = Math.floor(anyaudio.duration / 60);
  let seconds2 = Math.floor(anyaudio.duration % 60);

  seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
  songduration.innerHTML = `${minutes2}:${seconds2}`;


})
audio2.addEventListener('timeupdate', ()=>{

  let minutes = Math.floor(anyaudio.currentTime / 60);
  let seconds = Math.floor(anyaudio.currentTime % 60);

  // Formatting seconds to always show two digits
  seconds = seconds < 10 ? "0" + seconds : seconds;

  audiotime.innerHTML = `${minutes}:${seconds}`;

  let minutes2 = Math.floor(anyaudio.duration / 60);
  let seconds2 = Math.floor(anyaudio.duration % 60);

  seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
  songduration.innerHTML = `${minutes2}:${seconds2}`;


})
audio3.addEventListener('timeupdate', ()=>{

  let minutes = Math.floor(anyaudio.currentTime / 60);
  let seconds = Math.floor(anyaudio.currentTime % 60);

  // Formatting seconds to always show two digits
  seconds = seconds < 10 ? "0" + seconds : seconds;

  audiotime.innerHTML = `${minutes}:${seconds}`;

  let minutes2 = Math.floor(anyaudio.duration / 60);
  let seconds2 = Math.floor(anyaudio.duration % 60);

  seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
  songduration.innerHTML = `${minutes2}:${seconds2}`;


})



















const lyrics = document.getElementById('lyrics');
const lyricsdiv = document.getElementById('lyricsdiv');
const lyricsdivclose = document.getElementById('lyricsdivclose');
const lyricsdivmain = document.getElementById('lyricsdivmain');


lyrics.addEventListener('click', ()=>{

  musicplay.style.setProperty('position',"fixed");
  musicplay.style.setProperty('top',"0");
  contHead.style.setProperty('visibility', 'hidden');
  contMain.style.setProperty('visibility', 'hidden');
  search.style.setProperty('visibility', 'hidden');
  lyricsdiv.style.setProperty('display',"inherit");
});

lyricsdivclose.addEventListener('click',()=>{
  musicplay.style.setProperty('position',"static");
  musicplay.style.setProperty('top',"0");
  contHead.style.setProperty('visibility', 'visible');
  contMain.style.setProperty('visibility', 'visible');
  search.style.setProperty('visibility', 'visible');
  lyricsdiv.style.setProperty('display',"none");
 
});



const contHome = document.getElementById('cont-home');
const contExplore = document.getElementById('cont-explore');
// const contLikes = document.getElementById('cont-likes');
// const contPre = document.getElementById('cont-pre');
console.log('radhe radhe');

contHome.addEventListener('click',()=>{
  // contHome.style.setProperty('display', "inherit");
  contExplore.style.setProperty('display', "none");
  // contLikes.style.setProperty('display', "none");
  // contPre.style.setProperty('display', "none");
});

contExplore.addEventListener('click',()=>{
  contHome.style.setProperty('display', "none");
  // contExplore.style.setProperty('display', "inherit");
  // contLikes.style.setProperty('display', "none");
  // contPre.style.setProperty('display', "none");
});

// constLikes.addEventListener('click',()=>{
//   contHome.style.setProperty('display', "none");
//   contExplore.style.setProperty('display', "none");
//   contLikes.style.setProperty('display', "inherit");
//   dcontPre.style.setProperty('display', "none");
// });

// contPre.addEventListener('click',()=>{
//   contHome.style.setProperty('display', "none");
//   contExplore.style.setProperty('display', "none");
//   contLikes.style.setProperty('display', "none");
//   contPre.style.setProperty('display', "inherit");
// });

// const searchbtn = document.getElementById('searchbtn');
// const searchinput = document.getElementById('searchinput');

// searchbtn.addEventListener('click',()=>{
//   let searchvalue = searchinput.value;
//   searchinput.value = "";
//   alert("Search for "+ searchvalue + " is not available right now.");
// });

