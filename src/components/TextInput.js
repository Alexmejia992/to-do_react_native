import React, { useState } from 'react';
import {TextInput,View, StyleSheet, Text} from 'react-native'

const InputTasks = () => {
    const [text, onChangeText] = React.useState(null)
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="useless placeholder"
                value={text}
                multiline={true}
            >   
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
         
    },
    input: {
        height: 80,
        width: '80%',
        margin: 12,
        borderRadius: 20,
        borderWidth:1,
        textAlign: 'center',
        padding: 20,
        fontSize: 15,
    }
})

export default InputTasks