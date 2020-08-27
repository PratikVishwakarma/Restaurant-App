import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'san jose',
                    limit: 50
                }
            })
            setResults(response.data.businesses)
            setErrorMessage('')
        }
        catch (e) {
            setErrorMessage('Something went wrong')
        }
    }
    // Blank array means call the arrow function once even after multiple rendring 
    useEffect(() => {
        searchAPI('pasta')
    }, [])
    return [searchAPI, results, errorMessage]
}