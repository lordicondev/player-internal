import { initIcon, randomHexColor } from './utils';

await initIcon(
    'icon-1',
    'wired-outline-1-cloud-hover-pinch',
);

await initIcon(
    'icon-2',
    'wired-outline-1-cloud-hover-pinch',
    {
        stroke: 3,
    },
);

await initIcon(
    'icon-3',
    'wired-flat-24-approved-checked-hover-pinch',
    {
        colors: {
            secondary: '#00ffff',
        },
    }
);

await initIcon(
    'icon-4',
    'wired-gradient-3094-marketing-letter-hover-pinch',
    {
        colors: {
            primary: '#ff0000',
            secondary: '#0000ff',
        },
        stroke: 1,
    },
);

const icon5 = await initIcon(
    'icon-5',
    'wired-outline-489-rocket-space-hover-flying',
    {
        colors: {
            primary: '#ff0000',
            secondary: '#0000ff',
        },
    },
);

setInterval(() => {
    icon5.setColor('primary', randomHexColor());
    icon5.setColor('secondary', randomHexColor());
}, 3000);

await initIcon(
    'icon-6',
    'wired-outline-534-hand-washing-5-step-hover-pinch',
);

await initIcon(
    'icon-7',
    'wired-outline-298-coins-hover-jump',
);

await initIcon(
    'icon-8',
    'wired-outline-12-layers-hover-slide',
);

