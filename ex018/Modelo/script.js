var vetor = []
var num = document.getElementById('num')
var sel = document.getElementById('sele')

function analizar(){
    if(vetor.indexOf(Number(num.value)) != -1 ||1 > Number(num.value) ||Number(num.value) > 100){
        window.alert('Erro ao adcionar')
    }
    else{
        var opt = document.createElement('option')
        vetor.push(Number(num.value))
        opt.text = `valor ${Number(num.value)} adcionado`
        sel.appendChild(opt)
    
    num.focus()
    num.value = ''
}
    
}
function finalizar(){
    var res = document.getElementById('res')
    res.innerHTML = ''
    if(vetor.length == 0){
        window.alert = 'digite algo'
    }
    else{
        var tot = vetor.length
        var ma = vetor[0]
        var me = vetor[0]
        var so = 0
        for(var pos in vetor){
            so += vetor[pos]
            if(vetor[pos] > ma){
                ma = vetor[pos]
            }else if(vetor[pos] < me){
                me = vetor[pos]
                }
            }
       
        }

        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${ma}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${me}</p>`
        res.innerHTML += `<p>Somando todos valores temos ${so}</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${so/tot}</p>`
    }
