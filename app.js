const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const sidebar=document.querySelector('.nav-list');


const showMenu=()=>{
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    sidebar.classList.toggle("active")

}


TweenMax.from('.navbar',1,{
    delay:.3,
    x:-40,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-headline',2,{
    delay:.5,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-subtitle',3,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.cta',4,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('form',5,{
    delay:0.3,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.product-info',6,{
    delay:0.5,
    x:-100,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.product-card',7,{
    delay:0.5,
    y:200,
    opacity:0,
    ease:Expo.easeInOut
    })

    // This is for mousemovement
    const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// FilterCard
const filterSelect = document.getElementById('filterSelect');
const cardContainer = document.getElementById('cardContainer');
const cards = Array.from(cardContainer.children);

filterSelect.addEventListener('change', () => {
  const selectedValue = filterSelect.value;

  cards.forEach(card => {
    if (selectedValue === 'all' || card.getAttribute('data-value') === selectedValue) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});

// slider
// taxt animation
class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 8);
        this.type();
        this.isDeleting = false;
      }

      type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // change color for data-text
        this.txtElement.innerHTML = `<span class="txt" style="color: #e2000f;">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if(this.isDeleting) {
          typeSpeed /= 2;
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', init);

    // Init App
    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
