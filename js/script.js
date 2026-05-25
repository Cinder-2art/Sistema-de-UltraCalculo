/**
 * SMILEOS CORE INTERACTIVE MATHEMATICS LOGIC
 * Cumplimiento estricto: document.getElementById sin vectores.
 */

let musicaIniciada = false;

function inicializarAudio() {
    // Listo para enganchar interacciones físicas iniciales de red
}

function alternarMusica() {
    const musica = document.getElementById("sndMúsica");
    const icono = document.getElementById("iconoAudio");
    
    if (!musicaIniciada) {
        musica.play().catch(e => console.log("Interacción requerida para reproducir."));
        icono.className = "fa-solid fa-volume-high";
        musicaIniciada = true;
    } else {
        musica.pause();
        icono.className = "fa-solid fa-volume-xmark";
        musicaIniciada = false;
    }
}

// =========================================================================
// MÓDULO 1: FIBONACCI (AHORRO PROGRESIVO)
// =========================================================================
function calcularPlanAhorro() {
    const cantidadMeses = parseInt(document.getElementById("cantidadFibo").value);
    const contenedor = document.getElementById("resultadoFibo");

    let a = 0; let b = 1; let c;
    let totalAhorrado = 0; 

    let htmlBuilder = `<div class="p5-fibo-container">`;

    for (let i = 1; i <= cantidadMeses; i++) {
        let ahorroDelMes;
        if (i === 1) {
            ahorroDelMes = b;
        } else {
            c = a + b; a = b; b = c;
            ahorroDelMes = c;
        }
        totalAhorrado += ahorroDelMes;

        htmlBuilder += `
            <div class="p5-fibo-stripe-item">
                <div class="p5-fibo-row-top">
                    <span>MES_0${i}</span>
                    <span class="p5-fibo-val">Bs. ${ahorroDelMes}</span>
                </div>
                <div class="p5-fibo-bar-visual" style="width: ${Math.min(ahorroDelMes * 4, 100)}%;"></div>
                <p class="p5-fibo-desc">PROGRESIÓN DE APORTE ACTUAL EN CUENTA: Bs. ${totalAhorrado}</p>
            </div>`;
    }

    htmlBuilder += `
        <div class="p5-prime-alert">
            <p style="color: var(--os-gold);">[LOG] EXTRACCIÓN TOTAL CALCULADA DEL PLAN: Bs. ${totalAhorrado}</p>
            <p style="font-size: 11px; margin-top: 4px; color: #888;"><strong>Conclusión:</strong> El uso de una escala aritmética basada en la inercia controlada distribuye equitativamente las exigencias monetarias de la unidad central.</p>
        </div>`;

    htmlBuilder += `</div>`;
    contenedor.innerHTML = htmlBuilder;
}

// =========================================================================
// MÓDULO 2: NÚMEROS PRIMOS (SEGURIDAD)
// =========================================================================
function analizarSeguridadServidor() {
    const numero = parseInt(document.getElementById("codigoServidor").value);
    const contenedor = document.getElementById("resultadoPrimos");

    let contadorDivisores = 0;
    let registroTexto = "";

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contadorDivisores++;
            registroTexto += (registroTexto === "") ? `${i}` : `, ${i}`;
        }
    }

    const esPrimo = (contadorDivisores === 2);
    let htmlOutput = "";

    if (esPrimo) {
        htmlOutput = `
            <div class="p5-prime-alert is-prime">
                <p>[OK] TOKEN DE ACCESO AUTORIZADO // PARÁMETRO PRIMO</p>
                <p style="font-size: 11px; color: #aaa; margin-top: 4px;">Análisis estructural sobre el factor ${numero}. Divisores hallados en rango lineal: [ ${registroTexto} ].</p>
                <p style="font-size: 11px; margin-top: 4px; color: #22aa22;"><strong>Conclusión:</strong> Al poseer una configuración rígida libre de factores compuestos, el token se declara impenetrable por algoritmos de fuerza de diccionario.</p>
            </div>`;
    } else {
        htmlOutput = `
            <div class="p5-prime-alert">
                <p>[WARN] ALERTA DE COMPOSICIÓN // INFRAESTRUCTURA INSEGURA</p>
                <p style="font-size: 11px; color: #aaa; margin-top: 4px;">Análisis estructural sobre el factor ${numero}. Se detectaron ${contadorDivisores} fracturas lógicas: [ ${registroTexto} ].</p>
                <p style="font-size: 11px; margin-top: 4px; color: #ff3333;"><strong>Conclusión:</strong> Firma vulnerable. La redundancia aritmética facilita su descomposición predictiva elemental en microsegundos.</p>
            </div>`;
    }

    contenedor.innerHTML = htmlOutput;
}

// =========================================================================
// MÓDULO 3: COMBINADO (SMART CITY SIMULTÁNEA)
// =========================================================================
function simularSmartCity() {
    const totalDistritos = parseInt(document.getElementById("cantidadDistritos").value);
    const contenedor = document.getElementById("resultadoCiudad");

    let a = 0; let b = 1;
    let cityGridHTML = `<div class="p5-city-grid">`;

    function comprobarPrimalidad(num) {
        if (num < 2) return false;
        for (let x = 2; x <= Math.sqrt(num); x++) {
            if (num % x === 0) return false;
        }
        return true;
    }

    for (let i = 1; i <= totalDistritos; i++) {
        let escalaDensidad;
        if (i === 1) {
            escalaDensidad = b;
        } else {
            let c = a + b; a = b; b = c;
            escalaDensidad = c;
        }

        const esNodoSeguro = comprobarPrimalidad(escalaDensidad);
        const claseNodo = esNodoSeguro ? "p5-city-node secure-node" : "p5-city-node";

        cityGridHTML += `
            <div class="${claseNodo}">
                <div class="p5-node-tag">${esNodoSeguro ? '[ CRYPTO_NODE ]' : '[ INFRA_GRID ]'}</div>
                <div>SEC_0${i} // CAP: ${escalaDensidad}k</div>
            </div>`;
    }

    cityGridHTML += `</div>`;
    contenedor.innerHTML = cityGridHTML;
}