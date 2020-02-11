import React, { Component } from 'react';
import { Button, Image, Text, ScrollView, View } from 'react-native';
import styles from './styles';


const PAGES = [
    {
        title: 'In the beginning...',
        content: 'God created the heavens and the earth (Genesis 1:1)'
    },
    {
        title: 'The word became flesh',
        content: 'The word became flesh, and dwelt among us (John 1:14)'
    },
    {
        title: 'The Solution',
        content: 'For God so love the world, that He gave his only begotten Son, that whoever believes in Him shall not perish but have eternal life. (John 3:16)'
    },
    {
        title: 'The Love of God',
        content: 'But God demonstrates His love toward us, that while we were yet sinners, Christ died for us. (Romans 5:8)'
    }
];


class Storyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0
        };
    }

    handleBackPressed() {
        this.setState({
            page: Math.max(0, this.state.page - 1)
        })
    }

    handleNextPressed() {
        this.setState({
            page: Math.min(this.state.page + 1, PAGES.length - 1)
        })
    }

    handleRestartPressed() {
        this.props.app.goToSplashScreen();
    }

    buildPage() {
        const page = PAGES[this.state.page];
        const markup = (
<View>
  <Text style={styles.title}>
    {page.title}
  </Text>
  <Text>
    {page.content}
  </Text>
</View>
        );
        return markup;
    }

    render() {
        const page = this.buildPage();

        const nextButton = this.state.page + 1 >= PAGES.length ? null : (
<View>
  <Button onPress={this.handleNextPressed.bind(this)} title="Next" />
  <br/>
</View>
        );

        const prevButton = this.state.page == 0 ? null : (
<View>
  <Button onPress={this.handleBackPressed.bind(this)} title="Go Back" />
  <br/>
</View>
        );

        return (
<View>
  {page}
  <br/>
  {nextButton}
  {prevButton}
  <Button onPress={this.handleRestartPressed.bind(this)} title="Start over" />
</View>
        );
    }
}

export default Storyboard;
