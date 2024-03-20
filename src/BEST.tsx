import { Button, Frog } from 'frog'

export const app = new Frog()

// Define the initial frame
app.frame('/', (c) => {
  return c.res({
    // Use a div for the image; adjust as needed for your use case
    image: (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Set the height of the frame
        width: '100vw', // Take up the full width of the viewport
      }}>
        <img 
          src="https://i.postimg.cc/8kwtY6b4/Component-3.png"
          alt="Descriptive text for the image"
          style={{
            maxHeight: '80%', // Adjust percentage as needed
            maxWidth: '80%', // Adjust percentage as needed
            margin: 'auto' // This centers the image in the container
          }}
        />
        <div style={{ fontSize: '36px', color: 'black', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
          Select your option!
        </div>
      </div>
    ),
    // Define buttons that lead to different frames
    intents: [
      <Button action="/mint">Mint</Button>,
      <Button value="option2">Option 2</Button>,
      <Button value="option3">Option 3</Button>,
      <Button action="/second-frame">More Info</Button>,
    ],
  });
});

// Define the second frame
app.frame('/second-frame', (c) => {
  return c.res({
    // Image component with only the necessary attributes
    image: <img src="https://i.postimg.cc/T25YyyFH/AP-Marketing-1.gif" alt="Descriptive text for the image" />,
    
    // Button intents for navigation
    intents: [
      <Button action="/third-frame">More Info</Button>,
      <Button.Reset>Reset</Button.Reset>,
    ],
  });
});


// Define the third frame
app.frame('/third-frame', (c) => {
  return c.res({
    // Image component with only the necessary attributes
    image: <img src="https://i.postimg.cc/QMV3SkxX/AP-ARROWS.gif" alt="Descriptive text for the image" />,

      // Button intents for navigation
      intents: [
        <Button.Reset>Reset</Button.Reset>,
        <Button.Redirect location="https://artistprogram.org">artistprogram.org</Button.Redirect>,
    ],
  });
});

