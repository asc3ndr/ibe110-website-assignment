import React from 'react';

function About() {
    return (
        <div className='About'>
            <h1>About</h1>
            <h3>Welcome to <em>Lights/Out Game!</em></h3>
            <p>
                Lights/Out is a puzzle game consisting of a grid of lights that are either on or off. The goal of the game is to switch all the lights off. Pressing any light will toggle it and its adjacent lights on and off. To start playing simply navigate to the 'Play' button in the top left of the webpage.
            </p>
        </div>
    );
}

export default About;