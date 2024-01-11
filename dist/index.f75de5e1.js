AOS.init();
const dataAniversario = new Date("Jan 29, 2024 19:00:00");
const timeStampAniversario = dataAniversario.getTime();
const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteEvento = timeStampAniversario - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diaEmMs / horaEmMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horaEmMs / minutoEmMs);
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;
    if (distanciaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
