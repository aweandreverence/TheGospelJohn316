import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';


export class SplashScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleBeginPressed() {
        this.props.app.goToStoryboard();
    }

    render() {
        return(
<View style={styles.storyboardPage}>
  <Text style={styles.title}>
    What is the Gospel?
  </Text>
  <Button onPress={this.handleBeginPressed.bind(this)} title="Let's Begin" />
</View>
        );
    }
}
