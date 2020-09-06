import {useState,useEffect} from 'react'
import API_KEY from './keys'

//this key tells google which search engine to use
const CONTEXT_KEY = "d99b440ed4cfca459"

//this hook wil be responsible for returning data 
export const useGoogleSearch = ( term ) => {

    const[data, setData]=useState(null)

    useEffect( ()=> {
        const fetchData = async ()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`

            )
            .then( response=> response.json())
            .then( result=> {
                setData(result)
            })
        }
        fetchData()
    }, [term] )

    //return data as object
    return { data }
    
}
