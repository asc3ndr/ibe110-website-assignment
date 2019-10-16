
<h1>About</h1>
<h2>Lights/Out Game</h2>
Welcome to <em>Lights/Out</em>, a puzzle game consisting of a grid of lights that are  either on or off. Pressing any light will toggle it and its adjacent lights. The goal of the game is to switch all the lights off. To start playing simply navigate to the 'Play' button in the top left of the webpage.

<h2>Assignment</h2>
This website is made for the sole purpose of a university assignment, and as such it and the <em>Lights/Out</em> game are unfinished products and not at all optimized for different browsers or viewports. The page does not render well on devices with screens smaller than 768px (roughly the size of a tablet) width-wise. The page might not render at all in Internet Explorer.

<h2>Webpage</h2>
This simple web application was created using React.js, utilizing Node.js' "npx create-react-app" functionality for the boilerplate. The <em>'Lights/Out'</em> game logic is written in React.js, and is from an earlier project undertakeren during a React.js course by <strong>Colt Steele</strong>.

The <em>Lights/Out</em> game is made up of two React components (Board.js and Cell.js) and utilizes React state functionality for the game logic. State is stored on the mother component (board.js in this case), and when an individual cell is clicked- it evaluates which cell ID's are adjacent to it in the grid system and flips their boolean values. Then the new state is passed up to the board where it is stored.

The website itself is made up of one index.html file and eight React components (Index.js, App.js, Contact.js, About.js, Image.js, Board.js, Cell.js, and Eval.js) rendering content onto it, as well as some .css files for style. The navigation bar is made with a basic nav tag, but is wrapped in a Node module called React Router to seamlessly render and switch components inside the index.html DOM. Using this method allows client-side rendering which prevents the needless use of GET requests whilst still updating the URL path for the users convenience and clarity.

<h2>Resources</h2>
The font and effects used on the navigation bar and <em>Lights/Out</em> game were taken from a public <a href='https://codepen.io/Trinca/pen/NAvpWa'>codepen</a> made by <strong>Thomas Trinca</strong>. All credit goes to him for the fantastic animation effects and design.

The favicon and images used are available at <a href='https://pixabay.com'><strong>Pixabay.com</strong></a>, an excellent royalty free stock image library.
