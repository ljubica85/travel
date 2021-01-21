const slider= [
 {
  id:1,
  url:"./images/slider/image1.png",
  town:"Novi Sad, Serbia",
  desc:"Novi Sad is a city in northern Serbia on the banks of the Danube River. Standing atop a riverside bluff, much of Petrovaradin Fortress dates to the 17th and 18th centuries, with an iconic clock tower and a network of tunnels. "
 },
 {
  id:2,
  url:"./images/slider/image2.png",
  town:"Amsterdam, Netherland",
  desc:"Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. "
 },
 {
  id:3,
  url:"./images/slider/image3.png",
  town:"The Bahamas",
  desc:"The Bahamas, known officially as the Commonwealth of The Bahamas, is a country within the Lucayan Archipelago of the West Indies in the Atlantic. "
 },
 {
   id:4,
   url:"./images/slider/image1.png",
   town:"Novi Sad, Serbia",
   desc:"Novi Sad is a city in northern Serbia on the banks of the Danube River. Standing atop a riverside bluff, much of Petrovaradin Fortress dates to the 17th and 18th centuries, with an iconic clock tower and a network of tunnels. "
  },
  {
   id:5,
   url:"./images/slider/image2.png",
   town:"Amsterdam, Netherland",
   desc:"Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. "
  },
  {
   id:6,
   url:"./images/slider/image3.png",
   town:"The Bahamas",
   desc:"The Bahamas, known officially as the Commonwealth of The Bahamas, is a country within the Lucayan Archipelago of the West Indies in the Atlantic. "
  }];

$.each(slider, function(index, value){
 let {url, town, desc} = value;
 $("#slider-container").append(`<div class='card-slide ${index=0?"current":"next"}'>    
 <img src=${url} alt='${town}' class="town-img"/>       
 <div class="overlay">
 <h4>${town}</h4>
 <p >${desc}</p>
</div>
</div>`)
})
$('.card-slide').click(function(){
 $(this).toggleClass('show').siblings().removeClass('show')
})
$(".arrow-slider").click(function(){
 if($(this).attr("id")=="right"){
  if($(".next").length){
   $(".card-slide.current").removeClass("current").addClass("prev");
   $(".card-slide.next").first().removeClass("next").addClass("current")
  } else {
   $('#right').prop("disabled", true)
  }
 }
 if($(this).attr("id")=="left"){
  if($(".prev").length){
   $(".card-slide.current").removeClass("current").addClass("next");
   $(".card-slide.prev").first().removeClass("prev").addClass("current")
  }
 } else {
  $('#left').prop("disabled", true)
 }
})

 

  // if(windowWidth>768){
  // $(".slider").append(html);
  // }
  // if(windowWidth<=768){
  // $("#slider-container").append(html);
  // $(".content-container-slider").append($(".arrow-slider"))
  // }


  // if(windowWidth>768){
  //   let currentLeft = 0
  //   let number = parseFloat((100 / slider.length).toFixed(2))
  //   const checkNumber= (num) => (num<1?0:num)
  //   $(".arrow-slider").click(function(){
  //     if($(this).attr("id")=="right"){
  //       if(checkNumber(currentLeft)>=0){
  //         $("#left").prop("disabled", false)
  //         if(currentLeft < 100 - (number * 2.5)){
  //           $("#right").prop("disabled", false)
  //           currentLeft = checkNumber(currentLeft + number) 
  //           $(".slider").css("left",`-${currentLeft}%`) 
  //           console.log(currentLeft) 
  //         } else {
  //           $('#right').prop("disabled", true)
  //         }
  //       } 
  //     } 
  //     if($(this).attr("id")=="left"){
  //       $("#right").prop("disabled", false)
  //         if(currentLeft>0){
  //           $(this).prop("disabled", false)
  //           currentLeft = checkNumber(currentLeft - number) 
  //           $(".slider").css("left",`-${currentLeft}%`) 
  //           console.log(currentLeft) 
  //         } else {
  //           $(this).prop("disabled", true)
  //         }
  //       }
      
  //   })
  // } 
  // else {
  //   let currentLeft = 0;
  //   // let percent = $(".card-slide").width();
  //   let number = parseFloat((100 / slider.length).toFixed(2))
  //   const checkNumber= (num) => (num<1?0:num)
  //   console.log(currentLeft)

  //   $(".arrow-slider").click(function(){
  //     if($(this).attr("id")=="right"){
  //       if(checkNumber(currentLeft)>=0){
  //         $("#left").prop("disabled", false)
  //         if(currentLeft < 100 - (number * 2.5)){
  //           $("#right").prop("disabled", false)
  //           currentLeft = checkNumber(currentLeft + number) 
  //           $("#slider-container").css("left",`-${currentLeft}%`) 
  //           console.log(currentLeft) 
  //         } else {
  //           $('#right').prop("disabled", true)
  //         }
  //       } 
  //     } 
  //     if($(this).attr("id")=="left"){
  //       $("#right").prop("disabled", false)
  //         if(currentLeft>0){
  //           $(this).prop("disabled", false)
  //           currentLeft = checkNumber(currentLeft - number) 
  //           $("#slider-container").css("left",`-${currentLeft}%`) 
  //           console.log(currentLeft) 
  //         } else {
  //           $(this).prop("disabled", true)
  //         }
  //       }
      
  //   })
  // }