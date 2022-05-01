# Hackathon-P2P-Festival-lmaar

## Problem

Today, millions of NFTs are created every day from paintings, photos, drawings. However, the creators of these same contents are in some cases harmed, because NFTs of their works are sometimes created without their knowledge.

## Solution

The Art comes to answer this problem by creating a social network that rewards artists by implementing a decentralized and privacy-friendly NFT creation and reward system.

The platform includes 2 types of uses:

- An artist wanting to create a quality NFT from his works.
- A user interested in NFT and artworks in general.

The Art works as follows:
The artists publish their works in the format of classic images (PNG, JPEG, ...) on the blockchain through the platform.

The users can "upvote" the works they consider relevant and thus make them rise in a general classification.

If an image is "upvoted" a certain number of times, an NFT "validated by The Art" is generated and sent to its creator. 

## Installation

You can use the following command to install the dependencies and launch the platform:
```bash
make
```

## How to Use

The app should be available at [localhost:3000](http://localhost:3000).
You can connect your wallet (Metamask for example) on the home page to arrive on a dashboard on which you'll see the images posted, be able to add one yourself.
Votes can be casted by clicking the heart button on each image card.

## Side-Quests

- Side-Quest 1 - Aleph Message : Images and their metadata are uploaded to IPFS through Aleph.
- Side-Quest 2 - Starton : We created a smart contract on Polygon Mumbai. We deployed it using Starton's API and we also interact with it through Starton.
You can also test the deployment of a contract with `node contracts/deploy.js`, and see an interaction example in the [`front/src/web3/getPosts.js`](front/src/web3/getPosts.js) file.

## Team & Feedbacks

Our team is "LMAAR x PoC". During this hackathon, we discovered a lot of interesting technologies to play with, it was a great experience and even if our project isn't fully working we are looking forward to the next hackathon.

| [<img src="https://github.com/lucas-louis.png?size=85" width=85><br><sub>Lucas Louis</sub>](https://github.com/lucas-louis) | [<img src="https://github.com/lolboysg.png?size=85" width=85><br><sub>Matéo Viel</sub>](https://github.com/lolboysg) | [<img src="https://github.com/OnsagerHe.png?size=85" width=85><br><sub>Albert Valentin</sub>](https://github.com/OnsagerHe) | [<img src="https://github.com/AbdelkarimBENGRINE.png?size=85" width=85><br><sub>Abdelkarim Bengrine</sub>](https://github.com/AbdelkarimBENGRINE) | [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola)
| :---: | :---: | :---: | :---: | :---:
