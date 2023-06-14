import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Input from "./Input";
import { type } from "@testing-library/user-event/dist/type";



// import Input from "./Input";
// import Textarea from "./Textarea";




// function App(){
//     const [name,setName]= useState("");
//     const [email,setEmail]=useState("");
//     const [phone,setPhone]=useState("");
//     function PostAllDetails(){
//        const Item = {name,email,phone};
//        console.log(Item);
//        console.log(JSON.stringify(Item))
//        fetch("http://localhost:8000/app/userDetails/",{
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: 'no-cors',
//         dataType: "json",
//         contentType:'application/json',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//          },
//         body: JSON.stringify({
//             name :name,
//             email:email,
//             phone:phone
//         }),
        
// })
//        .then((res)=>{console.log("this is happend");
//     }, []);
//     }
let config = {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }}

export default function App() {
    const [name,setName]= useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    function gettingData(){
             try 
             {  axios.get('http://localhost:8000/app/userDetails/')
             .then((response)=>{console.log(response.data["students"][response.data["students"].length-1])})
            } catch (e) {
             alert(e)
            }}
              

        
    
    const onSubmit = async (e) => {
    e.preventDefault()
    const post = { name:name,email:email,phone:phone }
    console.log(post);
    try {
      const res = await axios.post('http://localhost:8000/app/userDetails/', post , config);
      e.send("<h1>You have entered data successfully.</h1>")
    } catch (e) {
      alert(e)
    }
  }


    return <div>
        <Header />
        <br />
        <form onSubmit={onSubmit}>
        <input type="text" 
            placeholder="Enter Your name" 
            name="name" onChange={(event)=>setName(event.target.value)} value={name}
        />
        <br />
        <input type="email" 
            placeholder="Enter Your Email"
            name="email" onChange={(event)=>setEmail(event.target.value)} value={email}
        />
        <br />
         <input type="text" 
            placeholder="Enter Your phone"
            name="phone" onChange={(event)=>setPhone(event.target.value)} value={phone}
        />
        <br />
      
        <button type="submit">Add all Details</button>
        </form>
        <br />
        <button onClick={gettingData}>Show all</button>
        <Footer />

    </div>
}

