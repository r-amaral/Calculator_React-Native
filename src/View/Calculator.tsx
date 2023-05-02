import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Button from '../components/Button';
import Display from '../components/Display';

interface CalcTypes {
    clearDisplay: boolean;
    operation: string | null;
    values: number[];
    current: number;
}

function Calculator(): JSX.Element {
    const initialState = {
        clearDisplay: false,
        operation: null,
        values: [0, 0],
        current: 0,
    };

    const [displayValue, setDisplayValue] = useState<string>('0');
    const [calcProps, setCalcProps] = useState<CalcTypes>(initialState);

    const addDigit = (digit: string) => {
        const clearDisplay = displayValue === '0' || calcProps.clearDisplay;

        if (digit === '.' && !clearDisplay && displayValue.includes('.')) {
            return;
        }

        const currentValue = clearDisplay ? '' : displayValue;
        const newDisplayValue = currentValue + digit;

        setDisplayValue(newDisplayValue);
        setCalcProps({ ...calcProps, clearDisplay: false });

        if (digit !== '.') {
            const newValue = parseFloat(newDisplayValue);
            const values = [...calcProps.values];
            values[calcProps.current] = newValue;
            setCalcProps({ ...calcProps, values: values, clearDisplay: false });
        }
    };

    const clearMemory = () => {
        setDisplayValue('0');
        setCalcProps({ ...initialState });
    };

    const addOperation = (operation: string) => {
        if (calcProps.current === 0) {
            setCalcProps({
                ...calcProps,
                operation,
                current: 1,
                clearDisplay: true,
            });
        } else {
            const equals = operation === '=';
            const values = [...calcProps.values];

            try {
                values[0] = eval(
                    `${values[0]} ${calcProps.operation} ${values[1]}`,
                );
            } catch (error) {
                values[0] - calcProps.values[0];
            }

            values[1] = 0;
            setDisplayValue(values[0].toString());
            setCalcProps({
                ...calcProps,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            });
        }
    };

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
