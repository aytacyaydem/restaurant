import React, { useState,useEffect} from "react"
import {View,Text,StyleSheet,FlatList,Image} from "react-native"
import yelp from "../api/yelp"

const ResultsScreen = ({navigation}) => {
    const id = navigation.getParam("id")
    const [results,setResults] = useState(null)

    const getBusiness = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResults(response.data)
    }
    useEffect(() => {
        getBusiness(id)
    },[])

    if(!results){
        return null;
    }

    console.log(results.photos)

    return (
     <View>   
         <Text>{results.name}</Text>
         <FlatList data={results.photos} keyExtractor={photo => photo} renderItem={({item}) => {
             return <Image style={styles.imageStyle} source={{uri:item}} />
         }}/>
    </View>   
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        height:200,
        width:300
    }
})

export default ResultsScreen;