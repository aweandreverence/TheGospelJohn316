import React, { Component } from 'react';
//import { Button, Image, Text, ScrollView, View } from 'react-native';
import { View } from 'react-native';

import styles from './styles';
import SplashScreen from './splash';
import Storyboard from './components/storyboard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 'splash'
        };
    }

    goToSplashScreen() {
        this.setState({
            screen: 'splash'
        });
    }

    goToStoryboard() {
        this.setState({
            screen: 'storyboard'
        });
    }

    render() {
        const screens = {
            splash: <SplashScreen app={this} />,
            storyboard: <Storyboard app={this} />
        };

        const screen = screens[this.state.screen];

        return (
            <View style={styles.app}>
              {screen}
            </View>
        );
    }
}

export default App;
