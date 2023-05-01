import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

interface ButtonProps {
    onClick(): void;
    label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
    return (
        <TouchableHighlight onPress={onClick}>
            <Text style={styles.button}>{label}</Text>
        </TouchableHighlight>
    );
};

export default Button;

const styles = StyleSheet.create({
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
});
