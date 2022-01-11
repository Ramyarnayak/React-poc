import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import arif from '../../img/story/arif.jpg';
import arman from '../../img/story/arman.jpg';
import nayem from '../../img/story/nayem.jpg';
import abir from '../../img/story/abir.jpg';
import jhankar from '../../img/story/jhankar.jpg';

// images (story)
import frontEnd from '../../img/story/storyImage/front-end.jpg'
import html from '../../img/story/storyImage/html.jpg'
import js from '../../img/story/storyImage/js.jpg'
import css from '../../img/story/storyImage/css.jpg'
import frontEndSteps from '../../img/story/storyImage/front-end-steps.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={frontEnd}
                profileSrc={arif}
                title="Xyz"
            />
            <Story 
                image={html}
                profileSrc={arman}
                title="Abc"
            />
            <Story 
                image={js}
                profileSrc={nayem}
                title="uvw"
            />
            <Story 
                image={css}
                profileSrc={abir}
                title="rtc"
            />
            <Story 
                image={frontEndSteps}
                profileSrc={jhankar}
                title="XYZ"
            />
        </div>
    )
}

export default StoryReel;
