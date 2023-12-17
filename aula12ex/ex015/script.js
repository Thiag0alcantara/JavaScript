function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')
        if (genero_masculino.checked) {
            var genero = 'Homem'
        } else if (genero_feminino.checked) {
            var genero = 'Mulher'
        }
        
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
        
            
            
        
        
        
        
        

    
