import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'
import useResult from '../hooks/useResults'

const RestaurantDetailScreen = ({ navigation }) => {

    const [data, setData] = useState(null)
    const id = navigation.getParam('id')

    const getDetails = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setData(response.data)
        } catch (err) {
            setData(null)
        }
    }
    useEffect(() => {
        getDetails(id)
    }, [])
    return (
        <View style={styles.viewContainer}>
            <Text>Restaurant Detail</Text>
            {data ?
                <FlatList
                    keyExtractor={(key) => key}
                    data={data.photos}
                    renderItem={({ item }) => {
                        return <Image style={styles.imageStyle} source={{ uri: item }} />
                    }}
                />
                : <Text>No Record found</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageStyle: {
        margin: 8,
        width: 250,
        height: 120,
        borderRadius: 4
    }

})

export default RestaurantDetailScreen