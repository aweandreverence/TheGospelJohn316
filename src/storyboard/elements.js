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
    'john316Bible' : (
	    <StoryboardElement>
	<div style={{
	    textAlign: 'center',
	    fontSize: 100,
	    color: Colors.black
	}}
        >
        <span role="img" aria-label="Bible">📖</span>
        </div>
        <div style={{
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.black,
		float: 'left',
		position: 'relative',
		left: 5,
	    top: -83
	}}
	    >
	    John 3:16
	</div>
	    </StoryboardElement>

    ),
    'crossLeft' : (
           <StoryboardElement>
            <div className='left-vertical-1'
	       style={{
		width: 3,
		height: 40,
		backgroundColor: Colors.black
	    }}
            >
	    </div>
	    <div className='left-horizontal-1'
	        style={{
		width: 40,
		height: 3,
		backgroundColor: Colors.black,
	        position: 'relative',
		float: 'left',
		top: -3,
		left: -40
	    }}
	    >
	    </div>
	    <div className='left-vertical-2'
	        style={{
		width: 3,
		height: 40,
		backgroundColor: Colors.black,
		position: 'relative',
		float: 'left',
		top: 0,
		left: -80
	    }}
	    >
	    </div>
	    <div className='left-horizontal-2'
	        style={{
		width: 40,
		height: 3,
		backgroundColor: Colors.black,
		position: 'relative',
	        float: 'left',
		top: 37,
		left: -80
	    }}
	    >
	    </div>
	    <div className='left-vertical-3'
	        style={{
		width: 3,
		height: 96,
		backgroundColor: Colors.black,
		position: 'relative',
		float: 'left',
		top: 37,
		left: -83
	    }}
	    >
	    </div>
	    <div className='cross-down-arrow'
	style={{
	    fontSize: 25,
	    color: Colors.black,
	    position: 'relative',
	    float: 'left',
	    top: 105,
	    left: -95
	}}
	    >
	    ▼
	</div>
	</StoryboardElement>
    ),
    'crossRight' : (
	    <StoryboardElement>
	    <div className='right-vertical-1'
	style={{
	    width: 3,
	    height: 40,
	    backgroundColor: Colors.black
	}}
	    >
	    </div>
	    <div className='right-horizontal-1'
	style={{
	    width: 40,
	    height: 3,
	    backgroundColor: Colors.black,
	    position: 'relative',
	    float: 'left',
	    top: -3,
	    left: 0
	}}
	    >
	    </div>
	    <div className='right-vertical-2'
	style={{
	    width: 3,
	    height: 40,
	    backgroundColor: Colors.black,
	    position: 'relative',
	    float: 'left',
	    top: -3,
	    left: 0
	}}
	    >
	    </div>
	    <div className='right-horizontal-2'
	style={{
	    width: 40,
	    height: 3,
	    backgroundColor: Colors.black,
	    position: 'relative',
	    float: 'left',
	    top: 37,
	    left: -40
	}}
	    >
	    </div>
	    <div className='right-vertical-3'
	style={{
	    width: 3,
	    height: 96,
	    backgroundColor: Colors.black,
	    position: 'relative',
	    float: 'left',
	    top: 37,
	    left: -83
	}}
	    >
	    </div>
	    <div className='cross-up-arrow'
	style={{
	    fontSize: 25,
	    color: Colors.black,
	    position: 'relative',
	    float: 'left',
	    top: -48,
	    left: -95
	}}
	    >
	    ▲
	</div>
	    </StoryboardElement>
    ),
    'JESUS' : (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 30,
	    fontWeight: 'bold',
	    color: Colors.black,
        textShadow: `1px 0px ${Colors.black}`
	}}
	    >
	    JESUS
	</StoryboardElement>
    ),
    'whiteToDeath': (
	    <StoryboardElement>
	    <div
	style={{
	    width: 80,
	    height: 3,
	    backgroundColor: Colors.white
	}}
	    ></div>
	    </StoryboardElement>
    ),
    'redArrows' : (
            <StoryboardElement>
	    <div className='upArrow'
	style={{
            color: Colors.red,
	    fontSize: 25
	}}
            >
	    ▲
            </div>
	    <div className='vert'
	style={{
            backgroundColor: Colors.red,
	    position: 'relative',
	    width: 3,
	    height: 18,
	    left: 9,
	    top: -6,
	}}
	    ></div>
	    <div className='horiz'
	style={{
	    backgroundColor: Colors.red,
	    position: 'relative',
	    width: 44,
	    height: 3,
	    left: 9,
	    top: -8,
	}}
	    ></div>
	    <div className='rightArrow'
	style={{
	    color: Colors.red,
	    fontSize: 25,
	    position: 'relative',
	    left: 50,
	    top: -28
	}}
	    >
	    ▶
	</div>
	    <div className='questionMark'
	style={{
	    color: Colors.red,
	    fontSize: 25,
	    fontWeight: 'bold',
	    position: 'relative',
	    left: 30,
	    top: -80
	}}
	    >
	    ?
	                    </div>
	    </StoryboardElement>
    ),
    '()ToDeath' : (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 24,
	    fontWeight: 'bold',
	    color: Colors.red
	}}
	    >
	    (          )
	</StoryboardElement>
    ),
    'whiteToLife' : (
            <StoryboardElement
	style={{
            width: 180,
	    height: 3,
	    backgroundColor: Colors.white
	}}
	    >
	</StoryboardElement>
    ),
    '()ToLife' : (
	    <StoryboardElement
	style={{
	    textAlign: 'center',
	    fontSize: 24,
	    fontWeight: 'bold',
	    color: Colors.red
	}}
	    >
	    (                          )
	</StoryboardElement>
    ),
    'prayer' : (
	    <StoryboardElement
	style={{
	    fontSize: 22,
	    color: Colors.black,
	    margin: 15
	}}
	    >
	    <b>PRAYER:</b>
	    <br />
	    Dear Jesus, I am ready to give you the right to take over my life from this time forward. You died to take away my sin of stealing the control of my life from you. I give you my life. Come and live in me! I ask you to control my body, soul, and spirit. I am your child. Amen.
	</StoryboardElement>
    )
};


export default StoryboardElements;
