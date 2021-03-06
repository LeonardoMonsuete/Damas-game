function validateMoviment(coord){

    if(parseInt(coord["row"]) % 2 == 0 && parseInt(coord["column"]) % 2 != 0){
        return true
    }

    if(parseInt(coord["row"]) % 2 != 0 && parseInt(coord["column"]) % 2 == 0){
        return true
    }

    return false
}