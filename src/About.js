import React from 'react';

function About() {
    return (
        <div className='About'>
            <h1>About</h1>
            <h3>Welcome to <em>Lights/Out Game!</em></h3>
            <p>
                Lights/Out is a puzzle game consisting of a grid of lights that are either on or off. The goal of the game is to switch all the lights off. Pressing any light will toggle it and its adjacent lights on and off. To start playing simply navigate to the 'Play' button in the top left of the webpage.
            </p>
            <h3>Website</h3>
            <p>
                The webpage is not optimized for viewports smaller than 768px wide (about the size of a tablet) and utilizes newer code functions not supported by old browsers, such as Internet Explorer. The best user experience is achieved on a desktop computer running one of the newer browsers, i.e Google Chrome or Firefox.
            </p>
        </div >
    );
}

export default About;