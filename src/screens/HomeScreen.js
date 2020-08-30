import React,{useState} from 'react'
import { ScrollView, Text,StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const HomeScreen = ({navigation}) => {

    const [term,setTerm] = useState("");
    const [searchApi,results,errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
        <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={() => searchApi(term)}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light"/>
        {errorMessage ? <Text>{errorMessage}</Text>:null}
        <ResultsList results={filterResultsByPrice("₺")} title="Ekonomik"/>
        <ResultsList results={filterResultsByPrice("₺₺")} title="Orta Halli"/>
        <ResultsList results={filterResultsByPrice("₺₺₺")} title="Lüks"/>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default HomeScreen

