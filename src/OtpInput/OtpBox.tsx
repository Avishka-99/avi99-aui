import React, { memo, useRef } from "react";
import { Animated, Text, View, type ViewStyle } from "react-native";

interface BoxProps {
    digit?: string,
    index: number,
    length: number,
    active: boolean,
}
const otpBoxStyles: ViewStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const OtpBox: React.FC<BoxProps> = ({ digit, index, length, active }) => {
    const cursorOpacity = useRef(new Animated.Value(0)).current;
    Animated.parallel([
        Animated.loop(Animated.parallel([
            Animated.timing(
                cursorOpacity,
                {
                    toValue: 2,
                    duration: 800,
                    useNativeDriver: true
                }
            )
        ]))
    ]).start()
    //.start()
    return (
        <View key={index} style={[otpBoxStyles, { height: 50, width: 50, borderColor: 'black', borderWidth: 2, borderRadius: 9, marginRight: (index == (length - 1)) ? 0 : 4 }]}>
            {active ? <Animated.Text style={{
                fontSize: 30, opacity: cursorOpacity.interpolate({
                    inputRange: Array(3).fill(0).map((_, index) => index * 1),
                    outputRange: Array(3).fill(0).map((_, index) => index % 2 == 1 ? 1 : 0),
                })
            }}>|</Animated.Text> : <Text style={{ fontSize: 23 }}>{digit}</Text>}
        </View>
    )
}
export default memo(OtpBox);