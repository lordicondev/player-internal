import lottie from '../src';

async function initIcon(container: string, iconName: string) {
    const animationData = await fetch(`icons/${iconName}.json`)
        .then(response => response.json())

    return lottie.loadAnimation({
        container: document.getElementById(container)!,
        loop: true,
        autoplay: true,
        animationData,
    });
}

await initIcon('icon-1', 'mask-1');