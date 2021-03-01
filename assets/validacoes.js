function validateMoviment(coord){
    if(coord["row"] % 2 == 0 && coord["column"] % 2 != 0){
        return true
    }

    if(coord["row"] % 2 != 0 && coord["column"] % 2 == 0){
        return true
    }

    return false
}