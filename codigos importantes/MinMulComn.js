function smallestCommons(arr) {
    const [min, max] = arr.sort((a,b)=> a - b)
    const numerDiv = max - min + 1;
    let upperBound = 1
    for (let i = min; i <= max; i++){
      upperBound *= i
    }
    for(let multipli = max; multipli <= upperBound; multipli += max){
      let divisorCont = 0
      for(let i = min; i <= max; i++){
        if(multipli % i === 0){
          divisorCont += 1
        }
      }
      if(divisorCont === numerDiv){
        return multipli
      }
    }
  
  }
  
  console.log(smallestCommons([1,5]));