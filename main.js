const adsliderprev = document.querySelector('.prev');
const adslidernext = document.querySelector('.next');
const peopleprev = document.querySelector('.prev2');
const peoplenext = document.querySelector('.next2');
const msdot1 = document.querySelector('.ms-dot1');
const msdot2 = document.querySelector('.ms-dot2');
const msdot3 = document.querySelector('.ms-dot3');
const msdot4 = document.querySelector('.ms-dot4');
const msdot5 = document.querySelector('.ms-dot5');
const mdot1 = document.querySelector('.m-dot1');
const mdot2 = document.querySelector('.m-dot2');
const mdot3 = document.querySelector('.m-dot3');
const idot1 = document.querySelector('.i-dot1');
const idot2 = document.querySelector('.i-dot2');
const idot3 = document.querySelector('.i-dot3');


let translate = 0;
let translatefa = -4270;

adsliderprev.addEventListener('click', () => {
  if(translate === 0) {
    translate = -100;
  }
  document.querySelector('.slider-list').style.transform = `translate(${translate+20}%)`;
  translate = translate + 20;
})
adslidernext.addEventListener('click', () => {
  if(translate === -80) {
    translate = 20;
  }
  document.querySelector('.slider-list').style.transform = `translate(${translate-20}%)`;
  translate = translate - 20;
})

// adsliderprev.addEventListener('click', () => {
//   if(translate === 0) {
//     translate = -100*cnt;
//   }
//   document.querySelector('.slider-list').style.transform = `translate(${100+translate}vw)`;
//   translate = translate + 100;
// })
// adslidernext.addEventListener('click', () => {
//   if(translate === -100*cnt) {
//     translate = 100;
//   }
//   document.querySelector('.slider-list').style.transform = `translate(${translate-100}vw)`;
//   translate = translate - 100;
// })
// const cntfa = document.querySelector('.people').childElementCount;

// peopleprev.addEventListener('click', () => {
//   peoplenext.style.display = "block";
//   let width = 146;
//   if(translatefa === -4416) {
//     peopleprev.style.display = "none";
//   }
//   document.querySelector('.imgandname').style.transform = `translate(${width+translatefa}px)`;
//   translatefa = translatefa + width;
// })
// peoplenext.addEventListener('click', () => {
//   peopleprev.style.display = "block";
//   let width = 146;
//   if(translatefa === -4270-width*(cntfa-1)) {
//     peoplenext.style.display = "none";
//   }
//   document.querySelector('.imgandname').style.transform = `translate(${translatefa-width}px)`;
//   translatefa = translatefa - width;
// })

function clickmsdot(e) {
  msdot1.style.backgroundColor = '#bbb';
  msdot2.style.backgroundColor = '#bbb';
  msdot3.style.backgroundColor = '#bbb';
  msdot4.style.backgroundColor = '#bbb';
  msdot5.style.backgroundColor = '#bbb';
  e.target.style.backgroundColor = '#717171';
  
  if(e.target.classList.value === 'ms-dot1'){
    document.querySelector('.mobile-slider').classList.remove('second-screen');
    document.querySelector('.mobile-slider').classList.remove('third-screen');
    document.querySelector('.mobile-slider').classList.remove('fourth-screen');
    document.querySelector('.mobile-slider').classList.remove('fifth-screen');
    document.querySelector('.mobile-slider').classList.add('first-screen');
  }
  else if(e.target.classList.value === 'ms-dot2'){
    document.querySelector('.mobile-slider').classList.add('second-screen');
    document.querySelector('.mobile-slider').classList.remove('third-screen');
    document.querySelector('.mobile-slider').classList.remove('fourth-screen');
    document.querySelector('.mobile-slider').classList.remove('fifth-screen');
    document.querySelector('.mobile-slider').classList.remove('first-screen');
  }
  else if(e.target.classList.value === 'ms-dot3'){
    document.querySelector('.mobile-slider').classList.remove('second-screen');
    document.querySelector('.mobile-slider').classList.add('third-screen');
    document.querySelector('.mobile-slider').classList.remove('fourth-screen');
    document.querySelector('.mobile-slider').classList.remove('fifth-screen');
    document.querySelector('.mobile-slider').classList.remove('first-screen');
  }
  else if(e.target.classList.value === 'ms-dot4'){
    document.querySelector('.mobile-slider').classList.remove('second-screen');
    document.querySelector('.mobile-slider').classList.remove('third-screen');
    document.querySelector('.mobile-slider').classList.add('fourth-screen');
    document.querySelector('.mobile-slider').classList.remove('fifth-screen');
    document.querySelector('.mobile-slider').classList.remove('first-screen');
  }
  else if(e.target.classList.value === 'ms-dot5'){
    document.querySelector('.mobile-slider').classList.remove('second-screen');
    document.querySelector('.mobile-slider').classList.remove('third-screen');
    document.querySelector('.mobile-slider').classList.remove('fourth-screen');
    document.querySelector('.mobile-slider').classList.add('fifth-screen');
    document.querySelector('.mobile-slider').classList.remove('first-screen');
  }
}
function clickmdot(e) {
  mdot2.style.backgroundColor = '#bbb';
  mdot3.style.backgroundColor = '#bbb';
  mdot1.style.backgroundColor = '#bbb';
  e.target.style.backgroundColor = '#717171';

  if(e.target.classList.value === 'm-dot1'){
    document.querySelector('.magagine-list').classList.remove('second-screen');
    document.querySelector('.magagine-list').classList.remove('third-screen');
    document.querySelector('.magagine-list').classList.add('first-screen');
  }
  else if(e.target.classList.value === 'm-dot2'){
    document.querySelector('.magagine-list').classList.remove('first-screen');
    document.querySelector('.magagine-list').classList.remove('third-screen');
    document.querySelector('.magagine-list').classList.add('second-screen');
  }
  else if(e.target.classList.value === 'm-dot3'){
    document.querySelector('.magagine-list').classList.remove('second-screen');
    document.querySelector('.magagine-list').classList.remove('first-screen');
    document.querySelector('.magagine-list').classList.add('third-screen');
  }
}
function clickidot(e) {
  idot2.style.backgroundColor = '#bbb';
  idot3.style.backgroundColor = '#bbb';
  idot1.style.backgroundColor = '#bbb';
  e.target.style.backgroundColor = '#717171';

  if(e.target.classList.value === 'i-dot1'){
    document.querySelector('.items-talks').classList.remove('second-screen');
    document.querySelector('.items-talks').classList.remove('third-screen');
    document.querySelector('.items-talks').classList.add('first-screen');
  }
  else if(e.target.classList.value === 'i-dot2'){
    document.querySelector('.items-talks').classList.add('second-screen');
    document.querySelector('.items-talks').classList.remove('third-screen');
    document.querySelector('.items-talks').classList.remove('first-screen');
  }
  else if(e.target.classList.value === 'i-dot3'){
    document.querySelector('.items-talks').classList.remove('second-screen');
    document.querySelector('.items-talks').classList.add('third-screen');
    document.querySelector('.items-talks').classList.remove('first-screen');
  }
}

msdot1.addEventListener('click', clickmsdot);
msdot2.addEventListener('click', clickmsdot);
msdot3.addEventListener('click', clickmsdot);
msdot4.addEventListener('click', clickmsdot);
msdot5.addEventListener('click', clickmsdot);
mdot1.addEventListener('click', clickmdot);
mdot2.addEventListener('click', clickmdot);
mdot3.addEventListener('click', clickmdot);
idot1.addEventListener('click', clickidot);
idot2.addEventListener('click', clickidot);
idot3.addEventListener('click', clickidot);