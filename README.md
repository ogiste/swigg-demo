# Creating a social ticketing platform with Polygon
Polygon's low fees provides the perfect platform to build onto of a budding culture in ethereum. In Africa most musicians still make money from live performances as their staple yet the fees they share with typical ticketing platforms is can range from 5% - 10%. We are also seeing more conferences and events for crypto and blockchain related platforms and communities. I am currently a contributor at ETHSafari myself. We are here to provide a ticketing and community platform that is built to support organizers while making the ticketing technology more secure, transparent and fair on the continent. Ticketing 3.0 is here and it will change the virtual and online event experience globally and especially in Africa where the youngest population lives. An internet economy expected to be worth $180 billion in the next 5 years.
An emerging middle class and a taste for creativity and social experiences. This is the perfect place and time to build to support the Media and Entertainment economies that thrived before the pandemic, in new and innovative technology. An approach that brings scaling and consumer experience in new and forward thinking ways while giving creators more control.

Swigg is an online platform that **facilitates access** to experiences and events that double as **opportunities to shape communities** and culture. Our goal is to educate and entertain the communities around us while scaling the next generation of digital natives, online creators and earners all seeking a variety of online and offline engagement. We have long term impact in mind and are building for a better way to experience our most valued communities.

### Feature Requirements
#### Required
- Users can purchase tickets that are stored and managed on the blockchain - **Required** (14hrs);
- Users can transfer tickets to other users - **Required** (6hrs)
- Users can sign in with social accounts **Required** (2hrs)
- Users can login - **Required** (4hrs)
- Users can chat as a crew on the event's forum - **Required** (10hrs)
- Users can get discounts as certain NFT commnunity holders - **Required** (12hrs)

#### Optional
- Users can store tokens on a desktop wallet for storing ethereum tokens - **Optional** (40hrs)
- Users can get tagged in media that contains their ticket and get paid for use in promo - **Optional**
- Users can link tickets to social accounts - **Optional** (5hrs)
- Users can get a portfolio page to watch what projects they're interested in or supporting - **Optional** (30hrs)
- Users can tune in to different 'rooms' for radio like web3 audio streams (a plugin for us and other businesses) - **Optional** (80hrs)
- Users can combine social sharing forums feeds and Swigg media to get a more degen focused overview of the world around us - **Optional** (30hrs)
- Email and 2FA security verification - **Optional** (6hrs)
- Link your NFTs to your profile as cover photo options -  **Optional**

#### Compile smart contracts

-- `npx hardhat compile`
#### Run local smart contract tests
-- `npx hardhat test --show-stack-traces`

#### Deploy on a Polygon
-- `npx hardhat run --network matic scripts/deploy-and-seed.js --show-stack-traces`
