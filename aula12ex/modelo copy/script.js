function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){ 
        //bom dia
        img.src = 'imagem/manha.png' 
        document.body.style.background = '#ecec51b3'
        
    }else if(hora >=12 && hora <= 18){
        // boa tarde
        img.src = 'imagem/tarde.png' 
        document.body.style.background ='#ff001ea9'

    }else{
        //boa noite
        img.src =  'imagem/noite.png'
        document.body.style.background ='#4a024a '
    }
        
    }