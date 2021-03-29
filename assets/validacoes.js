function validateMoviment(coordDestino, coordOrigem, corPeca){
    
    var x_destino = parseInt(coordDestino["row"]);
    var y_destino = parseInt(coordDestino["column"]);

    var x_origem = parseInt(coordOrigem["row"]);
    var y_origem = parseInt(coordOrigem["column"]);

    if(x_destino % 2 == 0 && y_destino % 2 != 0){
        //Falta antes do IF abaixo a validação se é dama ou não, pois caso seja as regras abaixo nao se aplicarão
        if(corPeca == 1){//se for azul deve andar o valor da coordenada atual(x) + 1 && coordenada atual(y) - 1 ou coordenada atual(x) + 1 && coordenada atual(y) + 1
            if(x_destino == x_origem+1 && y_destino == y_origem-1 || x_destino == x_origem+1 && y_destino == y_origem+1){
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
                    console.log(document.getElementById((x_destino + 2)+ ""+ (y_destino+2)).childNodes.length)
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
                    console.log(document.getElementById((x_destino + 2)+ ""+ (y_destino+2)).childNodes.length)
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
                    console.log(document.getElementById((x_destino + 2)+ ""+ (y_destino+2)).childNodes.length)
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