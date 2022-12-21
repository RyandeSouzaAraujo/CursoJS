function aproveitamento(nota1, nota2){
    let m = (nota1 + nota2) / 2
    if(m < 5){
        return 'F'
    }
    else if(m < 5.9){
        return 'E'
    }
    else if(m < 6.9){
        return 'D'
    }
    else if(m < 7.9){
        return 'C'
    }
    else if(m < 8.9){
        return 'B'
    }
    else{
        return 'A'
    }
}
console.log(aproveitamento(9, 9))