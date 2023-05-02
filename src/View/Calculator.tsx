import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Button from '../components/Button';
import Display from '../components/Display';

function Calculator(): JSX.Element {
    const [displayValue, setDisplayValue] = useState<string>('0');

    const addDigit = (digit: string) => {
        setDisplayValue(digit);
    };

    const clearMemory = () => setDisplayValue('0');

    const addOperation = (operation: string) => {};

    return (
        <SafeAreaView style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label="AC" onClick={clearMemory} triple />
                <Button label="/" onClick={addOperation} operation />
                <Button label="7" onClick={addDigit} />
                <Button label="8" onClick={addDigit} />
                <Button label="9" onClick={addDigit} />
                <Button label="*" onClick={addOperation} operation />
                <Button label="4" onClick={addDigit} />
                <Button label="5" onClick={addDigit} />
                <Button label="6" onClick={addDigit} />
                <Button label="-" onClick={addOperation} operation />
                <Button label="1" onClick={addDigit} />
                <Button label="2" onClick={addDigit} />
                <Button label="3" onClick={addDigit} />
                <Button label="+" onClick={addOperation} operation />
                <Button label="0" onClick={addDigit} double />
                <Button label="." onClick={addDigit} />
                <Button label="=" onClick={addOperation} operation />
            </View>
        </SafeAreaView>
    );
}

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
