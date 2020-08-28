import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import RestaurantItem from '../components/RestaurantItem'

const RestaurantsList = ({ title, restaurants, navigation }) => {
    if (!restaurants.length) {
        return null
    }
    return <View style={styles.viewContainer}>
        <Text style={styles.headingStyle}>{title}</Text>
        <FlatList
            data={restaurants}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RestaurantDetail', { id: item.id })}>
                        <RestaurantItem item={item} />
                    </TouchableOpacity>
                )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 12
    },
    textStyle: {
        marginHorizontal: 4,
        fontSize: 12
    },
    viewContainer: {
        marginBottom: 8
    },

})

export default withNavigation(RestaurantsList)