function diferencaGols(time1, time2){
    let dif
    if(time1 > time2 || time1 == time2){
        dif = time1 - time2
    }
    else{
        dif = time2 - time1
    }
    switch (dif){
        case 0:
            return 'Empate';
        case 1:
        case 2:
        case 3:
            return 'Jogo Normal';
        default:
            return 'Goleada';
        
            
    }
}
console.log(diferencaGols(6, 2))