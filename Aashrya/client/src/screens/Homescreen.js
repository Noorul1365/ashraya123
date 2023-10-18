import React , {userState , useEffect} from "react";
import axios from "axios";
function Homescreen(){
    
    useEffect(async()=> {
        try {
            const data = (await axios.get('/api/rooms/getallrooms')).data

            console.log(data)
        }
        catch(error){
            console.log(error);
        }
    }, [])
    return (
        <div>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          

        </div>
    )
}

export default Homescreen