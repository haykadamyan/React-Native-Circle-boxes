import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';

import Styles from '../../styles';

import * as Helpers from '../../helpers';

export default class Bubble extends Component {
    constructor(props){
        super(props);
    }

    state = {
        bubble: this.props.bubble,
        scaleAnim: new Animated.Value(1),
        deviceWidth: this.props.deviceWidth,
        offsetTop: 20,
        offsetLeft: 20
    }

    animationIsInProgress = false;

    doAnimation(){
        if(!this.animationIsInProgress){
            const duration =  Helpers.Config.randomBetween(300, 800);
            
            this.animationIsInProgress = true

            Animated.timing(                            
                this.state.scaleAnim,                    
                {
                    toValue: 1.1,
                    duration: duration                      
                }
            ).start(()=>{
                Animated.timing(
                    this.state.scaleAnim,
                    {
                        toValue: 1,
                        duration: duration
                    }
                ).start(()=>{
                    this.animationIsInProgress = false
                });
            });             
        }
        return;
    }

    handleScroll(data){
        this.setState({
            elementX: data.x,
            elementWidth: data.width
        })
    }

    checkVisibility() {
        let ox = this.state.elementX;
        let width = this.state.elementWidth;

        if(((ox+width-this.props.scrollLeft)<=this.state.deviceWidth) && ((ox+width-this.props.scrollLeft>width))){
            this.doAnimation();
        }
    }

    generateBubble({radius, style, textStyle, onPress, offsetLeft, offsetTop}) {
    return (
        <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: offsetTop || this.state.offsetTop, paddingLeft: offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}]}}>
            <TouchableOpacity style={[{width: radius, height: radius}, Styles.bubble, style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                <View style={Styles.flexCenter}>
                    <Text style={textStyle}>Text</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}


    render(){   
        this.checkVisibility();
        return(
            this.generateBubble(this.state.bubble)
        );
    }
}

