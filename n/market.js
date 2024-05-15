let itemsArray=[
    {
        FirstName:"Наталія",
        LastName:"Венцель",
        age:18,
        subject:"Адміністратор",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        
    }
    ,

    {
        FirstName:"Віталій",
        LastName:"Шатківський",
        age:43,
        subject:"CS",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        
    }
    ,

    {
        FirstName:"Наталія",
        LastName:"Венцель",
        age:18,
        subject:"Адміністратор",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg"
        
    }
    ,

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
        <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
        <p>${item.LastName} ${item.FirstName} </p>
        <p>src="${item.photo}" alt=${item.FirstName} ${item.LastName} </p>
         <p>Вік:${item.age}</p>
         <p>Предмет:${item.subject}</p>

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


