const verificar = () => {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.vulue) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !!!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute("src", "homembebe.png")
            }else if (idade < 21){
                img.setAttribute("src", "homemjovem.png")
            }else if (idade < 50){
                img.setAttribute("src", "homemadulto.png")
            }else {
                img.setAttribute("src", "homemidoso.png")
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                img.setAttribute("src", "mulherbebe.png")
            }else if (idade < 21){
                img.setAttribute("src", "mulherjovem.png")
            }else if (idade < 50){
                img.setAttribute("src", "mulheradulta.png")
            }else {
                img.setAttribute("src", "mulheridosa.png")
            }
        }
        
        res.innerHTML = `Detectamos Genero ${genero} com ${idade} Anos`
        res.appendChild(img)
    }
}