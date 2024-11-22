(() => {
  // --- Variables for Model and Hotspots ---
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




  
  // --- Explode View Animation ---
  const canvas = document.querySelector("#explode-view");
  const ctx = canvas.getContext("2d");

  function setCanvasSize(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerWidth * 9 / 16;
  }
  

  setCanvasSize();

  window.addEventListener('resize', setCanvasSize);

  const frameCount = 233; // Total number of frames
  const images = []; // Array to hold images

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/earbuds-png-frame${(i + 1).toString().padStart(4, '0')}.png`;
    images.push(img);
  }

  const buds = {
    frame: 0
  };

  gsap.to(buds, {
    frame: 232,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 2,
      markers: true,
      start: "top top"
    },
    onUpdate: render
  });

  images[0].addEventListener("load", render);

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[buds.frame], 0, 0);
  }

  






//slider
  const divisor = document.querySelector('#divisor');
  const slider = document.querySelector('#slider');

  function moveDivisor() {
      console.log(slider.value);
      //divisor.style.width. = slider.value+"%";
      divisor.style.width = `${slider.value}%`;
  }


  slider.addEventListener("input", moveDivisor);
})();
