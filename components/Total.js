import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import TransactionContext from './../context/TransactionContext'

export default function Total(props) {

    const styles = StyleSheet.create({
        text: {
            fontSize:18,
            fontWeight: '700'
        }
    })

    const context = useContext(TransactionContext);

    const totalVal = () => {
        let totalV = context.transactions.reduce((acc, val) => acc + val.amount, 0)
        return totalV
    }

    const totalExp = () => {
        let totalV = context.transactions.reduce(((acc, val) => val.amount < 0 ? acc+val.amount: acc),0 )
        return totalV
    }

    const totalAdd = () => {
        let totalV = context.transactions.reduce(((acc, val) => val.amount >= 0 ? Math.abs(acc+val.amount): acc),0 )
        return totalV
    }

    console.log(props.type);

    return (
        <View>
            <Text style={styles.text}>{props.type === "total" ? totalVal() :
                   props.type === "negative" ? totalExp() :
                   props.type === "positive" ? totalAdd():(null)}</Text>
        </View>
    )
}
