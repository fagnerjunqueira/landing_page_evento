AOS.init();

const dataEvento = new Date("Dec 12, 2023 20:00:00")
const timeStampEvento =  dataEvento.getTime()

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteEvento = timeStampEvento - timeStampAtual

    const diasAteEvento = Math.floor(distanciaAteEvento / (1000 * 60 * 60 * 24))
    const horasAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60 * 60)) / (1000 * 60))
    const segundosAteEvento = Math.floor((distanciaAteEvento % (1000 * 60)) / (1000))

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`
    
    if (distanciaAteEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = "(Evento expiradoo)"
    }
}, 1000)