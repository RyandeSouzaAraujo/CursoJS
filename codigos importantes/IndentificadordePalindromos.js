function palindrome(str) {
    let contrario = ''
    str = str.replace(/[\W_]/g, '').toLowerCase()
    for(let i = str.length ; i > 0; i--){
      contrario += str[i - 1]
      
    }
    return contrario == str
  }
  
  console.log(palindrome("eye"));