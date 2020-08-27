import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

const RestaurantsList = ({ title, restaurants }) => {

    return <View style={styles.viewContainer}>
        <Text style={styles.headingStyle}>{title}</Text>
        <Text style={styles.headingStyle}>{restaurants.length}</Text>
        <FlatList
            data={restaurants}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
            horizontal
        />
    </View>
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textStyle: {
        marginHorizontal: 4,
        fontSize: 12
    },
    viewContainer: {

    },

})

export default RestaurantsList