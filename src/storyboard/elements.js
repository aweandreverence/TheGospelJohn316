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
        <StoryboardElement>
          <div
            style={{
                width: 280,
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
    ),
    'redX': (
	    <StoryboardElement
	style={{
	    fontSize: 50,
	    fontWeight: 'bold',
	    color: '#FF0000'
	}}
	    >
	    x
	</StoryboardElement>
    ),
    'lineToDeath': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 310,
	    height: 3,
	    backgroundColor: '#000'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'death': (
	    <StoryboardElement
	style={{
	    fontSize: 18,
	    fontWeight: 'bold'
	}}
	    >
	    DEATH
	</StoryboardElement>
    ),
    'sin': (
	    <StoryboardElement
	style={{
	    fontSize: 24,
	    fontWeight: 'bold',
	    color: '#FF0000'
	}}
	    >
	    SIN
	</StoryboardElement>
    ),
    'treeTrunk': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 20,
	    height: 75,
	    backgroundColor: '#643200'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'treeLeaves': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 80,
	    height: 75,
	    backgroundColor: '#00B800'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'sins': (
	    <StoryboardElement
	style={{
	    fontSize: 18,
	    fontWeight: 'bold',
	    color: '#FFB68A'
	}}
	    >
	    SINS
	</StoryboardElement>
    ),
    'chairBack': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 5,
	    height: 50,
	    backgroundColor: '#000'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'chairSeat': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 40,
	    height: 5,
	    backgroundColor: '#000'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'chairLeg': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 3,
	    height: 40,
	    backgroundColor: '#000'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    's': (
	    <StoryboardElement
	style={{
	    fontSize: 18,
	    fontWeight: 'bold',
	    color: '#FF0000'
	}}
	    >
	    S
	</StoryboardElement>
    ),
    'bigI': (
	    <StoryboardElement
	style={{
	    fontSize: 60,
	    fontWeight: 'bold',
	    color: '#FF0000'
	}}
	    >
	    I
	</StoryboardElement>
    ),
    'n': (
	    <StoryboardElement
	style={{
	    fontSize: 18,
	    fontWeight: 'bold',
	    color: '#FF0000'
	}}
	    >
	    N
	</StoryboardElement>
    ),
    'lineToGoodWorks': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 3,
	    height: 48,
	    backgroundColor: '#000'
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'goodWorks': (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 15,
	    fontWeight: 'bold',
	    color: '#000'
	}}
	    >
	    Good<br />Works
	</StoryboardElement>
    ),
    'arrowUp': (
	    <StoryboardElement
	style={{
	    fontSize: 25,
	    color: '#000'
	}}
	    >
	    {String.fromCharCode(9650)}
	</StoryboardElement>
    ),
    'joinChurch' : (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 15,
	    fontWeight: 'bold',
	    color: '#000'
	}}
	    >
	    Join<br />Church
	</StoryboardElement>
    ),
    'lineToJoinChurch' : (
	    <StoryboardElement
	style={{
	    width: 3,
	    height: 80,
	    backgroundColor: '#000'
	}}
	    >
	</StoryboardElement>
    ),
    'otherReligion' : (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 15,
	    fontWeight: 'bold',
	    color: '#000'
	}}
	    >
	    Other<br />Religion
	</StoryboardElement>
    ),
    'bible' : (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 15,
	    fontWeight: 'bold',
	    color: '#000'
	}}
	    >
	    <image src="bible-image.png" alt="John 3:16" width="129" height="76" />
	</StoryboardElement>
    )
};


export default StoryboardElements;
