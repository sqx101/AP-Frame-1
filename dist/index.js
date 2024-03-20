import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Button, Frog, } from 'frog';
//import { neynar } from 'frog/middlewares'
export const app = new Frog();
//.use(
//  neynar({
//    apiKey: 'Neynar_API_KEY',
//   features: ['interactor', 'cast'],
//  }),
//)
// Define the initial frame
app.frame('/', (c) => {
    return c.res({
        image: _jsx("img", { src: "https://i.postimg.cc/XvVJNjfL/100-Grants.png", alt: "Descriptive text for the image" }),
        intents: [
            _jsx(Button, { action: "/second-frame", children: "More" }),
            _jsx(Button.Redirect, { location: "https://artistprogram.org", children: "artistprogram.org" }),
        ],
    });
});
app.frame("/second-frame", (c) => {
    return c.res({
        image: _jsx("img", { src: "https://i.postimg.cc/t4dJHZx7/5-Rounds.png", alt: "Descriptive text for the image" }),
        intents: [
            _jsx(Button, { action: "/third-frame", children: "More" }),
            _jsx(Button.Redirect, { location: "https://artistprogram.org", children: "artistprogram.org" }),
        ],
    });
});
app.frame("/third-frame", (c) => {
    return c.res({
        image: _jsx("img", { src: "https://i.postimg.cc/SKDKJBVh/Good-Vibes.png", alt: "Descriptive text for the image" }),
        intents: [
            _jsx(Button, { action: "/fourth-frame", children: "More" }),
            _jsx(Button.Redirect, { location: "https://artistprogram.org", children: "artistprogram.org" }),
        ],
    });
});
app.frame("/fourth-frame", (c) => {
    return c.res({
        image: _jsx("img", { src: "https://i.postimg.cc/rsmqbT0p/final-frame-minimal.gif", alt: "Descriptive text for the image" }),
        intents: [
            _jsx(Button, { action: "/mintW", children: "Mint" }),
            _jsx(Button.Redirect, { location: "https://artistprogram.org", children: "artistprogram.org" }),
        ],
    });
});
app.frame('/mintW', (c) => {
    return c.res({
        image: (_jsx("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Set the height of the frame
                width: '100vw', // Take up the full width of the viewport
            }, children: _jsx("img", { src: "https://i.postimg.cc/8kwtY6b4/Component-3.png", alt: "Descriptive text for the image", style: {
                    maxHeight: '80%', // Adjust percentage as needed
                    maxWidth: '80%', // Adjust percentage as needed
                    margin: 'auto' // This centers the image in the container
                } }) })),
        intents: [
            _jsx(Button.Mint, { target: "eip155:8453:0x7d958776CB5355bFE7737B55AE1cF8a5AF2AB8bE:1", children: "Mint" }),
            _jsx(Button.Redirect, { location: "https://zora.co/collect/base:0x7d958776cb5355bfe7737b55ae1cf8a5af2ab8be/1", children: "Zora" }),
            _jsx(Button.Redirect, { location: "https://artistprogram.org", children: "Website" }),
            _jsx(Button.Reset, { children: "Reset" }),
        ],
    });
});
