import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

interface ButtonProps {
    onClick(label: string): void;
    label: string;
    operation?: boolean;
    triple?: boolean;
    double?: boolean;
}

const Button = ({ onClick, label, ...rest }: ButtonProps) => {
    const newRest = Object.keys(rest);

    const stylesButton = [styles.button, newRest.map(prop => styles[prop])];

    return (
        <TouchableHighlight onPress={() => onClick(label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    );
};

export default Button;

const styles = StyleSheet.create<any>({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operation: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    double: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    triple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
});
