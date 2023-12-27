function contar(){
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = `contando: <br>`
        let i = Number(inicio.value) 
        let f= Number(fim.value)
        let p= Number(passo.value)
        if(p <= 0 ){
            alert('passo invalido!Considerando PASSO 1')
            p = 1
        }
        
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML +=` ${c}  \u{1f449}`
            }

        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML +=` ${c}  \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        
    }
        
}