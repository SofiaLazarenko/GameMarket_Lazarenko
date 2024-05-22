let itemsArray=[
    { 
        Email: "",
        Class: "10-А 1",
        Name: "Боровий Артур",
        Project: "Дід проти москалів",
        Project_Repository_Phaser2ndGame: "",
        Project_Website_Phaser2ndGame: "",
        Google_Drive_Folder: "",
        Form: "Google Forms Link",
        Project_Repository_GameMarket_Borovyi: "GitHub Link",
        Project_Website_GameMarket_Borovyi: "GitHub Pages Link",
        Project_Market_Page_GameMarket_Borovyi: "Market Page Link"
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
    },
  
    { 
      title: "Акамуляторний опбрискувач",
      image:"https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/o/b/obpriskuvach-akumulyatorniy-forte-kf-16-1-1200x1200.jpg",
      pb:9,
      mono:3,
      prise_standart:2190,
      prise_discount:1698,
      prise_coupon:1596,
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
  