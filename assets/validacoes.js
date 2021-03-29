function validateMoviment(coordDestino, coordOrigem, corPeca){
    
    var x_destino = parseInt(coordDestino["row"]);
    var y_destino = parseInt(coordDestino["column"]);

    var x_origem = parseInt(coordOrigem["row"]);
    var y_origem = parseInt(coordOrigem["column"]);

    if(document.getElementById(x_destino+""+y_destino).childNodes.length >= 1){
        return false
    }
        
    
    if(corPeca == 1){
        if(document.getElementById((x_origem+""+y_origem)).firstChild.classList.contains("azuis-dama")){
            if(x_destino < x_origem){

                if(y_origem < y_destino){
                    
                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem; i > x_destino; i--){
                        if(document.getElementById(i+""+ (y_origem + y)).firstChild != null){
                            if(document.getElementById(i+""+ (y_origem + y)).firstChild.classList.contains("vermelhas") && pecas.length == 0){
                                pecas.push(document.getElementById(i+""+ (y_origem + y)))
                            }else{
                                pecasGeral.push(document.getElementById(i+""+ (y_origem + y)).firstChild)
                            }   
                        }
                        y++
                    }
    
                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }

                }else{
                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem - 1; i > x_destino; i--){
                        y++
                        console.log(document.getElementById(i+""+ (y_origem - y)).firstChild)
                         if(document.getElementById(i+""+ (y_origem - y)).firstChild != null){
                            console.log("cor")
                            if(document.getElementById(i+""+ (y_origem - y)).firstChild.classList.contains("vermelhas") && pecas.length == 0){
                                
                                pecas.push(document.getElementById(i+""+ (y_origem - y)))
                            }else{
                                console.log(document.getElementById(i+""+ (y_origem - y)).firstChild)
                                pecasGeral.push(document.getElementById(i+""+ (y_origem - y)).firstChild)
                            }
    
                            
                        }
            
                    }
                    console.log(pecasGeral)
                    console.log(pecas)
                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }
                }

            }else{
               if(y_destino < y_origem){

                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem; i < x_destino; i++){

                        if(document.getElementById(i+""+ (y_origem - y)).firstChild != null){
                            if(document.getElementById(i+""+ (y_origem - y)).firstChild.classList.contains("vermelhas") && pecas.length == 0){
                                pecas.push(document.getElementById(i+""+ (y_origem - y)))
                            }else{
                                pecasGeral.push(document.getElementById(i+""+ (y_origem - y)).firstChild)
                            }

                            
                        }
                        y++
                    }

                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }
                
               }else{

                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem; i < x_destino; i++){
                        console.log(i+""+ (y_origem + y))
                        if(document.getElementById(i+""+ (y_origem + y)).firstChild != null){
                            if(document.getElementById(i+""+ (y_origem + y)).firstChild.classList.contains("vermelhas") && pecas.length == 0){
                                pecas.push(document.getElementById(i+""+ (y_origem + y)))
                            }else{
                                pecasGeral.push(document.getElementById(i+""+ (y_origem + y)).firstChild)
                            }

                            
                        }
                        y++
                    }

                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }
               }
            }
            return true
        }
    }

    if(corPeca == 2){
        if(document.getElementById((x_origem+""+y_origem)).firstChild.classList.contains("vermelhas-damas")){
            if(x_destino > x_origem){

                if(y_origem > y_destino){
                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem; i < x_destino; i++){
    
                        if(document.getElementById(i+""+ (y_origem - y)).firstChild != null){
                            if(document.getElementById(i+""+ (y_origem - y)).firstChild.classList.contains("azuis") && pecas.length == 0){
                                pecas.push(document.getElementById(i+""+ (y_origem - y)))
                            }else{
                                pecasGeral.push(document.getElementById(i+""+ (y_origem - y)).firstChild)
                            }
    
                            
                        }
                        y++
                    }
    
                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }
                }else{
                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem + 1; i < x_destino; i++){
                        y++
                        console.log(document.getElementById(i+""+ (y_origem + y)).firstChild)
                         if(document.getElementById(i+""+ (y_origem + y)).firstChild != null){
                            console.log("cor")
                            if(document.getElementById(i+""+ (y_origem + y)).firstChild.classList.contains("azuis") && pecas.length == 0){
                                
                                pecas.push(document.getElementById(i+""+ (y_origem + y)))
                            }else{
                                console.log(document.getElementById(i+""+ (y_origem + y)).firstChild)
                                pecasGeral.push(document.getElementById(i+""+ (y_origem + y)).firstChild)
                            }
    
                            
                        }
                         

                        console.log(i+""+ (y_origem + y))
                    }
                    console.log(pecasGeral)
                    console.log(pecas)
                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }

                }

            }else{
               if(y_destino > y_origem){

                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem; i > x_destino; i--){

                        if(document.getElementById(i+""+ (y_origem + y)).firstChild != null){
                            if(document.getElementById(i+""+ (y_origem + y)).firstChild.classList.contains("azuis") && pecas.length == 0){
                                pecas.push(document.getElementById(i+""+ (y_origem + y)))
                            }else{
                                pecasGeral.push(document.getElementById(i+""+ (y_origem + y)).firstChild)
                            }

                            
                        }
                        y++
                    }

                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }

                
               }else{

                    let pecas = []
                    let pecasGeral = []
                    let y = 0
                    for(let i = x_origem; i > x_destino; i--){
                        console.log(i+""+ (y_origem - y))
                        if(document.getElementById(i+""+ (y_origem - y)).firstChild != null){
                            if(document.getElementById(i+""+ (y_origem - y)).firstChild.classList.contains("azuis") && pecas.length == 0){
                                pecas.push(document.getElementById(i+""+ (y_origem - y)))
                            }else{
                                pecasGeral.push(document.getElementById(i+""+ (y_origem - y)).firstChild)
                            }

                            
                        }
                        y++
                    }

                    if(pecasGeral.length > 1){
                        return false
                    }else{
                        if(pecas[0]){
                            pecas[0].removeChild(pecas[0].firstChild)
                        }
                    }

               }
            }
            return true
        }
    }

    if(x_destino % 2 == 0 && y_destino % 2 != 0){
        console.log("AAAAAA")
        //Falta antes do IF abaixo a validação se é dama ou não, pois caso seja as regras abaixo nao se aplicarão
        if(corPeca == 1){//se for azul deve andar o valor da coordenada atual(x) + 1 && coordenada atual(y) - 1 ou coordenada atual(x) + 1 && coordenada atual(y) + 1
            
            if(x_destino == 8){
                let casa = ((x_origem+""+y_origem))
                document.getElementById(casa).firstChild.classList.add("azuis-dama")
            }

            if(x_destino == x_origem+1 && y_destino == y_origem-1 || x_destino == x_origem+1 && y_destino == y_origem+1){
                console.log("B")
                return true
            }else if((x_destino - 2) == x_origem){
                if(y_destino > y_origem){
                    console.log(document.getElementById((x_destino - 2)+ ""+ (y_destino-2)).childNodes.length)
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino - 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                        
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino - 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
                //console.log((x_destino + 1) + "," + (y_destino -1))
            }else if(x_destino == x_origem-2 && y_destino == y_origem-2 || x_destino == x_origem-2 && y_destino == y_origem+2){
                if(document.getElementById((x_origem+""+y_origem)).firstChild.classList.contains("azuis-dama")){ // ANDAR PARA TRAS DAMA AZUL
                    return true
                }
                if(y_destino > y_origem){
                    console.log(document.getElementById((x_destino - 2)+ ""+ (y_destino-2)).childNodes.length)
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino + 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                        
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    console.log(document.getElementById((x_destino + 2)+ ""+ (y_destino+2)).childNodes.length)
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino + 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
            }

        }else if(corPeca == 2){
            if(x_destino == 1){
                let casa = ((x_origem+""+y_origem))
                document.getElementById(casa).firstChild.classList.add("vermelhas-damas")
            }
            if(x_destino == x_origem-1 && y_destino == y_origem-1 || x_destino == x_origem-1 && y_destino == y_origem+1){
                return true
            }else if((x_destino + 2) == x_origem){
                if(y_destino > y_origem){
                    console.log(document.getElementById((x_destino + 2)+ ""+ (y_destino-2)).childNodes.length)
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino + 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    console.log((x_destino + 2)+ ""+ (y_destino+2))
                   console.log(document.getElementById((x_destino + 2)+ ""+ (y_destino+2)).childNodes.length)
                   if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino + 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
                //console.log((x_destino + 1) + "," + (y_destino -1))
            }else if(x_destino == x_origem+2 && y_destino == y_origem-2 || x_destino == x_origem+2 && y_destino == y_origem+2){
                if(y_destino > y_origem){
                    console.log(document.getElementById((x_destino - 2)+ ""+ (y_destino-2)).childNodes.length)
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino - 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                        
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino - 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
            }
        }
        
    }

    if(x_destino % 2 != 0 && y_destino % 2 == 0){
        console.log("AQUI 2")

        console.log("x_destino debaixo: " + x_destino)
        //Falta antes do IF abaixo a validação se é dama ou não, pois caso seja as regras abaixo nao se aplicarão
        if(corPeca == 1){//se for azul deve andar o valor da coordenada atual(x) + 1 && coordenada atual(y) - 1 ou coordenada atual(x) + 1 && coordenada atual(y) + 1
            console.log("AZUL")
            if(x_destino == 8){
                let casa = ((x_origem+""+y_origem))
                document.getElementById(casa).firstChild.classList.add("azuis-dama")
            }
            if(x_destino == x_origem+1 && y_destino == y_origem-1 || x_destino == x_origem+1 && y_destino == y_origem+1){
                return true
            }else if((x_destino - 2) == x_origem){

                if(y_destino > y_origem){
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino - 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino - 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
                //console.log((x_destino + 1) + "," + (y_destino -1))
            }else if(x_destino == x_origem-2 && y_destino == y_origem-2 || x_destino == x_origem-2 && y_destino == y_origem+2){
                if(y_destino > y_origem){
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino + 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                        
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino + 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
            }

        }else if(corPeca == 2){
            if(x_destino == 1){
                let casa = ((x_origem+""+y_origem))
                document.getElementById(casa).firstChild.classList.add("vermelhas-damas")
            }
            if(x_destino == x_origem-1 && y_destino == y_origem-1 || x_destino == x_origem-1 && y_destino == y_origem+1){
                return true
            }else if((x_destino + 2) == x_origem){

                if(y_destino > y_origem){
                        if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino + 1)+ ""+ (y_destino-1)
                        if(document.getElementById(casa).firstChild){
                            console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino + 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)


                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
                //console.log((x_destino + 1) + "," + (y_destino -1))
            }else if(x_destino == x_origem+2 && y_destino == y_origem-2 || x_destino == x_origem+2 && y_destino == y_origem+2){
                if(y_destino > y_origem){
                    console.log(document.getElementById((x_destino - 2)+ ""+ (y_destino-2)).childNodes.length)
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                        let casa = (x_destino - 1)+ ""+ (y_destino-1)
                        console.log("ORIGENS: " + "("+ x_origem + ","+y_origem + ")")
                        console.log(casa);
                        if(document.getElementById(casa).firstChild){
                            
                            console.log(document.getElementById(casa).firstChild.id)
                        
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)

                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }else{
                    if(document.getElementById(x_destino + ""+ y_destino).childNodes.length != 1){
                    let casa = (x_destino - 1)+ ""+ (y_destino+1)
                    if(document.getElementById(casa).firstChild){
                        console.log(document.getElementById(casa).firstChild.id)
                            document.getElementById(casa).removeChild(document.getElementById(casa).firstChild)
                            return true
                        }else{
                            console.log("nao é valido")
                            return false
                        }
                    }else{
                        return false
                    }
                }
            }
        }

        
    }

    return false
}