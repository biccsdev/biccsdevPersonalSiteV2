import React from 'react';
import Particles from "react-tsparticles";
import Sidebar from '../Sidebar';
import Footer from '../Footer'
import {Outlet} from "react-router-dom";

import '../Home.css'

import nft from '../assets/solanaDog.jpg';
import flag from '../assets/mex.png';
import git from '../assets/github.png';
import twt from '../assets/twt.png';
import Typical from 'react-typical'

export default function Home() {
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
    <div className='font-vt323'>
      <Sidebar />
    <h1 className='absolute z-10 sm:text-6xl lg:text-8xl font-bold text-whitish w-full grid place-items-center my-14 py-1'>
    <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        wrapper="a"
      />
    </h1>
    <div className='absolute z-10 grid place-items-center h-screen my-40 w-full items-start content-start '>
        <div className='sm:h-20 lg:h-72 lg:mt-16'>
            <img className='w-max rounded-full sm:w-24 lg:w-64 -mt-0.5' src={nft} alt="NFT dog with monocule and hat"></img>
        </div>
        <div className='sm:w-4/5 lg:w-1/4'>
            <p className='m-8 sm:text-5xl lg:text-6xl text-whitish font-bold tracking-wider leading-4 text-center'>
            I'm         
            <Typical
                    steps={[' @biccsdev', 2000, ' VictorTorres', 2000]}
                    loop={Infinity}
                    wrapper="a"
                />
            a Software Engineer based in Mexico.
            </p>
        </div>
        
        <img src={flag} alt="Mexican flag"></img>
        <div className='flex m-8'>
            <a href='https://github.com/biccs' target="_blank" rel="noreferrer">
                <img className='pr-6 w-15 h-10' src={git} alt="github logo"></img>
            </a>
            <a href='https://twitter.com/biccsdev_' target="_blank" rel="noreferrer">
                <img className='w-10 h-10' src={twt} alt="twitter logo"></img>
            </a>
        </div>
    </div>
    
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#222823",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detect_on: 'window',
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fffaff",
          },
          links: {
            color: "#fffaff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    <Footer />
    <Outlet />
    </div>
  );
}
