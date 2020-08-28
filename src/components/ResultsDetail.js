import React from "react"
import {View,Text,StyleSheet,Image,ScrollView} from "react-native"

const ResultsDetail = ({result}) => {
 return (
     <View style={styles.container}>
         <Image style={styles.imageStyle} source={result.image_url ? {uri:result.image_url} : null} />
         <Text style={styles.textStyle}>{result.name}</Text>
         <View style={styles.additional}>
        <Text style={styles.additionalText}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
     </View>
 )
}

const styles = StyleSheet.create({
    imageStyle:{
        width:200,
        height:120,
        borderRadius:4,
        marginBottom:5
    },  
    container:{
        marginLeft:15,
        marginBottom:10
    },

    textStyle:{
        maxWidth:200,
        fontSize:16,
        fontWeight:"bold",
    },
    additional:{
        flex:1,
        justifyContent:"flex-end"
    },

})

export default ResultsDetail