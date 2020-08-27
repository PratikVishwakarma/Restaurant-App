import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import RestaurantsList from '../components/RestaurantsList'
import useResult from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchAPI, results, errorMessage] = useResult()

    const filterResultsByPrice = (price) => {
        return results.filter(item => {
            return item.price === price
        })
    }
    return (
        <View style={styles.viewContainer}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            <Text>We have found {results.length} of results </Text>
            {errorMessage ? <Text>{errorMessage}</Text> : <View>
                <RestaurantsList
                    title='Cost Effective'
                    restaurants={filterResultsByPrice('$')}
                />
                <RestaurantsList
                    title='Bit Pricier'
                    restaurants={filterResultsByPrice('$$')}
                />
                <RestaurantsList
                    title='Big Spender'
                    restaurants={filterResultsByPrice('$$$')}
                />
                 <RestaurantsList
                    title='Primium Spender'
                    restaurants={filterResultsByPrice('$$$$')}
                />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        padding: 16,
        flex: 1,
        backgroundColor: 'white'
    }
})

export default SearchScreen