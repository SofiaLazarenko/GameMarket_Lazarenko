let itemsArray=['Газонокосарка 43',
'Електричний тример 110',
'Електрична газонокосарка 32',
'Акумуляторний оприскувач 12 N',
// 'Газонокосарка 430',
// 'Електричний тример 130',
// 'Елекртична газонокосарка 320',
// 'Акамуляторний оприскувач 12 E'
]



//console.log('Перевірка')

let itemsDiv = document.getElementById("items");

//console.log(itemDiv)

if(itemsDiv){

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
itemsArray.forEach((item,index) =>{
    itemsDiv.innerHTML += 
    `<div class ="item">
        <h2>Товар №${index+1} з 4</h2>
         <p>${item}</p>
    </div>
    `
})



}else{
    console.log("NOt found")
}




// itemsArray=itemsArray.sort()
// for(let i=0; i<itemsArray.length;i++){
//     console.log(i+ '-й елемент',itemsArray[i])
// }


