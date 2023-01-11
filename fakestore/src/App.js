import React from "react";
import { useEffect, useState } from "react";
import MediaCard from "./cards";

function App() {

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> json.map((e)=>{
        card(e.title, e.description, e.image)
  }))

},[])

   return <>
   {function card(title,description,image){
      <MediaCard title = {title} description={description} img = {image}/>
    }}

    </>
  
}
export default App;
