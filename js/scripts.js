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
  'Author 11 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eos ab voluptate nihil quibusdam ullam odio, minima magnam accusamus illum nostrum rem, tempora facere autem ut praesentium laboriosam eaque amet.' ];
const positions = [{
    top: 0,
    left: 0
}, {
    top: 25,
    left: 70
}, {
    top: 35,
    left: 85
}, {
    top: 65,
    left: 20
}, {
    top: 57,
    left: 130
}, {
    top: 70,
    left: 105
}, {
    top: 10,
    left: 155
}, {
    top: 72,
    left: 200
}, {
    top: 40,
    left: 235
}, {
    top: 25,
    left: 270
}, {
    top: 70,
    left: 310
}, {
    top: 15,
    left: 330
}, {
    top: 40,
    left: 390
}, {
    top: 10,
    left: 450
}, {
    top: 60,
    left: 440
}, {
    top: 50,
    left: 500
}, {
    top: 10,
    left: 540
}, {
    top: 60,
    left: 600
}, {
    top: 20,
    left: 530
}, {
    top: 70,
    left: 575
}, {
    top: 5,
    left: 630
}],
    imagesDom = [],
    zIndex = 1,
    scrollSpeed = 1.6,
    scrollSpeedDefault = 1.6,
    scrollTimeout = null,

    toleft = 75;
const wrapper = document.querySelector('.wrapper');
const scrollable = document.querySelector('.scrollable');
const caption2 = document.querySelector('nav p')
const images = [
    'a.jpg',
    'b.jpg',
    'c.jpg',
    'd.jpg',
    'g.jpg',
    'f.jpg',
    'j.jpg',
    'k.jpg',
    'l.jpg',
    'm.jpg'
];
const tl = gsap.timeline();

const imagesCount = images.length;
function closeIntro() {
    var t = document.querySelector(".intro")
        , e = document.querySelector("main");
    tl.to(t, 5, {
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


    particles.set(bubble, { y: window.screen.height, x: "random([300, 1000])" }, 0);
    particles.to(
        bubble,
        {
            duration: speed*6,
            y: endY,
            x:"random([+=100+someVar, -=100+someVar])",
            // repeatDelay: Math.random() * 2,
            repeat: -1
        },
        Math.random() * 10

    );


}
gsap.to(particles, 2, { timeScale: 0.5, ease: Power1.easeIn });
var currentTimeScale = gsap.globalTimeline.timeScale();
var img = document.querySelectorAll('.wrapper img');
img.forEach(function (e) {

    e.addEventListener('mouseover', () => {

        particles.timeScale(0.1);
        

        const author = e.src.split('/').pop().split('.')[0];
        caption2.textContent = `By ${authors[images.indexOf(e.src.split('/').pop())]}`;
    });
    e.addEventListener('mouseout', () => {
        particles.timeScale(0.2);
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
           
        }else{
            document.querySelector(".box1").style.visibility='visible'
            document.querySelector(".box3").style.visibility='hidden'
  
        }
        

    });
});




