import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { type } from "@testing-library/user-event/dist/type";
// import Input from "./Input";
// import Textarea from "./Textarea";




function App(){
    const [name,setName]= useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    async function PostAllDetails(){
       const Item = {name,email,phone};
       console.log(Item);
       console.log(JSON.stringify(Item))
       fetch("http://127.0.0.1:8000/app/userDetails/",{
       method:"POST",
       mode: "no-cors",
       headers: {
                'Accept':'*/*'},
       body: JSON.stringify(Item)
})
       .then((res)=>{res.send("<h1>You have added this using post method</h1>");
    });
    }
    
    return <div>
        <Header />
        <br />
        <input type="text" 
            placeholder="Enter Your name"
            name="name" onChange={(event)=>setName(event.target.value)}
        />
        <br />
        <input type="email" 
            placeholder="Enter Your Email"
            name="email" onChange={(event)=>setEmail(event.target.value)}
        />
         <input type="text" 
            placeholder="Enter Your phone"
            name="phone" onChange={(event)=>setPhone(event.target.value)}
        />
      
        <button type="submit" onClick={PostAllDetails}>Add all Details</button>
        <br />
        <Footer />
    </div>
}

export default App;