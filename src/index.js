/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Styles from './styles';

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}

function generateBubble({radius, style}) {
    return (
        <View style={{paddingTop: randomBetween(5, 100), paddingLeft: randomBetween(5, 100)}}>
            <TouchableOpacity style={[{width: radius, height: radius}, Styles.bubble, style]}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Text</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default class ReactNativeCircleBoxes extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} contentContainerStyle={{flex: 1, flexDirection: 'column', flexWrap:'wrap',  backgroundColor: 'black', alignItems:'flex-start'}}>
                    {generateBubble({radius: 150, style: {backgroundColor: 'purple'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'blue'} })}
                    {generateBubble({radius: 250, style: {backgroundColor: 'pink'} })}
                    {generateBubble({radius: 150, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 50, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 80, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 350, style: {backgroundColor: 'red'} })}
                    {generateBubble({radius: 75, style: {backgroundColor: 'red'} })}
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
