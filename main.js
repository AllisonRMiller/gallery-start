const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++ ) {
    const nextImage = document.createElement('img');
    nextImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(nextImage);
    nextImage.onclick = function(clicky) {
      displayedImage.src = clicky.target.src;
    }
  }

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
        const btnClass = btn.getAttribute ('class');
        if ( btnClass === 'dark') {
            btn.setAttribute('class', 'light' );
            btn.textContent ='Lighten';
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        }
        else {
            btn.setAttribute ('class', 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor = "rgba(0,0,0,0)";

            }
}
