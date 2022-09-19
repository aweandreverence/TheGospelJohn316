import React, { Component } from 'react';
//import { Button, Image, Text, ScrollView, View } from 'react-native';
import { Helmet } from 'react-helmet';
import { View } from 'react-native';

import { styles } from './styles';
import { SplashScreen } from './splash';
import { Storyboard } from './components/storyboard';

export class App extends Component {
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
            <>
                <Helmet>
                    <title>The Gospel</title>
                </Helmet>
                <View style={styles.app}>{screen}</View>
            </>
        );
    }
}
