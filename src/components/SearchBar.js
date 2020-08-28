import React from 'react'
import { View, Text,StyleSheet,TextInput } from 'react-native'
import { Feather} from '@expo/vector-icons'; 

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle} 
            placeholder="Search"
            placeholderTextColor="#777777"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"#C2C1C2",
        height:50,
        borderRadius:7,
        marginHorizontal:15,
        marginTop:10,
        flexDirection:"row",
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:17
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:5
    }
})

export default SearchBar;

