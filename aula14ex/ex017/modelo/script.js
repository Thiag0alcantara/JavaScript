function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    
        if(num.value.length == 0){
            window.alert('[ERRO] Digite um número !')
        }else{
            let n = Number(num.value)
            let c = 0
            tab.innerHTML = ''
            while(c <= 10){
                let item = document.createElement('option')
                tab.appendChild(item)
                item.text = `${n} x ${c} = ${n*c}`
                c++
            }
        }
}