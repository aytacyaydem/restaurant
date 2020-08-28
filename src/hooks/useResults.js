import {useEffect,useState} from "react"
import yelp from "../api/yelp"

export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState("")

    const searchApi = async (searchTerm) => {
        console.log("Api çalıştı")
        try {
        const response = await yelp.get("/search",{
            params:{
                limit:50,
                term:searchTerm,
                location:"istanbul"
            }
        })
        setResults(response.data.businesses)
        }
        catch(err){
           setErrorMessage("Something went wrong")
        }
    }

    useEffect(() => {
        searchApi("baklava");
    },[])

    return [searchApi,results,errorMessage]
}
