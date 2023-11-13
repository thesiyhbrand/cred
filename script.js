let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-2",
      start: "0% 50%",
      end: "50% 50%",
    //   markers: true,
      scrub: 1,
    },
});
tl.to("#imgthree", 
{
    bottom: "-5vh",
})
.to("#imgtwo, #imgfour", 
{
    bottom: "-10vh",
})
.to("#imgone, #imgfive", 
{
    bottom: "-20vh",
});



let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#part-5",
    start: "50% 50%",
    end: "150% 50%",
    pin: true,
    scrub: 2,
  },
});
tl2.to("#scroll-1", 
{
  bottom: "60vh",
})
.to("#scroll-1", 
{
  opacity: 0,
})
.to("#scroll-2", 
{
  opacity: 1,
}, 'arrf')
.to(".phone-img", 
{
  x: "-30%",
}, 'arrf')
.to("#scroll-2", 
{
  bottom: "60vh",
})
.to("#scroll-2", 
{
  opacity: 0,
})
.to("#scroll-3", 
{
  opacity: 1,
}, 'arrs')
.to(".phone-img", 
{
  x: "-59%",
}, 'arrs')
.to("#scroll-3", 
{
  bottom: "60vh",
})
.to("#scroll-3", 
{
  opacity: 0,
})
.to("#scroll-4", 
{
  opacity: 1,
}, 'arrt')
.to(".phone-img", 
{
  x: "-88%",
}, 'arrt')




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});