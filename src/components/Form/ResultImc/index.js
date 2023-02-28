import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function ResultImc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.message}>{props.messageResultImc}</Text>
            <Text style={styles.imcValue}>{props.resultImc}</Text>
        </View>
    )
}