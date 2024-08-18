import React from 'react';
import { View, type ColorValue, type ViewStyle } from 'react-native';
interface SeperatorProps {
    color?: ColorValue;
    containerStyle?: ViewStyle;
}
const Seperator: React.FC<SeperatorProps> = ({ color, containerStyle }) => {
    let backgroundStyle: ViewStyle = {};
    backgroundStyle = { ...backgroundStyle, backgroundColor: color ? color : 'rgb(202, 196, 208)' }
    if (containerStyle) {
        backgroundStyle = { ...backgroundStyle, ...containerStyle };
    }
    return (
        <View style={[{ width: '100%', height: 0.5 }, backgroundStyle]}>
        </View>
    )
}
export default Seperator;