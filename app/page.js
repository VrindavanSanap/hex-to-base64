"use client"
import Image from 'next/image'
import React, { useState } from "react"
import {hex_to_base64, is_valid_hex} from "./crypto"
export default function Home() {
  const [hex_string, set_hex_string] = useState("");
  const [base64_string, set_base64_string] = useState("");
  function handle_click(){
    console.log("clicked")
    if (!is_valid_hex(hex_string)){
      alert("Invalid hex string")
      return 
    }
    set_base64_string(hex_to_base64(hex_string))
  }
  function handle_hex_string_change(e){
    set_hex_string(e.target.value) 
  }
  return (
    <main>
      <h1>Hex to base64</h1>
      <h3>Hex string</h3>
      <input value = {hex_string} onChange= {handle_hex_string_change}name="hex_string" />
      <button onClick = {handle_click}> Convert </button>

      <h3>Base64 string</h3>
      <p>{base64_string}</p>
    </main>
  )
}
