function contador(ini, fim){
    let arr = []
    if(ini < fim){
        for(ini; ini <= fim; ini++){
            arr.push(ini)
        }
    }
    else{
        for(ini; ini >= fim; ini--){
            arr.push(ini)
        }
    }
    return arr
}
console.log(contador(8,3))