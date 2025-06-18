import lottie from '../src';

const animationData = await await fetch(`icons/wired-outline-489-rocket-space-hover-flying.json`)
    .then(response => response.json());

const container = document.querySelector<HTMLElement>('.icon')!;

lottie.loadAnimation({
    container,
    animationData,
    loop: true,
    autoplay: true,
});