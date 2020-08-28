import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
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
            {errorMessage ? <Text>{errorMessage}</Text> :
                <ScrollView>
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
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default SearchScreen