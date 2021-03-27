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
            }
        }else if(corPeca == 2){
            if(x_destino == x_origem-1 && y_destino == y_origem-1 || x_destino == x_origem-1 && y_destino == y_origem+1){
                return true
            }
        }
        
    }

    if(x_destino % 2 != 0 && y_destino % 2 == 0){
        //Falta antes do IF abaixo a validação se é dama ou não, pois caso seja as regras abaixo nao se aplicarão
        if(corPeca == 1){//se for azul deve andar o valor da coordenada atual(x) + 1 && coordenada atual(y) - 1 ou coordenada atual(x) + 1 && coordenada atual(y) + 1
            if(x_destino == x_origem+1 && y_destino == y_origem-1 || x_destino == x_origem+1 && y_destino == y_origem+1){
                return true
            }
        }else if(corPeca == 2){
            if(x_destino == x_origem-1 && y_destino == y_origem-1 || x_destino == x_origem-1 && y_destino == y_origem+1){
                return true
            }
        }
    }

    return false
}