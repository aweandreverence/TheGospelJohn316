import React from 'react';

import StoryboardElement from '../components/storyboard_element';
import Colors from '../style/colors';

const StoryboardElements = {
    'GOD': (
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
                backgroundColor: Colors.black
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
	         color: Colors.red
	     }}
	    >
	    x
	    </StoryboardElement>
    ),
    'lineToDeath': (
	    <StoryboardElement
	      style={{
	          width: 310,
	          height: 3,
	          backgroundColor: Colors.black
	      }}
        >
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
	    color: Colors.red
	}}
	    >
	    SIN
	</StoryboardElement>
    ),
    'tree': (
	    <StoryboardElement>
          <div
           className="tree-leaves"
           style={{
	          width: 80,
	          height: 75,
	          backgroundColor: Colors.greenLeaf
	       }}
	      ></div>
	      <div
           className="tree-trunk"
 	       style={{
	          width: 20,
	          height: 75,
	          backgroundColor: Colors.brown,
              position: 'relative',
              left: 30
	       }}
	      ></div>
	    </StoryboardElement>
    ),
    'sins': (
	    <StoryboardElement
	     style={{
	         fontSize: 18,
             fontWeight: 'bold',
	         color: Colors.gold
	     }}
	    >
	    SINS
	    </StoryboardElement>
    ),
    'chair': (
        <StoryboardElement>
	      <div
           className="chair-back"
           style={{
               width: 5,
               height: 40,
	           backgroundColor: Colors.black
	       }}
	      ></div>
	      <div
           className="chairSeat"
           style={{
	           width: 40,
	           height: 5,
	           backgroundColor: Colors.black
	       }}
	      ></div>
   	      <div
           className="leftChairLeg"
           style={{
	           width: 3,
	           height: 30,
               backgroundColor: Colors.black,
               float: 'left',
               position: 'relative',
               left: 7
	       }}
          ></div>
	      <div
           className="rightChairLeg"
           style={{
               width: 3,
               height: 30,
	           backgroundColor: Colors.black,
               position: 'relative',
               left: 30
	       }}
          ></div>
	    </StoryboardElement>
    ),
    'sIn': (
        <StoryboardElement>
          <div
           style={{
	          fontSize: 18,
	          fontWeight: 'bold',
	          color: Colors.red,
              float: 'left'
	       }}
          >S</div>
          <div
           style={{
	          fontSize: 60,
	          fontWeight: 'bold',
	          color: Colors.red,
              float: 'left',
              position: 'relative',
              left: 14,
              top: -41
           }}
	      >I</div>
          <div
	       style={{
	          fontSize: 18,
	          fontWeight: 'bold',
	          color: Colors.red,
              position: 'relative',
              float: 'left',
              left: 28,
	       }}
	      >N</div>
        </StoryboardElement>
    ),
    'crown': (
        <StoryboardElement
         style={{
            fontSize: 100,
            color: Colors.gold
         }}
         >
          ♔
        </StoryboardElement>
    ),
    'lineToGoodWorks': (
	    <StoryboardElement>
          <div
	       style={{
	          width: 3,
	          height: 48,
	          backgroundColor: Colors.black
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
	    color: Colors.black
	}}
	    >
	    Good<br />Works
	</StoryboardElement>
    ),
    'arrowUp': (
	    <StoryboardElement
	style={{
	    fontSize: 25,
	    color: Colors.black
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
	    color: Colors.black
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
	    backgroundColor: Colors.black
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
	    color: Colors.black
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
	    color: Colors.black
	}}
	    >
	    <image src="bible-image.png" alt="John 3:16" width="129" height="76" />
	</StoryboardElement>
    )
};


export default StoryboardElements;
