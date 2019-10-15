import React from 'react';

function About() {
    return (
        <div className='About'>
            <h1>About</h1>
            <p>
                This simple web application was created using React.js, utilizing Node.js' "npx create-react-app" function for the boilerplate. The <em>'Lights/Out'</em> game logic was written by me whilst attending a React.js course by <strong>Colt Steele</strong> called <em>"The Modern React Bootcamp (Hooks, Context, NextJS, Router)"</em>.
            </p>
            <p>
                The <em>'Lights/Out'</em> game is made up of two React components (Board.js and Cell.js) and utilizes React state functionality for the game logic. State is stored on the mother component (board.js in this case), and when an individual cell is clicked- it evaluates which cell ID's are adjacent to it in the grid system and flips their boolean values. Then the new state is passed up to the board where it is stored.
            </p>
            <p>
                The website itself is made up of one index.html file and eight React components (Index.js, App.js, Contact.js, About.js, Image.js, Board.js, Cell.js, and Eval.js) rendering content onto it, as well as some .css files for style. The navigation bar is made with a basic nav tag, but is wrapped in a Node module called React Router to seamlessly render and switch components inside the index.html DOM. Using this method allows client-side rendering which prevents the needless use of GET requests whilst still updating the URL path for the users convenience and clarity.
            </p>
            <p>
                The font and effects used on the navigation bar and <em>'Lights/Out'</em> game were taken from a public <a href='https://codepen.io/Trinca/pen/NAvpWa'>codepen</a> made by <strong>Thomas Trinca</strong>. All credit goes to him for the fantastic animation effects and design.
            </p>
            <p>
                This website is made for the sole purpose of a university assignment, and as such it and the <em>Lights/Out</em> game are unfinished products and not at all optimized for different browsers or viewports. The page does not render well on devices with screens smaller than 768px (roughly the size of a tablet), and might not render at all in Internet Explorer. There are also bugs the user should be aware of, for instance the game might initialize with an unsolvable grid. I will not be fixing these issues, however if you would like to tinker with the code it is available on my studies-related <strong><a href='https://github.com/ARovik/IT-og-Digitalisering-19H'>GitHub</a></strong>.
            </p>
            <p>
                Favicon and images used are from <a href='https://pixabay.com'>Pixabay.com</a>, an excellent royalty free stock image library.
            </p>
        </div>
    );
}

export default About;