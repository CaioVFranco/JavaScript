function carregar() {
    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hr = data.getHours()
    
    msg.innerHTML = `Agora são ${hr} horas.`
    if (hr >= 12 && hr < 18) {
        img.src = 'modelo/tarde.png'
        document.body.style.background = '#83674f'
    } else if (hr >= 18 && hr < 24) {
        img.src = 'modelo/noite.png'
        document.body.style.background = '#1a2239'
    } else {
        img.src = 'modelo/manha.png'
        document.body.style.background = '#e0d6b3'
    }
}




