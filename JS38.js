const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
/*-a-*/
  function rateProduct(inputId,inputRate){
    let ratingsobj={
        userId : inputId,
        rate : inputRate
    }
    products.forEach((item)=>{
    if(item._id===inputId){
        item.ratings.push(ratingsobj);
        console.log("Rating updated");
        console.log(item.ratings);
    }

})
        
    
  }
  rateProduct('aegfal',4.7);


  /*-b-*/

  function averageRating(inputId){
    let rating = [];
    products.forEach((item)=>{
      if(item._id===inputId){
        item.ratings.forEach((r)=>{
         rating.push(r.rate);
        })
      }
    })
    let sum = 0;
    rating.forEach((item)=>{
      sum += item;
    })
    console.log(sum/rating.length);
  }
  averageRating('eedfcf');
 
 
  //like product

  function likeProduct(inputName){
    products.forEach((item)=>{
       if(item.name===inputName){
          if(item.likes.includes('fg12cy')){
              item.likes.splice(0);
              console.log('Like removed')
          }
          else{
            item.likes.push('fg12cy');
            console.log('Like added');
          }
       }
    })
  }
  likeProduct('mobile phone');
