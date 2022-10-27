const adsliderprev = document.querySelector('.prev');
const adslidernext = document.querySelector('.next');

let translate = 0;
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
  console.log(translate)
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