const adsliderprev = document.querySelector('.prev');
const adslidernext = document.querySelector('.next');
const peopleprev = document.querySelector('.prev2');
const peoplenext = document.querySelector('.next2');

let translate = 0;
let translatefa = -4270;

const cnt = document.querySelector('.slider-list').childElementCount;

adsliderprev.addEventListener('click', () => {
  width = document.querySelector('.slider-content').clientWidth;
  if(translate === 0) {
    translate = -width*cnt;
  }
  document.querySelector('.slider-list').style.transform = `translate(${width+translate}px)`;
  translate = translate + width;
})
adslidernext.addEventListener('click', () => {
  width = document.querySelector('.slider-content').clientWidth; 
  if(translate === -width*(cnt-1)) {
    translate = width;
  }
  document.querySelector('.slider-list').style.transform = `translate(${translate-width}px)`;
  translate = translate - width;
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
const cntfa = document.querySelector('.people').childElementCount;

peopleprev.addEventListener('click', () => {
  peoplenext.style.display = "block";
  let width = 146;
  if(translatefa === -4416) {
    peopleprev.style.display = "none";
  }
  document.querySelector('.imgandname').style.transform = `translate(${width+translatefa}px)`;
  translatefa = translatefa + width;
})
peoplenext.addEventListener('click', () => {
  peopleprev.style.display = "block";
  let width = 146;
  if(translatefa === -4270-width*(cntfa-1)) {
    peoplenext.style.display = "none";
  }
  document.querySelector('.imgandname').style.transform = `translate(${translatefa-width}px)`;
  translatefa = translatefa - width;
})