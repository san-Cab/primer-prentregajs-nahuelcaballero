let saldo = 7500
let dados = 3
let tirada = 0

function tirarDados() {
    let sale = Math.floor(Math.random() * 6) + 1
    console.log("Salio " + sale)
    return sale
}

function pedirApuesta() {
    let num = Number(prompt("Ingresa tú apuesta \n 0 para salir"))
    while (isNaN(num) || num < 0 || num > saldo) {
        alert("Dato invalido, Por favor ingrese un número")
        num = Number(prompt("Ingresa tú apuesta \n 0 para salir"))
    }
    return num
}


alert("Te damos la bienvenida a Dados, un juego de apuestas donde comenzas ganando vos porque te regalamos un bonus de bienvenida de $7500 pesos. Vamos a jugar!")
while (true && saldo > 0) {

    let apuesta = pedirApuesta()
    if (apuesta == 0) {
        console.log("Tu saldo es " + saldo + " Esperamos verte pronto!")
        break
    }
    saldo = saldo - apuesta
    let acumulador = 0
    tirada++
    console.log("Tirada Número " + tirada)
    for (let i = 0; i < dados; i++) {
        let numero = tirarDados()
        acumulador = acumulador + numero
    }
    console.log("Total dados " + acumulador)
    if (acumulador == 18) {
        ganancia = apuesta * 2
        saldo = saldo + ganancia
        console.log("Super!!, tu puntuacion fue la más alta, ganaste " + ganancia + " tu saldo es " + saldo)
    } else if (acumulador > 10) {
        ganancia = apuesta * 0.20
        saldo = saldo + ganancia + apuesta
        console.log("ganaste " + ganancia + " tu saldo es " + saldo)
    } else {
        perdida = apuesta * 0.10
        saldo = saldo + apuesta - perdida
        console.log("ups, perdiste " + perdida + " tu saldo es " + saldo)
    }

    if (tirada == 3) {
        alert("Nuevo logro: Desbloqueaste a Todo o Nada")
        opcion = Number(prompt("1 Doble o nada \n 2 No me animo bro!"))
        if (opcion == 1) {
            apuesta = pedirApuesta()
            let numero = tirarDados()
            if (numero > 4) {
                apuestaGanada = apuesta * 2
                saldo = saldo + apuesta
                console.log("salio " + numero + " ganaste " + apuesta)
                console.log("Ganaste campeón " + saldo)
            } else {
                saldo = saldo - apuesta
                console.log("Salio " + numero + " perdiste " + apuesta)
                console.log("Tu saldo es " + saldo)
            }
            tirada = 0
        } else if (opcion == 2) {
            tirada = 0
        }
    }

} 