(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {title: 'Eartip', text: 'Soft, secure fit for all-day comfort', image: 'images/earbuds.jpg'},
    {title: 'Earbud Housing', text: 'Sleek design, durable feel', image: 'images/housing.gif'},
    {title: 'LED Indicator', text: 'Quick status, always visible', image: 'images/gif-2-1.gif'},
    {title: 'Charging Pins', text: 'Fast and reliable charging', image: 'images/charging.gif'},
    {title: 'Speaker Cover', text: 'Precision-crafted for rich, immersive sound.', image: 'images/noice-cancel.gif'}
  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=> {

      let selected = document.querySelector(`#hotspot-${index+1}`);

      title = document.createElement('h2');
      title.textContent = infoBox.title;

      text = document.createElement('p');
      text.textContent = infoBox.text;

      image = document.createElement('img');
      image.src = infoBox.image;
      image.style.width = "100%";  
      

      selected.appendChild(image);
      selected.appendChild(title);
      selected.appendChild(text);
      

    });
  }

  // loadInfo();
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

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();