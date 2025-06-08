import React from 'react';
import { type ViewStyle } from 'react-native';
interface SwitchProps {
    value: boolean;
    onChange: (value: boolean) => void;
    color?: string;
    containerStyle?: ViewStyle;
}
declare const _default: React.NamedExoticComponent<SwitchProps>;
export default _default;
