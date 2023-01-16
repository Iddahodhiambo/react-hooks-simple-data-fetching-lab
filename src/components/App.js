// create your App component here
import React,{useState,useEffect} from "react";

function App() {

    const [Image, setDogImage] = useState(null)
    
    useEffect (function() {
        fetch("https://dog.ceo/api/breeds/image/random").then((response)=> response.json()).then((data) => {
        setDogImage(data.message)
        })

},[])
if(!Image){
    return <p>Loading...</p>
}

     return (
        <div>
            
            <img src={Image} alt="A Random Dog" />
        </div>
     )
}
export default App;
