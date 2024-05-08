console.log('Перевірка')

let itemDiv = document.getElementById("items");

console.log(itemDiv)

if(itemDiv){

    //  console.log(itemDiv)
    // // console.log("Поле classList:",itemDiv.classList)
    // // console.log("Поле id:",itemDiv.id)
    // // console.log("Поле clientWidth:",itemDiv.clientWidth)
    // // console.log("Поле innerHTML:",itemDiv.innerHTML)

    // // itemDiv.innerText="Програмно доданий текст"
    // // itemDiv.innerText+="Програмно доданий текст№2"

    // itemDiv.innerHTML+='<div class= "item"></div>'
   
    // itemDiv.innerHTML+='<div class= "item"></div>'
   
    // itemDiv.innerHTML+='<div class= "item"></div>'
   
    // itemDiv.innerHTML+='<div class= "item"></div>'
   
    // for(let i=0; i<100; i++){
    //     itemDiv.innerHTML+='<div class="item"></div>'
    // }



}else{
    console.log("NOt found")
}



let itemsArray=['r',
'r',
'r',
'r']

itemsArray=itemsArray.sort()
for(let i=0; i<itemsArray.length[1];i++){
    console.log(i+ 'й елеиент',itemsArray[i])
}