function calcular(){
    var num = document.getElementById('txtnum')
    var n = Number(num.value)
    var tab = document.getElementById('seltab')
    tab.innerHTML = ''
    for(var c = 1 ; c <= 10 ; c++){
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        tab.appendChild(item)
    }
}