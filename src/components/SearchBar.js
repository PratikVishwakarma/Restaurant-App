import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return <View style={styles.viewContainer}>
        <Feather name='search' style={styles.iconStyle} />
        <TextInput
            style={styles.input}
            placeholder='Search'
            value={term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    viewContainer: {
        height: 50,
        padding: 4,
        fontSize: 16,
        marginTop: 8,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#F0EEEE',
        alignItems: 'center'
    },
    input: {
        padding: 4,
        fontSize: 18,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 12,
    }
})

export default SearchBar