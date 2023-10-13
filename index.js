const options = {
  mediaQuery: "min", 
  perMove: 1,
  gap: 16, 
  cover: true,
  heightRatio: 0.5,
  updateOnMove: true,
  padding: "5rem",
  type: "loop",
  focus: "center",
  trimSpace: false,
  breakpoints: {
    600: {
      destroy: true,
    },
  },
};

const splide = new Splide(".splide", options);
splide.mount();