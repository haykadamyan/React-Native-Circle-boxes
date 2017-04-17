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
        offsetTop: 10,
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
// {radius, style, textStyle, onPress, offsetLeft, offsetTop}
    generateBubble(element) {
    return (
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.children[0].offsetTop || this.state.offsetTop, paddingLeft: element.children[0].offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                    <TouchableOpacity style={[{width: element.children[0].radius, height: element.children[0].radius}, Styles.bubble, element.children[0].style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                        <View style={Styles.flexCenter}>
                            <Text style={element.children[0].textStyle}>Text</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>    
                <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.children[1].offsetTop || this.state.offsetTop, paddingLeft: element.children[1].offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                    <TouchableOpacity style={[{width: element.children[1].radius, height: element.children[1].radius}, Styles.bubble, element.children[1].style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                        <View style={Styles.flexCenter}>
                            <Text style={element.children[1].textStyle}>Text</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>    
            </View>
            <View style={{flexDirection: 'row'}}>
                <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.offsetTop || this.state.offsetTop, paddingLeft: element.offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                    <TouchableOpacity style={[{width: element.radius, height: element.radius}, Styles.bubble, element.style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                        <View style={Styles.flexCenter}>
                            <Text style={element.textStyle}>Text</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <View style={{flexDirection: 'column'}}>
                    <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.children[2].offsetTop || this.state.offsetTop, paddingLeft: element.children[2].offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                        <TouchableOpacity style={[{width: element.children[2].radius, height: element.children[2].radius}, Styles.bubble, element.children[2].style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                            <View style={Styles.flexCenter}>
                                <Text style={element.children[2].textStyle}>Text</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View> 
                    <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.children[3].offsetTop || this.state.offsetTop, paddingLeft: element.children[3].offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                        <TouchableOpacity style={[{width: element.children[3].radius, height: element.children[3].radius}, Styles.bubble, element.children[3].style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                            <View style={Styles.flexCenter}>
                                <Text style={element.children[3].textStyle}>Text</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View> 
                </View> 
            </View>
            <View style={{flexDirection: 'row'}}>
                <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.children[4].offsetTop || this.state.offsetTop, paddingLeft: element.children[4].offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                    <TouchableOpacity style={[{width: element.children[4].radius, height: element.children[4].radius}, Styles.bubble, element.children[4].style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                        <View style={Styles.flexCenter}>
                            <Text style={element.children[4].textStyle}>Text</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>    
                <Animated.View onLayout={(event) => {this.handleScroll(event.nativeEvent.layout)}} style={{paddingTop: element.children[5].offsetTop || this.state.offsetTop, paddingLeft: element.children[5].offsetLeft || this.state.offsetLeft, transform: [{scale: this.state.scaleAnim}], flexDirection: 'row'}}>
                    <TouchableOpacity style={[{width: element.children[5].radius, height: element.children[5].radius}, Styles.bubble, element.children[5].style]} onPress={typeof onPress == 'function'? onPress: (() => null)}>
                        <View style={Styles.flexCenter}>
                            <Text style={element.children[5].textStyle}>Text</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>    
            </View>
        </View>
    )
}


    render(){   
        this.checkVisibility();
        console.log(this.state);
        return(
            this.generateBubble(this.state.bubble)
        );
    }
}

