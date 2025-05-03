function GetRandomElement(array) {
    let value = Math.floor(Math.random() * array.length);
    return array[value]
}




export default GetRandomElement;