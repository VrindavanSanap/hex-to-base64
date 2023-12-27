export function is_valid_hex(string){
  const hex_regex= /^[0-9A-F]+$/i;
  return hex_regex.test(string);
}

export function hex_to_binary(hex_string) {
    let binary_string = "";
    for (let i = 0; i < hex_string.length; i += 2) {
        let byte = parseInt(hex_string.slice(i, i + 2), 16)
        let byte_string = byte.toString(2)
        byte_string = "0".repeat(8 - byte_string.length) + byte_string
        binary_string+= byte_string

    }
    return binary_string 
}

export function is_valid_base64(str) {
    while(str.length % 4 != 0){
        str += "="
    }
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  return base64Regex.test(str);

}

export function base64_to_binary(base64_string){
  const binary_string = atob(base64_string);
  const binary_data = [];
  for (let i = 0; i < binary_string.length; i++) {
    binary_data.push(binary_string.charCodeAt(i).toString(2).padStart(8, '0'));
  }
  const binary_result = binary_data.join('');
  return binary_result;
}

export function hex_to_base64(hex_string) {
    const base64_chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let binary_string = hex_to_binary(hex_string)
    let base64_string= ""
    while (binary_string.length % 6 != 0) {
        binary_string += "0"
    }
    // console.log(`binaryString: ${binary_string}`)
    for (let i = 0; i < binary_string.length; i += 6) {
        let index = parseInt(binary_string.slice(i, i + 6), 2)
        base64_string += base64_chars[index]
    }
    console.log()
    while (base64_string.length % 4 != 0) {
        base64_string+= "="
    }
    return base64_string 
}

export function base64_to_hex(base64_string){
    const hex_chars= "0123456789abcdef";
    let binary_string = base64_to_binary(base64_string)
    let hex_string = ""
    while (binary_string.length % 4 != 0) {
        binary_string += "0"
    }
    for (let i = 0; i < binary_string.length; i += 4) {
        let index = parseInt(binary_string.slice(i, i + 4), 2)
        hex_string += hex_chars[index]
    }
    return hex_string 
}


