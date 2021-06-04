import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Colors from './../configs/colors'
import { Icon } from 'react-native-elements'
import TransactionModal from './../components/TransactionModal'
import {TransactionProvider, TransactionContext} from '../TransactionContext'

export default function TrackerScreen() {



    const styles = StyleSheet.create({
        header: {
            marginVertical: 0,
            backgroundColor: Colors.green,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        headerText: {
            color: Colors.white,
            fontSize: 26,
            fontWeight: '700',

        },

        buttonContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        btnStyle: {
            borderRadius: 5,
            backgroundColor: Colors.green,
            padding: 15,
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'

        },

        main: {
            height: 'auto',
            marginVertical: 30,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        },

        maintxt: {
            fontSize: 30,
            fontWeight: '700',
            color: 'black',
            textDecorationLine: 'underline',
        },
    })
    const value = useContext(TransactionContext)

    const [isModalVisible, setIsModalVisible] = useState(false);


    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

   

    return (
        
            
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Expense Tracker</Text>
                        </View>
                        <View style={{ padding: 20 }}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={toggleModal}
                                    activeOpacity={0.8}
                                    style={styles.btnStyle}>
                                    <Icon
                                        name="plus"
                                        type="font-awesome"
                                        color={Colors.white}
                                        size={24}
                                    />
                                    <Text style={{ color: Colors.white, fontWeight: '600', fontSize: 16 }}>Record a transaction</Text>
                                </TouchableOpacity>
                            </View>
                    
                            <View style={styles.main}>
                                <Text style={styles.maintxt}>Recorded Transactions</Text>
                                {
                                    transaction.length > 0 ?
                                        transaction.map((transaction) => {
                                            return (
                                                <View>
                                                    <Text>{transaction.amount}</Text>
                                                    <Text>Hehe</Text>
                                                </View>
                                            )
                                        }) : (null)
                                }
                            </View>
                        </View>

                        <TransactionModal
                            isVisible={isModalVisible}
                            toggleModal={toggleModal}
                            colors={Colors}
                            saveTransaction={() => console.log(hello)}
                        />


                    </ScrollView>

       
    )
}
