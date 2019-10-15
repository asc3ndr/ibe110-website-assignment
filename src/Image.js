import React from 'react';
import { Howl } from 'howler';

function Image() {
    const rooster = new Howl({ src: ['Rooster.wav'] });
    return (
        <div className='Contact'>
            <h1>Mandatory Image</h1>
            <img onClick={() => { rooster.play() }} src='https://cdn.pixabay.com/photo/2017/02/01/11/25/animal-2029774_960_720.png' alt='drawing of a rooster' />
            <p>Don't you dare click the rooster!<br /><strong>You will regret it...</strong></p>
        </div>
    );
}

export default Image;