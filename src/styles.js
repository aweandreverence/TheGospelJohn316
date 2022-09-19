import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    app: {
        marginHorizontal: 'auto',
        maxWidth: 500
        //width: '100%',
        //height: '100%'
    },
    logo: {
        height: 80
    },
    header: {
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2.5rem',
        marginVertical: '1em',
        textAlign: 'center'
    },
    text: {
        lineHeight: '20em',
        fontSize: '1.25rem',
        marginVertical: '2.5em',
        textAlign: 'center'
    },
    link: {
        color: '#1B95E0'
    },
    code: {
        fontFamily: 'monospace, monospace'
    },
    storyboardPage: {
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#000000',
        padding: 50
    }
});
