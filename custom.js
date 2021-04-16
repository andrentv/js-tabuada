function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('sel')
    if (num.value.length == 0) {
        window.alert(`Por favor, digite um número!`) 
    } else {
        let n = Number(num.value)
        tab.innerText = ``
       /* let c = 1
        tab.innerText = ``
        while (c <= 10) {
            let item = document.createElement('option')
            item.text =  `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            //document.option.style.text.align = 'justify'
            c++
        } */
        for (c = 1; c <= 10;(c++) * n) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` //Detalhe de tabela para PHP
            tab.appendChild(item)
        }
    }

    
    
}