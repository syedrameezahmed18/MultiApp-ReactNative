import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Card(props) {

    const styles = StyleSheet.create({
        outerCard: {
            width: '60%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 20,
            backgroundColor: props.backColor || 'pink',
            paddingHorizontal: 20,
            width: 200,
            height: 150,
            paddingVertical: 10,
            borderRadius: 5
        },
        innerCard: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 60,
            marginVertical: 10
        },
        mainTxt: {
            fontWeight: '700',
            fontSize: 20,
            color: props.color
        },
        mainTxtCount: {
            fontWeight: '700',
            fontSize: 18,
            color: props.color
        }
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <View style={styles.outerCard}>
            <Icon
                name= {props.iconName}
                type= {props.iconSeries}
                color= {props.color}
                size={46}
            />
            <View style={styles.innerCard}>
                <Text style={styles.mainTxt}>{props.cardTitle}</Text>
                <Text style={styles.mainTxtCount}>{numberWithCommas(props?.cardValue) || 0 }</Text>
            </View>
        </View>
    )
}
