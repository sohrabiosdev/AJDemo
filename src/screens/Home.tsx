import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// export { default, assets } from "../components/LiquidSwipe";

interface Prop {

}

interface State {

}

export default class Home extends Component<Prop, State> {


    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }



    render() {
        return (
            <View>
                <Text> Hello Lottie </Text>
                {/*<LottieView source={require('../../assets/dinodance.json')} autoPlay loop style={{height: 200}}/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderColor: 'green',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5
    },
    text: {
        marginTop: 10,
    }
});
