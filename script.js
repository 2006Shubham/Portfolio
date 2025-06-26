  const confettiSettings = { 
    target: 'confetti-canvas',
    max: 150,
    size: 1.2,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[246, 189, 22], [194, 33, 237], [255, 255, 255]],
    clock: 25,
    rotate: true
  };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();


  let navlinks = document.getElementsByClassName("page-link");
  console.log(navlinks);