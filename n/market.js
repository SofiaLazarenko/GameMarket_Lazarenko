// let itemsArray=[
//     {
//         FirstName:"Наталія",
//         LastName:"Венцель",
//         age:18,
//         subject:"Адміністратор",
//         photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//         url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/"
//     }
//     ,

//     {
//         FirstName:"Віталій",
//         LastName:"Шатківський",
//         age:43,
//         subject:"CS",
//         photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg"
        
//     }
//     ,
//     {
//         FirstName:"Вікторія",
//         LastName:"Нелипович",
//         age:18,
//         subject:"Математика",
//         photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg"
        
//     }
    


   

// ]



// //console.log('Перевірка')

// let itemsDiv = document.getElementById("items");

// //console.log(itemDiv)

// if(itemsDiv){

//     //  console.log(itemDiv)
//     // // console.log("Поле classList:",itemDiv.classList)
//     // // console.log("Поле id:",itemDiv.id)
//     // // console.log("Поле clientWidth:",itemDiv.clientWidth)
//     // // console.log("Поле innerHTML:",itemDiv.innerHTML)

//     // // itemDiv.innerText="Програмно доданий текст"
//     // // itemDiv.innerText+="Програмно доданий текст№2"

//     // itemDiv.innerHTML+='<div class= "item"></div>'
   
//     // itemDiv.innerHTML+='<div class= "item"></div>'
   
//     // itemDiv.innerHTML+='<div class= "item"></div>'
   
//     itemDiv.innerHTML+='<div class= "item"></div>'
          
//      itemDiv.innerHTML+='<div class="item"></div>'
// \ }
// itemsArray.forEach((item,index) => {
//     itemsDiv.innerHTML += 
//     `
//     <div class ="item">
//         <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
//         <p>${item.LastName} ${item.FirstName} </p>
//         <p>Вік:${item.age}</p>
//          <p>Предмет:${item.subject}</p>
//         <p><img src="${item.photo}" class="item-image"></p>
//         <p><a href="${item.url}" target ="_blank" ></p>

//     </div>
//     `
// })



// }else{
//     console.log("NOt found")
// }




// // itemsArray=itemsArray.sort()
// // for(let i=0; i<itemsArray.length;i++){
// //     console.log(i+ '-й елемент',itemsArray[i])
// // }


let itemsArray=[
  { 
    title: "Мотокоса 43",
    image:"https://content1.rozetka.com.ua/goods/images/big/175328478.jpg ",
    mono:4,
    pb:10,
    prise_standart:5499,
    prise_discount:4497,
    prise_coupon:4395,
  },

  { 
    title: "Електричний тример",
    image:"https://static.dnipro-m.ua/cache/products/6566/catalog_origin_315131.jpg ",
    mono:5,
    pb:12,
    prise_standart:4497,
    prise_discount:3498,
    prise_coupon:3396,
  },

  { 
    title: "Газонокосарка",
    image:"https://static.dnipro-m.ua/cache/products/6567/catalog_origin_300685.jpg ",
    mono:6,
    pb:9,
    prise_standart:4497,
    prise_discount:3297,
    prise_coupon:3195,
  }

]
let itemsDiv = document.getElementById("item");
if(itemsDiv){


    itemsArray


     .forEach((item,index) =>{

        itemsDiv.innerHTML +=
        `
        <div class ="item">
              
            <div class="item-title">${item.title}</div>
           
            
            <div class="item-image">
               <img src="${item.image}" class="item-image">
            </div>

             <div class="parts-pay">
                <div><img src="img/mono-lapka.jpg"  alt="">${item.mono}</div>
             </div>

             <div class="prise">
                <div><span>${item.prise_standart} </span><sup>грн</sup></div>
                <div><span>${item.prise_discount} </span><sup>грн</sup></div>
             </div>

             <div class="prise bonus">
                <div>ціна за купоном</div>
                <div><span>${item.prise_coupon} </span><sup>грн</sup></div>
             </div>
        </div>


        `

     })
}
