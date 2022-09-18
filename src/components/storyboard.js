import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
//import styles from '../styles';

import { StoryboardElements } from '../storyboard/elements';
import { StoryboardFrames } from '../storyboard/frames';

const _ = require('lodash');


export class Storyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // NOTE: for production, set frame to `0`
            // for development, set frame to any value to test a specific frame
            frame: 0
            //frame: 15
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

    getFoundationId(foundationValue, currentFrameId) {
        let foundationId = null;

        if (foundationValue === null) {
            foundationId = null;
        } else if (typeof(foundationValue) === 'string' && foundationValue === 'auto') {
            foundationId = currentFrameId - 1;
        } else if (typeof(foundationValue) === 'number' && foundationValue >= 0) {
            foundationId = foundationValue;
        } else if (typeof(foundationValue) === 'number' && foundationValue < 0) {
            foundationId = currentFrameId + foundationValue;
        } else {
            throw Error(`Illegal value for foundationValue: ${foundationValue}`);
        }

        return foundationId;
    }

    getFrameElements() {
        const frameId = this.state.frame;
        const frame = StoryboardFrames[frameId];

        // initialize with elements from current frame
        let frameElements = frame.layout.add;

        // recursively add frame elements from this frame's foundation
        const framesVisited = {};

        let foundationId = this.getFoundationId(frame.layout.foundation, frameId);

        while (foundationId !== null) {
            if (framesVisited[foundationId]) {
                // frame already visited, indicating an infinite loop
                foundationId = null;
            } else {
                // concatenate frame elements
                const foundationFrame = StoryboardFrames[foundationId];
                frameElements = _.concat(frameElements, foundationFrame.layout.add);
                // update loop condition
                foundationId = this.getFoundationId(foundationFrame.layout.foundation, foundationId);
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
            const className = `element-${frameElement.key}`;
            const renderedFrameElement = (
<div key={key} className={className} style={style}>
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
