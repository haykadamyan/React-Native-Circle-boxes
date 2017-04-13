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
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Bubble from './components/bubble'

import Styles from './styles';

import * as Helpers from './helpers';
import Config from './config';

export default class ReactNativeCircleBoxes extends Component {
    
    state = {
        isScrolling: false
    }

    handleScroll(scrollFinished, event){
        this.setState({
            isScrolling: scrollFinished,
            scrollLeft: event.nativeEvent.contentOffset.x
        })
    }
        
    render() {
        return (
            <View>
                <ScrollView onScroll={this.handleScroll.bind(this, true)} onScrollEndDrag={this.handleScroll.bind(this,false)} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{height: 500, flexDirection: 'column', flexWrap:'wrap', alignItems:'flex-start'}}>
                    {
                        Config.bubbles.map((bubble, index) => {
                            return <Bubble
                                bubble={bubble}
                                key={index}
                                deviceWidth={Dimensions.get("window").width}
                                isScrolling={this.state.isScrolling}
                                scrollLeft={this.state.scrollLeft}
                            />
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeCircleBoxes', () => ReactNativeCircleBoxes);
