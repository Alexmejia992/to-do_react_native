import React from 'react';
import {Button, StyleSheet, View} from 'react-native'

const SendButton = () => {
    return ( 
        <View style={styles.container}>
            <Button 
            title= 'Add Task'
            color="#841584"
        />
        </View>
        
     );
}
 
const styles = StyleSheet.create({
    container: {
        margin: (0, 10, 10, 10),
        
    }
})
export default SendButton;