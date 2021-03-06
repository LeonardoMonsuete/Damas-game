function splitCoords(coord){
    let coordsArray = coord.split('')
    return {
        row: coordsArray[0],
        column: coordsArray[1]
    }
}