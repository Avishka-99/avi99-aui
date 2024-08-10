import React from 'react';
import { View, type ColorValue, type ViewStyle } from 'react-native';
interface SeperatorProps {
    color?: ColorValue
}
const Seperator: React.FC<SeperatorProps> = ({ color }) => {
    let containerStyles: ViewStyle = {};
    containerStyles = { ...containerStyles, backgroundColor: color ? color : 'rgb(202, 196, 208)' }
    return (
        <View style={[containerStyles, { width: '100%', height: 0.5 }]}>
        </View>
    )
}
export default Seperator;