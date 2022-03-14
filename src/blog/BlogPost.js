import "../Home.css";
// import { useState } from "react";
import Typical from "react-typical";
import nft from "../assets/solanaDog.jpg";

const BlogPost = () => {
  return (
    <div className="bg-greyish w-screen text-center text-whitish flex flex-col content-center">
      <h1 className="text-center w-screen mt-14 sm:text-6xl lg:text-8xl font-bol">
        {/* <Typical
                    steps={['WE', 500, 'WEB 3', 5000]}
                    loop={2}
                    wrapper="a"
                /> */}
        How to create the Metaverse?
      </h1>
      <p>
        <img
          className="rounded-full w-14 mx-auto mt-4"
          src={nft}
          alt="NFT dog with monocule and hat"
        ></img>
        Author: @biccsdev
      </p>
      <div className="mt-6">
        <h2 className="m-4 lg:text-3xl">What is the Metaverse?</h2>
        <p className="text-justify w-11/12 lg:w-3/5 m-auto lg:text-2xl">
          We are about to enter an impressive era, building the future, the way
          we interact with society, if you are interested in this topic an
          interesting adaptation to our near future awaits you. Imagine a tool
          that allows us to meet people from all over the world, visit worlds
          created by the creativity of the community, buy and sell goods, create
          content, communities, basically it is the internet we have today, but
          the premise of the metaverse is that all these interactions happen in
          a 3D world, either a totally virtual world or a mixed reality world
          where virtual aspects are combined with the real environment. While our
          current metaverse happens through a 2D world, and we access it through
          our computers, cell phones, consoles, smart speakers, the future
          metaverse will be accessed through all these devices, but its main
          focus will be through virtual reality or augmented reality devices.
          The word Metaverse inherits from Universe all its characteristics and
          combines them with the concept of Meta, which refers to something that
          refers to itself as metadata that is data that has information about
          other data. In this case, the metaverse refers to a virtual platform
          where we create universes with communities, jobs, learning, economy,
          communication and entertainment, all connected to each other, creating
          the great metaverse. Of course, the word metaverse is just a label for
          this concept, in the future another word may be used to refer to the
          same thing.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="m-4 lg:text-3xl">Current State</h2>
        <p className="text-justify w-11/12 lg:w-3/5 m-auto lg:text-2xl">
          Facebook, Twitter, Instagram, Whatsapp, Youtube, Twitch, to mention a
          few, are places on the internet where millions of people meet and
          interact every day, here we find communities of all niches, people
          communicating with their friends by video call, sending messages to
          their friends, also buying things through online stores, using credit
          lines from technology companies like stori or rappi, consuming
          multimedia content and streaming video games. All these activities are
          the daily life of millions of people and are even the way many of them
          make a living, but there is a big problem. Scalability which is
          roughly speaking the ability to make something grow, today an average
          content creator creates content for youtube, takes clips to upload it
          to facebook and tiktok, takes his merch for sale with shopify and
          publishes all his ads to the community on discord or twitter, however
          he lacks ownership over his content, all those videos, likes,
          followers and comments, do not belong to the content creator. All the
          information we give to the platforms where we interact is stored in
          the computers (servers) of these companies, therefore they own all
          that information, they are even the owners and creators of most of the
          processes of the businesses that use these technologies, so if one day
          these companies change the way their tool works, your business would
          have to change the way it works, involving unnecessary costs and time
          or they could even totally block the access to the information that is
          supposed to be yours if they wanted to. Currently, Google and
          Microsoft are the owners of our identity on the internet, since the moment
          we create an account on any platform, we create it using our gmail or
          hotmail, this represents a serious problem because we are subject to
          the authority of these companies that have the power to censor us,
          since they own all our data. On the side of virtual reality, facebook
          now meta, leads the market with the launch of virtual reality glasses
          quest 2, thanks to this hundreds of thousands of new people have been
          interested in this technology, which points to a good adoption in the
          coming years, however the biggest challenge we have with this
          technology is the control we have as users over the worlds with which
          we interact, there is VR Chat, Rec Room, Meta Horizons, these are the
          most popular metaverses that exist at this time for virtual reality
          users, where they can visit worlds, meet new people and express
          themselves using any kind of avatar you can imagine, however as users
          we have no control over what happens in these platforms, since the
          companies that own these metaverses dictate the rules and changes that
          happen in these worlds, another important issue I would like to
          mention is that these current metaverses do not have a system of
          economy or property, as people in these worlds we can not own
          anything, much less buy or sell goods. Remember we are talking about
          metaverses in virtual reality. There are also 2D metaverses, such as
          decentraland, the sandbox, world wide webb, which have the
          characteristics that virtual reality metaverses do not have. These 2D
          metaverses live on blockchain technologies, which allows users to own
          the places or things they interact with, for example you can buy
          apartments (in opensea which is basically an amazon of NFTS) that you
          can use in the world wide webb metaverse that range from 2. 14 ETH
          which is approximately $6,300 DLLS, where you can decorate it with
          your own NFT's, invite your friends and chat inside this apartment, you
          can also sell it to another person or give it away if you want,
          because you are the owner of this piece of software that represents an
          apartment in a virtual world, neither google nor microsoft or epic
          games are owners of this digital asset, but only you. Your NFTS,
          cryptocurrencies, the history of transactions you have made, all this
          is stored in a wallet (digital wallet), more on this later.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="m-4 lg:text-3xl">Technologies/Tools Needed</h2>
        <p className="text-justify w-11/12 lg:w-3/5 m-auto lg:text-2xl">
          To solve these problems, different technologies have been developing
          that come to evolve the way we interact with the internet, with the
          help of web3, blockchain technology and virtual reality.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="m-4 lg:text-3xl">State of these technologies</h2>
        <p className="text-justify w-11/12 lg:w-3/5 m-auto lg:text-2xl">
          It is important to take into account the current state of these
          technologies needed to build the metaverse. First, what is web 3? It
          is the evolution of the internet that we use today, which allows us to
          have services such as social networks, cloud computing, real-time
          services, among many others. It needs to be open and decentralized,
          platforms built on web 3, exist on open protocols that do not require
          third parties or intermediaries. For example, unlike a centralized
          social network like facebook that exists on company computers, a
          decentralized web 3 social network exists on the computers of a
          decentralized network on the blockchain like ethereum. The
          participants of these platforms own their own content and receive
          ownership of their profiles on the platforms. For example, in a
          decentralized social network your information belongs to you as a user
          not to the owner of the platform. This technology will allow us to
          create decentralized worlds or platforms where economies will exist by
          exchanging digital assets. These digital assets will be represented by
          money, contracts, properties, etc... Currently this technology already
          exists, however the use of it is very low due to the problems of
          scalability, user friendly interfaces, and standardization that it
          faces. First, what is a blockchain, think of it this way, the current
          internet is composed of various servers (computers) that we access
          every day like facebook, instagram, twitter. A blockchain represents
          the same but built in a different way, instead of accessing the
          computers of the companies, we access a network of "private" computers
          connected to each other, where the information of all these
          applications is stored, no one owns these applications because no one
          owns all the computers on the network, but this shared database exists
          thanks to the joint work of a community of people who come together to
          create the network. Decentralized networks or block chains such as
          Solana, Cardano and Ethereum, store applications that exist in parts
          in all computers in the network at the same time, these applications
          are known as Smart Contracts, these contracts allow interacting with
          them through transactions. We need standardization in the technologies
          needed to build web 3 projects, as we need to develop these standards
          for massive adaptation by developers, thus facilitating the
          development path and obtaining a greater flow of decentralized
          application development. Virtual and augmented reality are also
          necessary technologies for the future vision of the internet,
          currently the company Meta, formerly facebook is the one that
          dominates the virtual reality industry with its Meta Quest 2 device,
          and Apple dominates on the side of augmented reality, which although
          they do not have a device dedicated to this has been responsible for
          equipping their cell phones with augmented reality technology and has
          developed much technology needed to develop AR and XR applications.
          The biggest problems presented by these technologies fall in the
          hardware area with the need for more immersive devices that allow us
          to express body language and on the other hand, like web 2,
          decentralization.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="m-4 lg:text-3xl">Concept</h2>
        <p className="text-justify w-11/12 lg:w-3/5 m-auto lg:text-2xl">
          I propose the following concept, create a virtual world that is
          accessed through a browser or a native application, where there are
          properties and streets that connect them. The ownership of a property
          is described in a NFT through a smart contract, this property allows
          you to host a server where multiple systems can exist, both the
          systems and the server must allow interaction through virtual reality
          or augmented reality. A property can be a store with its point of sale
          systems, inventory, etc.. It can also be an office with an assistant
          system, computers, or it can also be a video game room. The streets
          represent the connections between these properties, thus creating
          cities, where users can walk down the street and enter establishments,
          buy things, open businesses, have personalized homes, all this on a
          layer of technologies that allow users to create on this universe.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="m-4 lg:text-3xl">Thanks for taking the time to read this article!.</h2>
      </div>
    </div>
  );
};

export default BlogPost;
