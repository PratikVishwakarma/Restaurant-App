import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const RestaurantItem = ({ item }) => {

    return <View style={styles.viewContainer}>
        <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
        <Text style={styles.nameStyle}>{item.name}</Text>
        <Text style={styles.subTextStyle}>{item.rating} Stars, {item.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    viewContainer: {
        marginEnd: 10,
        marginBottom: 12,
        marginHorizontal: 15
    },
    nameStyle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    subTextStyle: {
        fontSize: 16,
        // color: 'gray'
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4
    }

})

export default RestaurantItem