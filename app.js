let body = document.querySelector('body');

let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("gridsquare")) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.backgroundColor = randomColor;
  }
});

anime({
  targets: "div.gridsquare",
  scale: [
    { value: 0.1, duration: 800 },
    { value: 1, duration: 800 },
  ],
  //Staggering allows you to animate multiple elements with follow through and overlapping action.
  delay: anime.stagger(200, { grid: [14, 1], from: "center" }),
  rotate: {
    value: "20turn",
  },
  easing: "linear",
  loop: true,
});

anime({
    targets: "div.gridsquare.blue",
    scale: [
        { value: 0.1, duration: 2000 },
        { value: 1, duration: 2000 },
      ],
    translateY: -200,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: "div.gridsquare.yellow",
    scale: [
        { value: 0.1, duration: 2000 },
        { value: 1, duration: 2000 },
      ],
    translateY: 200,
    easing: "linear",
    loop: true,
  });

  anime({
    targets: "div.gridsquare.orange",
    scale: [
        { value: 0.1, duration: 2000 },
        { value: 1, duration: 2000 },
      ],
    translateX: 200,
    easing: "linear",
    loop: true,
  });


  anime({
    targets: "div.gridsquare.red",
    scale: [
        { value: 0.1, duration: 2000 },
        { value: 1, duration: 2000 },
      ],
    translateX: -200,
    easing: "linear",
    loop: true,
  });
    