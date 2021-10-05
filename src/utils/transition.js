import gsap from "gsap";

const showView = (element, duration) => {
  gsap.to(element, { opacity: 1, duration });
};

const showInputError = (element) => {
  element.textContent = "please input your nickname";
  gsap.to(element, { duration: 2, y: 10, ease: "elastic.out(1, 0.3)" });
};

export { showView, showInputError };
