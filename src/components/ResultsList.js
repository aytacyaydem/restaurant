import React from "react"
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from "react-native"
import ResultsDetail from "../components/ResultsDetail"
import {withNavigation} from "react-navigation"

const ResultsList = ({title,results,navigation}) => {

    if (!results.length){
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList horizontal data={results} keyExtractor={(result) => result.id} showsHorizontalScrollIndicator={false}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("Result",{id:item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
        }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle : {
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    },
    container:{
        borderBottomWidth:1,
        borderBottomColor:"gray",
    }
})

export default withNavigation(ResultsList)