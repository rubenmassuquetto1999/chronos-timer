const displayTempo = document.getElementById("tempo");
const displayMilissegundos = document.getElementById("milissegundos");

const btnIniciar = document.getElementById("btn-iniciar");
const btnResetar = document.getElementById("btn-resetar");
const btnVoltas = document.getElementById("btn-voltas");
const listaVoltas = document.getElementById("lista-voltas");

const caixaHistorico = document.querySelector(".historico-voltas");

let tempoDecorrido = 0;
let intervalo;
let rodando = false;
let tempoInicio = 0;

btnIniciar.addEventListener("click", function () {
    if (rodando === false) {
        tempoInicio = Date.now() - tempoDecorrido;
        intervalo = setInterval(atualizarDisplay, 10);
        rodando = true;

        btnIniciar.innerHTML = "Pausar";
        btnIniciar.style.backgroundColor = "#ff9f0a";
        btnIniciar.style.boxShadow = "0 0 30px rgba(255, 159, 10, 0.3)";
    } else {
        clearInterval(intervalo);
        rodando = false;

        btnIniciar.innerHTML = "Retomar";
        btnIniciar.style.backgroundColor = "var(--cor-destaque)";
        btnIniciar.style.boxShadow = "0 0 30px rgba(66, 227, 85, 0.3)";
    }

});

function atualizarDisplay() {
    tempoDecorrido = Date.now() - tempoInicio;

    let horas = Math.floor(tempoDecorrido / 3600000);
    let minutos = Math.floor((tempoDecorrido % 3600000) / 60000);
    let segundos = Math.floor((tempoDecorrido % 60000) / 1000);
    let milissegundos = Math.floor((tempoDecorrido % 1000) / 10);

    let h = horas.toString().padStart(2, "0");
    let m = minutos.toString().padStart(2, "0");
    let s = segundos.toString().padStart(2, "0");
    let ms = milissegundos.toString().padStart(2, "0");

    displayTempo.innerHTML = `${h}:${m}:${s}`;
    displayMilissegundos.innerHTML = `.${ms}`;
}

let contadorVoltas = 0;

btnVoltas.addEventListener("click", function () {
    if (tempoDecorrido > 0 && rodando === true) {
        caixaHistorico.style.display = "block";

        contadorVoltas++;

        let tempoAtual = displayTempo.innerHTML + displayMilissegundos.innerHTML;

        const novaVolta = document.createElement("li");

        novaVolta.style.display = "flex";
        novaVolta.style.justifyContent = "space-between";
        novaVolta.style.padding = "10px";
        novaVolta.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";

        novaVolta.innerHTML = `
            <span style="color: var(--texto-secundario); font-weight: bold; font-size: 0.8rem;">
                Volta ${contadorVoltas.toString().padStart(2, "0")}
            </span>
            <span style="font-weight: bold; font-variant-numeric: tabular-nums; ">
                ${tempoAtual}
            </span>
        `;

        listaVoltas.prepend(novaVolta);
    }
});

btnResetar.addEventListener("click", function () {
    clearInterval(intervalo);
    tempoDecorrido = 0;
    rodando = false;
    contadorVoltas = 0;

    displayTempo.innerHTML = "00:00:00";
    displayMilissegundos.innerHTML = ".00";
    listaVoltas.innerHTML = "";

    btnIniciar.innerHTML = "Iniciar";
    btnIniciar.style.backgroundColor = "var(--cor-destaque)";
    btnIniciar.style.boxShadow = "0 0 30px rgba(66, 227, 85, 0.3)";

    caixaHistorico.style.display = "none";
});