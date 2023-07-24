var isMobile = !1,
    state = "loading",
    toRoute = null,
    fromRoute = null,
    caption = null,
    closeLink = !1,
    pageTitle = [],
    work = {},
    info = {};
var authors = [
'Author 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
'Author 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.',
 'Author 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
 'Author 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
 'Author 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
 'Author 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
 'Author 7 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
 'Author 8 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
 'Author 9 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.',
  'Author 10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.' , 
  'Author 11 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 
  'Author 12 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.', 

];

const wrapper = document.querySelector('.wrapper');
const scrollable = document.querySelector('.scrollable');
const caption2 = document.querySelector('nav p')
const images = [
    '1_comis.jpg',
    '2_hem.jpg',
    '18_on.png',
    '25_tomwood.png',
    '1_comis.jpg',
    '2_hem.jpg',
    '18_on.png',
    '25_tomwood.png',
    '1_comis.jpg',
    '2_hem.jpg',
    '18_on.png',
    '25_tomwood.png',

];
const tl = gsap.timeline();

const imagesCount = images.length;
function closeIntro() {
    var t = document.querySelector(".intro")
        , e = document.querySelector("main");
    tl.to(t, 4, {
        opacity: 0,
        ease: "power1.easeOut",
        onComplete: function () {
            t.remove()
        }
    });
    tl.to(e, 3, {
        opacity: 1,
        ease: "power1.easeInOut"
    });
}






closeIntro();

const container = document.querySelector('.wrapper');
const containerStyle = getComputedStyle(container);

const containerWidth = containerStyle.width;
const containerHeight = containerStyle.height;


console.log(window.screen.height)

var sizes = ["100", "150", "200"],
    bu = document.querySelector(".wrapper"),
    startY = 700,
    endY = -window.screen.height;

// //build the timeline

var particles = gsap.timeline({});

for (var i = 0; i < images.length; i++) {
    var sizeIndex = randomNumber(0, 2);
    var size = sizes[sizeIndex];
    var speed = 3 - sizeIndex;

    var bubble = $('<img src="images/' + images[i] + '" idx="' + images[i] + '" alt="">').appendTo(
        bu
    );
    var randomVar =Math.floor(Math.random() * (window.screen.width - 0 + 1) + 0)
    console.log(randomVar)


    particles.set(bubble, { y: window.screen.height, x: randomVar }, 0);
    particles.to(
        bubble,
        {
            duration: 15,
            y: endY,
            x:"random([+=100+someVar, -=100+someVar])",
            // repeatDelay: Math.random() * 2,
            repeat: -1
        },
        Math.random() * 10

    );


}
gsap.to(particles, 2, { timeScale: 0.4, ease: Power1.easeIn });
var currentTimeScale = gsap.globalTimeline.timeScale();
var img = document.querySelectorAll('.wrapper img');
img.forEach(function (e) {

    e.addEventListener('mouseover', () => {

        particles.timeScale(0.1);
        

        const author = e.src.split('/').pop().split('.')[0];
        caption2.textContent = `By ${authors[images.indexOf(e.src.split('/').pop())]}`;
    });
    e.addEventListener('mouseout', () => {
        particles.timeScale(0.4);
        caption2.textContent = 'Office Oblitas';
    });
    e.addEventListener('click', () => {

        particles.timeScale(0.1);

        caption2.textContent = `By ${authors[images.indexOf(e.src.split('/').pop())]}`;
    });
    
   
});


document.querySelector('.abs').addEventListener('click', () => {
    console.log('222')
    particles.timeScale(0.2);
        caption2.textContent = 'Office Oblitas';
});




function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}



let linkElements = document.querySelectorAll('nav a');
   
linkElements.forEach((element, i) => {

    element.addEventListener("click", e => {
        if (document.querySelector(".box1").style.visibility=='visible'){
            document.querySelector(".box1").style.visibility='hidden'
            document.querySelector(".box3").style.visibility='visible'
            document.querySelector(".desc").style.visibility='visible'
        }else{
            document.querySelector(".box1").style.visibility='visible'
            document.querySelector(".box3").style.visibility='hidden'
            document.querySelector(".desc").style.visibility='hidden'
  
        }
        

    });
});




