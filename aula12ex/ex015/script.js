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
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')
        if (genero_masculino.checked) {
            var genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagem/crianca-h.png')
            }else if(idade < 25){
                img.setAttribute('src','imagem/jovemH.jpg')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src','imagem/adultoH.jpg')
                //Adulto

            }else {
                //idoso
                img.setAttribute('src','imagem/idosoH.jpg')

            }

            
            
        } else if (genero_feminino.checked) {
            var genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagem/criancaM.jpg')
            }else if(idade < 25){
                img.setAttribute('src','imagem/jovemM.jpg')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src','imagem/adultoM.jpg')
                //Adulto

            }else {
                //idoso
                img.setAttribute('src','imagem/idosaM.jpg')
            }

              
        }
            
        

        
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
        
            
            
        
        
        
        
        

    
