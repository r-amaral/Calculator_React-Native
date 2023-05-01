import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Button from '../components/Button';
import Display from '../components/Display';

function Calculator(): JSX.Element {
    const [displayValue, setDisplayValue] = React.useState<string>('0');

    return (
        <SafeAreaView style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label="AC" />
                <Button label="/" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="*" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" />
                <Button label="0" />
                <Button label="." />
                <Button label="=" />
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
