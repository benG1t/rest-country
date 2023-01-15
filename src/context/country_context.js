import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './country_reducer'

const url = 'https://restcountries.com/v3.1/all'

const initialState = {
  all_country: [],
}
const CountryContext = React.createContext()

export const CountryProvider = ({ children }) => {
  console.log('ben')
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCountries = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  useEffect(() => {
    fetchCountries(url)
  }, [])

  return (
    <CountryContext.Provider value={'value'}>
      {children}
    </CountryContext.Provider>
  )
}

export const useCountryContext = () => {
  return useContext(CountryContext)
}
