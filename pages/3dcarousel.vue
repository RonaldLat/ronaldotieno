<script>
export default {
  mounted(){

  window.addEventListener('load', () => {
	const
		carousels = document.querySelectorAll('.carousel')
	;

	for (let i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {

		const figure = root.querySelector('figure')
		const nav = root.querySelector('nav')
		const images = figure.children
		const n = images.length
		const gap = root.dataset.gap || 0
		const bfc = 'bfc' in root.dataset
		
		const theta =  2 * Math.PI / n
	
	let currImage = 0
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});

	setupNavigation();

	function setupCarousel(n, s) {
		const
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (let i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (let i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for ( let i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true);
		
		function onClick(e) {
			e.stopPropagation();
			
			const t = e.target;
			if (t.tagName.toUpperCase() !== 'BUTTON')
				return;
			
			if (t.classList.contains('next')) {
				currImage++;
			}
			else {
				currImage--;
			}
			
			rotateCarousel(currImage);
		}
			
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
	
}
  }

}
</script>


<template>
  <div>
    <h1>3D Rotating Carousel Examples by <span class="text-lg font-bold text-violet-500">Ronald Otieno</span></h1>


    <h2>Example 1</h2>
    <div class="carousel">
      <figure>
        <img src="img1.jpg" alt="" />
        <img src="img2.jpg" alt="" />
        <img src="img3.jpg" alt="" />
        <img src="img4.jpg" alt="" />
        <img src="img5.jpg" alt="" />
        <img src="img6.jpg" alt="" />
        <img src="img7.jpg" alt="" />
        <img src="img8.jpg" alt="" />
      </figure>
      <nav>
        <button class="nav prev">Prev</button>
        <button class="nav next">Next</button>
      </nav>
    </div>

    <h2>Example 2</h2>
    <div class="carousel" data-gap="20">
      <figure>
        <img src="img1.jpg" alt="" />
        <img src="img2.jpg" alt="" />
        <img src="img3.jpg" alt="" />
        <img src="img4.jpg" alt="" />
        <img src="img5.jpg" alt="" />
        <img src="img6.jpg" alt="" />
        <img src="img7.jpg" alt="" />
        <img src="img8.jpg" alt="" />
      </figure>
      <nav>
        <button class="nav prev">Prev</button>
        <button class="nav next">Next</button>
      </nav>
    </div>

    <h2>Example 3</h2>
    <div class="carousel" data-gap="80">
      <figure>
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
        <img src="img1.jpg" alt="" />
      </figure>
      <nav>
        <button class="nav prev">Prev</button>
        <button class="nav next">Next</button>
      </nav>
    </div>

    <h2>Example 4</h2>
    <div class="carousel" data-gap="20" data-bfc>
      <figure>
        <img src="img1.jpg" alt="" />
        <img src="img2.jpg" alt="" />
        <img src="img3.jpg" alt="" />
        <img src="img4.jpg" alt="" />
        <img src="img5.jpg" alt="" />
        <img src="img6.jpg" alt="" />
        <img src="img7.jpg" alt="" />
        <img src="img8.jpg" alt="" />
      </figure>
      <nav>
        <button class="nav prev">Prev</button>
        <button class="nav next">Next</button>
      </nav>
    </div>
  </div>
</template>

<style scoped>
 h1 {
	 text-align: center;
	 margin-bottom: 1.5em;
}
 h2 {
	 text-align: center;
	 color: #555;
	 margin-bottom: 0;
}
 .carousel {
	 padding: 20px;
	 perspective: 500px;
	 overflow: hidden;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
}
 .carousel > * {
	 flex: 0 0 auto;
}
 .carousel figure {
	 margin: 0;
	 width: 40%;
	 transform-style: preserve-3d;
	 transition: transform 0.5s;
}
 .carousel figure img {
	 width: 100%;
	 box-sizing: border-box;
	 padding: 0 0px;
}
 .carousel figure img:not(:first-of-type) {
	 position: absolute;
	 left: 0;
	 top: 0;
}
 .carousel nav {
	 display: flex;
	 justify-content: center;
	 margin: 20px 0 0;
}
 .carousel nav button {
	 flex: 0 0 auto;
	 margin: 0 5px;
	 cursor: pointer;
	 color: #333;
	 background: none;
	 border: 1px solid;
	 letter-spacing: 1px;
	 padding: 5px 10px;
}
 
</style>

