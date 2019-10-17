import React from 'react';

function About() {
    return (
        <div className='About'>
            <h1>About</h1>
            <h3>Lights/Out Game</h3>
            <p>
                Welcome to <em>Lights/Out</em>, a puzzle game consisting of a grid of lights that are either on or off. Pressing any light will toggle it and its adjacent lights. The goal of the game is to switch all the lights off. To start playing simply navigate to the 'Play' button in the top left of the webpage.
            </p>
            <h3>Assignment</h3>
            <p>
                This website was made as part of a university assignment and features a recreation of the puzzle game called <em>Lights/Out</em>. It is presented with a neon theme, and includes a few page superflous to the central theme in order to satisfy the assignment criteria. Throughout this assignment my focus was on having fun with the code rather than making the page responsive. As a result the site renders poorly on devices with screens smaller than 768px (roughly the size of a tablet) width-wise, and might not render at all in certain browsers like Internet Explorer and Opera.
            </p>
            <h3>How It's Made</h3>
            <p>
                The entire web application is coded with React.js, utilizing Node.js and "create-react-app" for the boilerplate. The <em>'Lights/Out'</em> game logic is made up of two components (Board.js and Cell.js) and utilizes React Hooks (useState and useEffect).
            </p>
            <p>
                The website itself is made up of one index.html file and eight React components (Index.js, App.js, Contact.js, About.js, Image.js, Board.js, Cell.js, and Help.js) which render content onto it, as well as some .css files for style. The navigation bar is made with a basic HTML nav tag wrapped in a Node module called "React Router" to seamlessly render and switch components inside the DOM. This approach allows client-side rendering and aims to minimize the amount of GET-requests the page is receiving whilst still updating the URL path for the users convenience and clarity.
            </p>
            <h3>Resources</h3>
            <p>
                The neon font and effects used in the navigation bar and <em>Lights/Out</em> are made by <strong>Thomas Trinca</strong> and is made available on his <strong><a href='https://codepen.io/Trinca/pen/NAvpWa'>codepen</a></strong>. All credit goes to him for the fantastic animation effects and design.
            </p>
            <p>
                The favicon and images used are available at <a href='https://pixabay.com'><strong>Pixabay.com</strong></a>, an excellent royalty free stock image library.
            </p>
        </div>
    );
}

export default About;