import React, { useState, useRef, memo, useEffect } from 'react';
import { Pressable, Text, type ViewStyle, type TextStyle, type DimensionValue, View, type ColorValue, Animated } from 'react-native';
interface ButtonProps {
    mode: 'flat' | 'outlined' | 'text';
    onPress: () => void;
    title: String;
    color?: ColorValue;
    width?: DimensionValue;
    outlineColor?: ColorValue;
    background?: ColorValue;
    rounded?: Boolean;
    ripple?: Boolean;


}
interface RippleTranslation {
    x: any,
    y: any,
}
const Button: React.FC<ButtonProps> = ({ mode, onPress, title, color, background, rounded, outlineColor, width, ripple }) => {
    let buttonStyle: ViewStyle = {};
    let titleStyle: TextStyle = {};
    const ripple_ = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        if ( mode == undefined) {
            console.error('mode must be provided');
            return;
        }
        if (onPress == undefined){
            console.error('onPress function must be provided');
            return; 
        }
        if (title == undefined){
            console.error('title must be provided');
            return; 
        }
        if(typeof mode !='string'){
            console.error('mode should be a string');
            return; 
        }
        if(typeof onPress !='function'){
            console.error('onPress should be a function');
            return; 
        }
        if(typeof title !='string'){
            console.error('title should be a string');
            return; 
        }
    },[])
    const [translateValue, setTranslateValue] = useState<RippleTranslation>({ x: 0, y: 0 });
    switch (mode) {
        case 'flat':
            buttonStyle = {
                ...buttonStyle, backgroundColor: background ? background : 'dodgerblue', borderWidth: 2, borderColor: outlineColor ? outlineColor : background ? background : 'dodgerblue', minWidth: width ? width : 0,
                padding: 5

            };
            titleStyle = { color: color ? color : 'white' };
            break;
        case 'outlined':
            buttonStyle = { ...buttonStyle, borderWidth: 3, borderColor: color ? color : 'royalblue', backgroundColor: background ? background : 'dodgerblue' };
            titleStyle = { color: color ? color : 'white' };
            break;
        case 'text':
            titleStyle = { color: color ? color : 'white' };
            break;
        default:
            buttonStyle = { backgroundColor: 'dodgerblue' };
            break;
    }
    if (width) {
        buttonStyle = { ...buttonStyle, width: width }
    }
    if (!ripple) {
        return (
            <Pressable style={[{ padding: 10, borderRadius: rounded ? 35 : 5, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }, buttonStyle]} onPress={onPress}>
                <Text style={titleStyle} >{title}</Text>
            </Pressable>
        );
    } else if (ripple) {
        return (
            <Pressable style={
                [
                    {
                        padding: 10,
                        borderRadius: rounded ? 35 : 5,
                        height: 38,
                        overflow: 'hidden',
                        display: 'flex',

                    },
                    buttonStyle
                ]}
                onPress={(event) => {
                    onPress();
                    setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY })
                    Animated.parallel([
                        Animated.sequence([
                            Animated.timing(
                                ripple_, {
                                toValue: 100,
                                duration: 300,
                                useNativeDriver: true,
                            }
                            ),
                            Animated.timing(
                                ripple_, {
                                toValue: 0,
                                duration: 1,
                                useNativeDriver: true,
                            }
                            ),
                        ])
                    ]).start();
                }}
                onLongPress={(event) => {
                    onPress();
                    setTranslateValue({ x: event.nativeEvent.locationX, y: event.nativeEvent.locationY })
                    Animated.parallel([
                        Animated.sequence([
                            Animated.timing(
                                ripple_, {
                                toValue: 100,
                                duration: 1000,
                                useNativeDriver: true,
                            }
                            ),
                            Animated.timing(
                                ripple_, {
                                toValue: 0,
                                duration: 1,
                                useNativeDriver: true,
                            }
                            ),
                        ])
                    ]).start();
                }}


            >

                <View style={{ pointerEvents: 'none', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Text style={[titleStyle, { pointerEvents: 'none' }]} >{title}</Text></View>
                <Animated.View style={[{
                    width: 1,
                    height: 1,
                    borderRadius: 1,
                    backgroundColor: 'white',
                    position: 'absolute',
                    transform: [
                        { translateX: translateValue.x },
                        { translateY: translateValue.y },
                        {
                            scale: ripple_.interpolate({
                                inputRange: [0, 100],
                                outputRange: [0, 150],
                            })
                        },

                    ],
                    pointerEvents: 'none',
                    opacity: ripple_.interpolate({
                        inputRange: [0, 100],
                        outputRange: [0.7, 0],
                    }),

                }]}></Animated.View>
            </Pressable>
        )
    } else {
        return (
            <></>
        )
    }

};

export default memo(Button);
