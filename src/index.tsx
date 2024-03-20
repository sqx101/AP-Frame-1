import { Button, Frog, parseEther } from 'frog'
//import { neynar } from 'frog/middlewares'
import { Zora1155ABI } from './abi/Zora1155';

export const app = new Frog()
//.use(
//  neynar({
//    apiKey: 'Neynar_API_KEY',
//   features: ['interactor', 'cast'],
//  }),
//)

// Define the initial frame
app.frame('/', (c) => {
  return c.res({
    
    image: <img src="https://i.postimg.cc/XvVJNjfL/100-Grants.png" alt="Descriptive text for the image" />,
    
    intents: [
      <Button action="/second-frame">More</Button>,
      <Button.Redirect location="https://artistprogram.org">artistprogram.org</Button.Redirect>,
    ],
  });
});

app.frame("/second-frame", (c) => {
  return c.res({
    
    image: <img src="https://i.postimg.cc/t4dJHZx7/5-Rounds.png" alt="Descriptive text for the image" />,
    
    intents: [
      <Button action="/third-frame">More</Button>,
      <Button.Redirect location="https://artistprogram.org">artistprogram.org</Button.Redirect>,
    ],
  });
});

app.frame("/third-frame", (c) => {
  return c.res({
    
    image: <img src="https://i.postimg.cc/SKDKJBVh/Good-Vibes.png" alt="Descriptive text for the image" />,
        
        intents: [
          <Button action="/fourth-frame">More</Button>,
          <Button.Redirect location="https://artistprogram.org">artistprogram.org</Button.Redirect>,
        ],
  });
});

app.frame("/fourth-frame", (c) => {
  return c.res({
    
    image: <img src="https://i.postimg.cc/rsmqbT0p/final-frame-minimal.gif" alt="Descriptive text for the image" />,
    
    intents: [
      <Button action="/mintW">Mint</Button>,
      <Button.Redirect location="https://artistprogram.org">artistprogram.org</Button.Redirect>,
    ],
  });
});

app.frame('/mintW', (c) => {
  return c.res({
    
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
        </div>
      ),

    intents: [
      <Button.Mint
        target="eip155:8453:0x7d958776CB5355bFE7737B55AE1cF8a5AF2AB8bE:1"
      >
        Mint
      </Button.Mint>,
      <Button.Redirect location="https://zora.co/collect/base:0x7d958776cb5355bfe7737b55ae1cf8a5af2ab8be/1">Zora</Button.Redirect>,
      <Button.Redirect location="https://artistprogram.org">Website</Button.Redirect>,
      <Button.Reset>Reset</Button.Reset>,
    ],
  });
});

////////////////////////////////
// Minting transactions logic 
//
//
//
////////////////////////////////
app.transaction('/send-ether', (c) => {
  const { address } = c //The address of a wallet that sends a transaction.
  return c.send({
    chainId: 'eip155:8453', //8453 is base
    to: address as `0x${string}`, //Transaction recipient.
    value: parseEther('.0001'), 
    // abi, //optional
  })
});
 
app.transaction('/mint', (c) => {
  // Assuming 'c' provides the context needed for your transaction
  const { address } = c; // This could represent the 'recipient' address for the minted tokens.

  // Specify the details for the minting operation
  const minter = '0x7d958776cb5355bfe7737b55ae1cf8a5af2ab8be'; // IMinter1155 Contract
  const tokenId = BigInt(1); // The specific token ID you wish to mint (all 1155 have same # for edition run)
  const quantity = BigInt(1); // The quantity of tokens to mint set , passed by input or button
  const minterArguments = address;  //The arguments passed to the minter, which should be the address to mint to
  // interface IMinter1155 is IERC165Upgradeable 
    //{function requestMint(
      //  address sender,
      //  uint256 tokenId,
      //  uint256 quantity,
      //  uint256 ethValueSent,
      //  bytes calldata minterArguments
    //) external returns (ICreatorCommands.CommandSet memory commands);
  const mintReferral = refAddress  //address

  return c.contract({
    abi: Zora1155ABI,
    chainId: 'eip155:8453',
    functionName: 'mintWithRewards',
    args: [minter, tokenId, quantity, minterArguments, mintReferral],
    to: '0x7d958776cb5355bfe7737b55ae1cf8a5af2ab8be', // The address of the contract implementing the Zora1155ABI
    // No 'value' field is necessary unless the minting function specifically requires sending Ether along with the transaction
  });
});

app.frame('/meynar', (c) => {
  const { displayName, followerCount } = c.var.interactor || {}
  //console.log('cast: ', c.var.cast)
  //console.log('interactor: ', c.var.interactor)
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          color: 'purple',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 48,
          height: '100%',
          width: '100%',
        }}
      >
        Greetings {displayName}, you have {followerCount} followers.
      </div>
    ),

    intents: [
      <Button action="/third-frame">More Info</Button>,
      <Button.Reset>Reset</Button.Reset>,
    ],
  })
});