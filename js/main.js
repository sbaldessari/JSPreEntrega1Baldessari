const colores = ["Naranja", "Amarillo", "Verde", "Azul", "Rojo", "Gris", "Negro", "Blanco"]
let palabraElegida

let validacion = true
let chances = 5
let opciones = 0

do{

    do{
        opciones = prompt(`Bienvenido a Ahorcado, Jugar?: \n
        1- SI\n
        0- NO`)        

        if(isNaN(opciones) || opciones == ""){
            validacion = false
        }else{
            if(opciones > 1 || opciones < 0){
                validacion = false
            }
            else{
                validacion = true
            }
        }        

        if(!validacion){
            alert(`Opción no valida, volver a ingresar`)
        }

    }while(!validacion)

    if(opciones == 1){
        alert(`Comienza el juego, tenes ${chances} chances para adivinar si la letra ingresada existe en la palabra`)

        //Por ahora fijo en una palabra a adivinar
        palabraElegida = colores[0]
    
        alert(`La palabra a adivinar tiene ${palabraElegida.length} letras`)
    
        for (let index = 1; index <= chances; index++) {
            let letra = prompt(`Ingrese una letra`)        
            if(isNaN(letra)){
                if(letra.length == 1){
                    let existeLetra = buscarLetra(letra)
                    if(existeLetra){
                        alert(`Ganaste!!!! La letra ${letra} se encuentra en la palabra elegida, la cual es ${palabraElegida}!!!`)                    
                        break
                    }else{
                        alert(`La letra ${letra} no se encuentra en la palabra elegida!`)
                    } 
                }else{
                    alert(`Ingresaste mas de una letra y perdiste una oportunidad!`)
                } 
            }else{
                alert(`No ingresaste una letra y perdiste una oportunidad!`)
            }  
            if(index == chances){
                alert(`Perdiste!!!!`)
            }else{
                alert(`Te quedan ${chances - index} chances`)
            }
        }
    }else{
        alert(`Juego Finalidado.`)
    }       

}while(opciones != 0)


function buscarLetra(letra){
    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] === letra) {
            return true
        }
    }
    return false
}
