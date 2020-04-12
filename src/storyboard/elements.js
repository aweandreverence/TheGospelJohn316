import React from 'react';

import StoryboardElement from '../components/storyboard_element';

const StoryboardElements = {
    'god': (
        <StoryboardElement
           style={{
                fontSize: 18,
                fontWeight: 'bold'
           }}
        >
        GOD
        </StoryboardElement>
    ),
    'slash': (
        <StoryboardElement
           style={{
                fontSize: 18,
                fontWeight: 'bold'
           }}
        >
        /
        </StoryboardElement>
    ),
    'man': (
        <StoryboardElement
           style={{
                fontSize: 18,
                fontWeight: 'bold'
           }}
        >
        MAN
        </StoryboardElement>
    ),
    'lineToLife': (
        <StoryboardElement
           style={{
                fontSize: 18,
                fontWeight: 'bold'
           }}
        >
          <div
            style={{
                width: 230,
                height: 3,
                backgroundColor: '#000'
            }}
          ></div>
        </StoryboardElement>
    ),
    'life': (
        <StoryboardElement
           style={{
                fontSize: 18,
                fontWeight: 'bold'
           }}
        >
        LIFE
        </StoryboardElement>
    )
};


export default StoryboardElements;
