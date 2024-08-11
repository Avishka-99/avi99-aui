import React from 'react';
import { type DimensionValue, type ColorValue } from 'react-native';
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
    rippleColor?: ColorValue;
}
declare const _default: React.NamedExoticComponent<ButtonProps>;
export default _default;
