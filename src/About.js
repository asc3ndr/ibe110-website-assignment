import React from 'react';

function About() {
    return (
        <div className='About'>
            <h1>About</h1>
            <h3>Lights/Out Game</h3>
            <p>
                Welcome to <em>Lights/Out</em>, a puzzle game consisting of a grid of lights that are either on or off. Pressing any light will toggle it and its adjacent lights. The goal of the game is to switch all the lights off. To start playing simply navigate to the 'Play' button in the top left of the webpage.
            </p>
            <h3>Acknowledgements</h3>
            <p>
                The neon font and effects used in the navigation bar and <em>Lights/Out</em> game are made by <strong>Thomas Trinca</strong> and is made available on his <strong><a href='https://codepen.io/Trinca/pen/NAvpWa'>codepen</a></strong>. All credit goes to him for the fantastic animation effects and design.
            </p>
            <p>
                The favicon and images used are available at <a href='https://pixabay.com'><strong>Pixabay.com</strong></a>, an excellent royalty free stock image library.
            </p>
        </div>
    );
}

export default About;