import { Frog, Button } from 'frog';

export const app = new Frog({
  // Set the browserLocation to redirect direct frame accesses to the homepage or any other URL
  browserLocation: '/'
});

// The main frame that displays the static image and buttons
app.frame('/', (c) => {
  // No dynamic content, just a static image and two buttons
  return c.res({
    image: 'https://i.postimg.cc/QMV3SkxX/AP-ARROWS.gif', // Replace with your static image URL
    intents: [
      // Button for the Mint action
      <Button action="/mint-options">Mint</Button>, // Adjust the action to the correct frame path or URL
      // Button for going to the website
      <Button action="https://artistprogram.org">Visit Website</Button>, // Adjust the URL to your website
      <Button action="https://artistprogram.org">Visit Website</Button>, // Adjust the URL to your website
    ],
  });
});

// Frame to handle the "Mint" action
app.frame('/mint-options', (c) => {
  // Use browserLocation if you want to redirect users who directly access this frame in the browser
  return c.res({
    browserLocation: 'https://zora.co/collect/base:0x2c5d820cfea3b6d51ebbc2f2cbb544ddcd9eef8f/1', // Replace with your actual mint page URL
    image: 'https://i.postimg.cc/8kwtY6b4/Component-3.png', // Replace with your actual mint item image URL
    intents: [
      <Button action="/mint-with-warps">Warps</Button>, // Adjust the action to the correct frame path or functionality
      <Button action="/wallet">bETH</Button>, // Adjust the action to the correct frame path or functionality
      <Button action="https://yourwebsite.com/mint-page">Mint Page</Button>, // Direct link to your mint page
      <Button action="/">Back</Button>, // Back button to return to the main frame
    ],
  });
}); // This line was missing the closing parentheses and brace

// You might not need the /submit frame anymore unless you have other actions that use it
