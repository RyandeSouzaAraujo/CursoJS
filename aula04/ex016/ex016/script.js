function contar() { 
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('dados nao informado, tente novamente')
        }
    else{res.innerHTML = 'contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (i < f){
            for (var c = i ; c <= f ; c += p){
                seltab.innerHTML += ` ${c} >`
                }
        }
        else{
            for(var c = i ; c >= f ; c -= p){
            res.innerHTML += ` ${c} >`
            }
        }
    }}