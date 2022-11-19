


function moveGridElement() {
    const $allDivs= document.querySelectorAll('.tools__grid__element');
    const allDivsLength = $allDivs.length
    let arrayDivs = []
    let numero = 0
    for(let i = 0 ; i< allDivsLength ;i++){
        numero++
        arrayDivs.push(numero)
    }
    const newArrayDivs = []
    $allDivs.forEach(elem=>{
        let orderNumber = numRandom(allDivsLength)
        if(newArrayDivs.length === 0){
            newArrayDivs.push(orderNumber)
        }else{
            while(newArrayDivs.includes(orderNumber)){
                orderNumber = numRandom(allDivsLength)
            }
            newArrayDivs.push(orderNumber)
        }      
        elem.style.order= orderNumber
        elem.classList.add('flipInX')
        setTimeout(() => {
            elem.classList.remove('flipInX')
        }, 2000);
    })
    

    

}   
function numRandom(max){
    const randomNum = Math.floor(Math.random() * (max+1)) 
    return randomNum
}

export default moveGridElement;