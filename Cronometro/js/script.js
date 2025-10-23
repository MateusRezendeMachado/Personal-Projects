window.addEventListener("DOMContentLoaded", function () {

    let btnPlay = document.getElementById("btnPlay");
    let btnPause = document.getElementById("btnPause");
    let btnStop = document.getElementById("btnStop");
    let minutosInterface = document.getElementById("minutos");
    let segundosInterface = document.getElementById("segundos");
    let horasInterface = document.getElementById("horas")

    let minutos;
    let segundos;
    let horas;
    let idCronometro;

    btnPlay.addEventListener("click", function () {

        idCronometro = setInterval(play, 1000);
        btnPlay.disabled = true;
        btnPause.disabled = false;
        btnStop.disabled = false;

    });

    btnPause.addEventListener("click", function () {
        clearInterval(idCronometro)
        btnPlay.disabled = false;
        btnPause.disabled = true;
        btnStop.disabled = false;
    })

    btnStop.addEventListener("click", function () {
        zerarCronometro();
        btnPlay.disabled = false;
        btnPause.disabled = true;
        btnStop.disabled = true;
    })


    function zerarCronometro() {
        clearInterval(idCronometro);
        minutos = segundos = horas = 0;
        minutosInterface.innerHTML = '00'
        segundosInterface.innerHTML = '00'
        horasInterface.innerHTML = '00'
    }

    function main() {
        zerarCronometro();
    }

    function play() {
        segundos++
        if (segundos >= 0 && segundos <= 9) segundos = '0' + segundos;
        if (segundos == 60) {
            minutos++;
            if (minutos >= 0 && minutos <= 9) minutos = '0' + minutos;
            minutosInterface.innerHTML = minutos;
            if (minutos == 60) {
                horas++
                minutos = 0;
                if (horas >= 0 && horas <= 9) horas = '0' + horas;
                horasInterface.innerHTML = horas;
            }
            segundos = 0;
        }
        segundosInterface.innerHTML = segundos
    }



    main();
})