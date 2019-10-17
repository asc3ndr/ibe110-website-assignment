import React from 'react';

function About() {
    return (
        <div className='About'>
            <h1>About</h1>
            <h3>Lights/Out Game</h3>
            <p>
                Welcome to <em>Lights/Out</em>, a puzzle game consisting of a grid of lights that are  either on or off. Pressing any light will toggle it and its adjacent lights. The goal of the game is to switch all the lights off. To start playing simply navigate to the 'Play' button in the top left of the webpage.
            </p>
            <h3>Assignment</h3>
            <p>
                This webpage was created for a university assignment where the goal was to make a webpage with some theme in mind. The showcase for this webapp is the <em>Lights/Out</em> game set with a neon theme, and includes a few extra pages to satisfy the assignment criteria. Throughout this assignment my thought process was more focused on having fun with the code rather than making it functional. The site is therefore not very responsive and renders poorly on devices with screens smaller than 768px (roughly the size of a tablet) width-wise, and might not render at all in certain browsers like Internet Explorer and Opera.
            </p>
            <h3>How It's Made</h3>
            <p>
                The web application was created using React.js, utilizing Node.js' "create-react-app" for the boilerplate. The <em>'Lights/Out'</em> game logic is written using React.js, and is from an earlier project with some modifications.
            </p>
            <p>
                The <em>Lights/Out</em> game is made up of two React components (Board.js and Cell.js) and utilizes React Hooks (useState and useEffect) for the game logic. State is first generated and stored on the parent component (board.js in this case) before the component is mounted and a solvable solution is created by a React effect hook. Thereafter when an individual cell is clicked- the program evaluates which cell ID's are adjacent in the grid system and flips their boolean values. Then the new state is passed up to the parent component where it is stored and the new changes are rendered.
            </p>
            <p>
                The webpage itself is made up of one index.html file and eight React components (Index.js, App.js, Contact.js, About.js, Image.js, Board.js, Cell.js, and Eval.js) rendering content onto it, as well as some .css files for style. The navigation bar is made with a basic nav tag wrapped in a Node module called "React Router" to seamlessly render and switch components inside the DOM. This achieves client-side rendering which prevents the needless use of GET requests whilst still updating the URL path for the users convenience and clarity, as made apparant by the page not refreshing as you navigate it.
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