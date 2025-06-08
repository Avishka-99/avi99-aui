import React from 'react';
import { type ViewStyle, type ColorValue } from 'react-native';
interface ButtonProps {
    mode: 'flat' | 'outlined' | 'text';
    onPress: () => void;
    title: string;
    color?: ColorValue;
    outlineColor?: ColorValue;
    background?: ColorValue;
    rounded?: boolean;
    ripple?: boolean;
    rippleColor?: ColorValue;
    containerStyle?: ViewStyle;
}
declare const _default: React.NamedExoticComponent<ButtonProps>;
export default _default;
