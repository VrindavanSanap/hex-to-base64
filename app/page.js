"use client"
import Image from 'next/image'
import React, { useState } from "react"
import {hex_to_base64,base64_to_hex,  is_valid_hex, is_valid_base64} from "./crypto"
export default function Home() {
  const [hex_string, set_hex_string] = useState("");
  const [base64_string, set_base64_string] = useState("");
  const [reversed, set_reversed] = useState(false)
  function handle_convert_button(){
    console.log("clicked")
    
    if (!reversed){
      if (!is_valid_hex(hex_string)){
        alert("Invalid hex string")
        return 
      }
      set_base64_string(hex_to_base64(hex_string))
    }else{
      if (!is_valid_base64(base64_string)){
        alert("Invalid base64 string")
        return 
      }

      set_hex_string(base64_to_hex(base64_string))
    }
  }
  function handle_input_change(e){
    if(!reversed){    
      set_hex_string(e.target.value) 
    }else{

      set_base64_string(e.target.value)
      }
  }
  function handle_reverse_button(){
    set_reversed(!reversed)
    
  }
  return (
    <main>
      <h1>
        {!reversed ? "Hex to Base 64":"Base64 to Hex"}
      </h1>
      <input value = {!reversed ? hex_string : base64_string} 
        onChange= {handle_input_change} name="input" />
      <button onClick = {handle_convert_button}> Convert </button>
      <h3>
        {!reversed ? "Base64 String" : "Hex String" }
      </h3>
      <p>
        {!reversed ? base64_string : hex_string}
      </p>
      <button onClick = {handle_reverse_button}>Reverse </button>
    </main>
  )
}
