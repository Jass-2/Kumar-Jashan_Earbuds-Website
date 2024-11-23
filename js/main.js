(() => {


  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    { title: 'Eartip', text: 'Soft, secure fit for all-day comfort', image: 'images/earbuds.jpg' },
    { title: 'Earbud Housing', text: 'Sleek design, durable feel', image: 'images/housing.gif' },
    { title: 'LED Indicator', text: 'Quick status, always visible', image: 'images/gif-2-1.gif' },
    { title: 'Charging Pins', text: 'Fast and reliable charging', image: 'images/charging.gif' },
    { title: 'Speaker Cover', text: 'Precision-crafted for rich, immersive sound.', image: 'images/noice-cancel.gif' }
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const title = document.createElement('h2');
      title.textContent = infoBox.title;

      const text = document.createElement('p');
      text.textContent = infoBox.text;

      const image = document.createElement('img');
      image.src = infoBox.image;
      image.style.width = "100%";

      selected.appendChild(image);
      selected.appendChild(title);
      selected.appendChild(text);
    });
  }

  function modelLoaded() {
    loadInfo();
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  // Event listeners for model interactions
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });





  // png nimation
  const canvas = document.querySelector("#explode-view");
  const ctx = canvas.getContext("2d");

  function canvasSize(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerWidth * 9 / 16;
  }
  

  canvasSize();

  window.addEventListener('resize', canvasSize);

  const frameCount = 251; // how many still images
  const images = []; // array to hold images

  // fill the array with images and point to the images
  for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `images/earbuds-png-frame${(i + 1).toString().padStart(4, '0')}.png`;
      images.push(img);
  }

  const buds = {
      frame: 0
  };

  // greensock works as the number that you get is decimals o,0.5 but ours work as whole number so gsock uses snap property
  gsap.to(buds, {
      frame: 250,
      snap: "frame",
      scrollTrigger: { // Fixed syntax error: added colon
          trigger: "#explode-view",
          pin: true,
          scrub: 3,
          // markers: true,
          start: "top top",
          // pinSpacing: false,

      },
      onUpdate: render
  });


  // when images is first loaded into the array, call the render function->
  images[0].addEventListener("load", render)



  function render() {
      //ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      //ctx.drawImage(images[buds.frame], 0, 0, canvas.width, canvas.height); // Draw the current frame
      console.log(buds.frame);
      console.log(images[buds.frame]);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[buds.frame], 0, 0, canvas.width, canvas.height);
  }




  

 const links = document.querySelectorAll(".nav-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {
        e.preventDefault();
        
        const targetId = links[i].getAttribute("data-link");
        const targetElement = document.getElementById(targetId.replace("#", ""));

        if (targetElement) {
            // Calculate the offset position
            const rect = targetElement.getBoundingClientRect();
            const offset = window.innerHeight / 2 - rect.height / 2; // Center the section

            window.scrollTo({
                top: window.scrollY + rect.top - offset,
                behavior: "smooth"
            });
        }
    };
}





})();




