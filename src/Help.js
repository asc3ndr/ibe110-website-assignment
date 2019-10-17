import React from 'react';

function Eval() {
    return (
        <div className='Eval'>
            <h1>Help</h1>
            <h3>
                Is the game solvable?
            </h3>
            <p>
                It’s relatively difficult to decide if any given board is solvable (<a href='https://ida.mtholyoke.edu/xmlui/bitstream/handle/10166/693/375.pdf?sequence=1&isAllowed=y'><strong>here</strong></a>'s' some light reading on this topic) — but rest assured you <em>can</em> solve the puzzle.. Maybe you've already noticed individual cells flashing when the game component loads? A game board with all lights on is always solvable, so using this fact we can employ a crude and simple trick. The game logic simply inputs a few random moves after the component is loaded, and we have a unique, solvable board every time. It's not pretty or fancy, but it works!
            </p>
            <h3>
                How do I win?
            </h3>
            <p>
                That's a good question... This is a difficult game and I am personally TERRIBLE at it, so I suggest you <a href='http://perfectweb.org/ddo/solver/vale_puzzle.html'><strong>cheat</strong></a>!
            </p>
            <h3>
                Can I play with a different size grid?
            </h3>
            <p>
                No. Although relatively simple to implement, this is only a showcase and I will not be spending time on additional features.
            </p>
        </div>
    );
}

export default Eval;