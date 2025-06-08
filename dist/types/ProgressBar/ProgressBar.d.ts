import React from 'react';
import { type ColorValue, type DimensionValue, type ViewStyle } from 'react-native';
interface ProgressBarProps {
    value: number;
    color?: ColorValue;
    width?: DimensionValue;
    height?: DimensionValue;
    containerStyle?: ViewStyle;
}
declare const _default: React.NamedExoticComponent<ProgressBarProps>;
export default _default;
