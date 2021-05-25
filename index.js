const names = ["Lisa", "Kaitlin", "Jan"]

function writeCards(names, event){
    const newArray = []
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        debugger
    }
    return newArray
}
writeCards(names)


function countDown(number){
    while (number >= 0)
    console.log(number--)
}
