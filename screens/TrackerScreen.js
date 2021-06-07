import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Colors from './../configs/colors'
import { Icon } from 'react-native-elements'
import TransactionModal from './../components/TransactionModal'
import TransactionContext from './../context/TransactionContext'
import GlobalState from './../context/GlobalState'
import Total from './../components/Total';

export default function TrackerScreen() {

    const styles = StyleSheet.create({
        header: {
            marginVertical: 0,
            backgroundColor: Colors.green,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
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
            marginBottom: 30,
            marginTop: 10,
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
            marginBottom: 10
        },

        eachT: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: Colors.green,
            width: '90%',
            marginVertical: 12,
            paddingVertical: 20,
            paddingHorizontal: 5,
            borderRadius: 10
        },

        eachTRed: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: Colors.red,
            width: '90%',
            marginVertical: 12,
            paddingVertical: 20,
            paddingHorizontal: 5,
            borderRadius: 10
        },

        sep: {
            width: '30%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        eachTtxt: {
            color: Colors.white,
            fontSize: 16,

        },

        totalSub: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '55%',
            marginVertical: 5
        },

        totalSubTotal: {
            fontSize: 18,
            fontWeight: '700'
        },

        equal: {
            width: '45%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
    })

    const newStyles = StyleSheet.create({

        middle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        firstHeaderCont: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        firstHeader: {
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '85%',
            marginVertical: 40
        },

        tabCont: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-around",
            width: '85%'
        },

        tabContEachSelected: {
            width: '30%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.green,
            borderRadius: 20,
            padding: 10
        },
        tabContEachUnSelected: {
            width: '30%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            borderRadius: 20,
            padding: 10
        },

        tabContEachSelectedText: {
            color: Colors.white
        },
        tabContEachUnSelectedText: {
            color: 'gray'
        }
    })


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tabs, setTabs] = useState([{
        index: 1,
        name: 'All',
        selected: true
    },
    {
        index: 2,
        name: 'Expenses',
        selected: false
    },
    {
        index: 3,
        name: 'Gains',
        selected: false
    }])

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const selectChange = (index) => {
        //filter the selected object to update its selected attribute

        const elementsIndex = tabs.findIndex(element => element.index == index)
        console.log(elementsIndex);
        let newArray = [...tabs]

        newArray[elementsIndex] = { ...newArray[elementsIndex], selected: true }

        let updatedArray = newArray;

        let latestArray = [...updatedArray]

        for (let i = 0; i < latestArray.length; i++) {
            if(i !== elementsIndex) {
                latestArray[i] = { ...latestArray[i], selected: false}
            }
        }

        let finalArray = latestArray;
        console.log(finalArray)

        setTabs(finalArray)

    }
    console.log(tabs)

    return (
        <GlobalState>
            <TransactionContext.Consumer>
                {
                    context => (
                        <ScrollView>
                            <View style={newStyles.middle}>
                                <View style={styles.header}>
                                    <Text style={styles.headerText}>Expense Tracker</Text>
                                </View>
                                <View style={newStyles.firstHeaderCont}>
                                    <View style={newStyles.firstHeader}>
                                        <Total type="total" />
                                        <TouchableOpacity onPress={toggleModal}>
                                            <Icon
                                                name="pencil"
                                                type="font-awesome"
                                                color={Colors.green}
                                                size={24}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={newStyles.tabCont}>
                                    {
                                        tabs.map((tab, id) => {
                                            return (
                                                <TouchableOpacity
                                                    key={id}
                                                    onPress={selectChange.bind(this, tab.index)}
                                                    style={tab.selected ? newStyles.tabContEachSelected : newStyles.tabContEachUnSelected}>
                                                    <Text
                                                        style={tab.selected ? newStyles.tabContEachSelectedText : newStyles.tabContEachUnSelectedText}>{tab.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                                {/*<View style={{ padding: 20 }}>
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
                                        <Text style={{ color: Colors.white, fontWeight: '600', fontSize: 16 }}>Record a transaciton</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.main}>
                                    <Text style={styles.maintxt}>Current Balance</Text>
                                    <View style={styles.totalSub}>
                                        <View style={styles.equal}>
                                            <Text style={styles.totalSubTotal}>Total :</Text>
                                        </View>
                                        <View style={styles.equal}>
                                            <Total type="total" />
                                        </View>
                                    </View>
                                    <View style={styles.totalSub}>
                                        <View style={styles.equal}>
                                            <Text style={styles.totalSubTotal}>Expense :</Text>
                                        </View>
                                        <View style={styles.equal}>
                                            <Total type="negative" />
                                        </View>
                                    </View>
                                    <View style={styles.totalSub}>
                                        <View style={styles.equal}>
                                            <Text style={styles.totalSubTotal}>Profit :</Text>
                                        </View>
                                        <View style={styles.equal}>
                                            <Total type="positive" />
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.main}>
                                    <Text style={styles.maintxt}>Recorded Transactions</Text>
                                    {
                                        context.transactions.length > 0 ?
                                            context.transactions.map((transaction, index) => {
                                                return (
                                                    <View key={index} style={transaction.amount < 0 ? styles.eachTRed : styles.eachT}>
                                                        <View style={styles.sep}>
                                                            <Text style={styles.eachTtxt}>{transaction.name}</Text>
                                                        </View>
                                                        <View style={styles.sep}>
                                                            <Text style={styles.eachTtxt}>{transaction.amount}</Text>
                                                        </View>
                                                        <View style={styles.sep}>
                                                            <Icon
                                                                name="times"
                                                                type="font-awesome"
                                                                color={Colors.white}
                                                                size={24}
                                                            />
                                                        </View>
                                                    </View>
                                                )
                                            }) : (null)
                                    }
                                </View>
                            </View> */}
                            </View>

                            <TransactionModal
                                isVisible={isModalVisible}
                                toggleModal={toggleModal}
                                colors={Colors}
                            />


                        </ScrollView>
                    )
                }

            </TransactionContext.Consumer>
        </GlobalState>


    )
}
