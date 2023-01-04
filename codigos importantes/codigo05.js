function spinalCase(str) {
    var regex = /\s+|_+/g;
 
   // Replace low-upper case to low-space-uppercase
   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
 
   // Replace space and underscore with -
   return str.replace(regex, "-").toLowerCase();
 }
 
 console.log(spinalCase('This Is Spinal Tap'));

//Para transformar um string eu string de letra minusculas separadas por hifén