"use client"
import Image from 'next/image'
import React, { useState, useEffect} from "react"
import {hex_to_base64,base64_to_hex,  is_valid_hex, is_valid_base64} from "./crypto"
export default function Home() {
  const [hex_string, set_hex_string] = useState("");
  const [base64_string, set_base64_string] = useState("");
  const [reversed, set_reversed] = useState(false)
  useEffect(() => { 
    if (input_is_valid()) {
      update_result()
    }
  }, [hex_string, base64_string])
  function input_is_valid(){
    if(!reversed){
      return is_valid_hex(hex_string)
    }else{
      return is_valid_base64(base64_string)
    } 
  }
  function update_result() { 
    if(!reversed){
      set_base64_string(hex_to_base64(hex_string))
    }else{
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
        onInput={handle_input_change}
        onPaste={handle_input_change}
        name="input" />
      <p>{input_is_valid() ? "" : "Invalid Input" }</p>
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
