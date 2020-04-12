import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
//import styles from '../styles';

import StoryboardElements from '../storyboard/elements';
import StoryboardFrames from '../storyboard/frames';

const _ = require('lodash');


class Storyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frame: 0
        };
    }

    handleBackPressed() {
        this.setState({
            frame: Math.max(0, this.state.frame - 1)
        })
    }

    handleNextPressed() {
        this.setState({
            frame: Math.min(this.state.frame + 1, _.size(StoryboardFrames) - 1)
        })
    }

    handleRestartPressed() {
        this.props.app.goToSplashScreen();
    }

    getFrameElements() {
        const frame = StoryboardFrames[this.state.frame];

        // initialize with elements from current frame
        let frameElements = frame.layout.add;

        // recursively add frame elements from this frame's foundation
        const framesVisited = {};
        let foundation = frame.layout.foundation;

        while (foundation !== null) {
            if (framesVisited[foundation]) {
                // frame already visited, indicating an infinite loop
                foundation = null;
            } else {
                // concatenate frame elements
                const foundationFrame = StoryboardFrames[foundation];
                frameElements = _.concat(frameElements, foundationFrame.layout.add);
                // update loop condition
                foundation = foundationFrame.layout.foundation;
            }
        }

        return frameElements;
    }

    buildFrame() {
        const frameElements = this.getFrameElements();

        const renderedFrameElements = _.map(frameElements, (frameElement, index) => {
            const element = StoryboardElements[frameElement.key];
            const style = {
                position: 'absolute',
                left: frameElement.x,
                top: frameElement.y,
                zIndex: frameElement.z
            };

            const key = 'frame-element-' + index;
            const renderedFrameElement = (
<div key={key} style={style}>
  {element}
</div>
            );
            return renderedFrameElement;
        });

        const style = {
            height: 250,
            width: 500,
            borderWidth: 3,
            borderStyle: 'solid'
        };

        const markup = (
<View>
  <Text>
    <div style={style}>
      {renderedFrameElements}
    </div>
  </Text>
</View>
        );
        return markup;
    }

    render() {
        const frame = this.buildFrame();

        const nextButton = this.state.frame + 1 >= _.size(StoryboardFrames) ? null : (
<View>
  <Button onPress={this.handleNextPressed.bind(this)} title="Next" />
  <br/>
</View>
        );

        const prevButton = this.state.frame === 0 ? null : (
<View>
  <Button onPress={this.handleBackPressed.bind(this)} title="Go Back" />
  <br/>
</View>
        );

        return (
<View>
  {frame}
  <br/>
  {nextButton}
  {prevButton}
  <Button onPress={this.handleRestartPressed.bind(this)} title="Start over" />
</View>
        );
    }
}


export default Storyboard;
