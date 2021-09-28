import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';


interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
    return (
        <View
            style={[
                styles.fabLocation , 
                ( position === 'bl' ) ? styles.left : styles.right
        
            ]}
        >
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('black', false, 30)}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}> {title} </Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left:{
        position: 'absolute',
        bottom: 25,
        left: 30,
    },
    right:{
        right: 30,
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    
        elevation: 4,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',

    }
})

