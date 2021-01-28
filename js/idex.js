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


$(document).ready(function(){
  const windowWidth = $(window).width()
  if(windowWidth<=768){
    $("#discover, #available, #about, #contact").removeClass("section").css({"padding-top":"5rem", "padding-bottom":"5rem"})
  }
//Hero modal
  $("#watch").click(function(){
    $(".modal").addClass("open-modal")
  })

  $(".modal>button>img").click(function(){
    $('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    $(".modal").removeClass("open-modal")
  })
  if(windowWidth<=480){
    $('#video').css({"max-width":`${windowWidth}px`})
  }

  $('#video-overlay').click(function() {
    $("#video-overlay").css({"display":"none"})
    $("#video")[0].src += "&autoplay=1&mute=1"
  });

  //Search
  $('#search-icon').click((e)=>{
    e.preventDefault()
    $('#search').toggleClass('show-search').focus()
  })

//Submenu
  $('#lang').click((e)=>{
    e.preventDefault()
    console.log(e.target.getBoundingClientRect())
    const location = e.target.getBoundingClientRect()
    const leftLoacation = (location.left + location.right) / 2
    // ( * 0.82;
    $(".submenu").toggleClass("show").css({"left":`${leftLoacation}px`, "top":`${location.bottom+location.top-3}px`})
  })

  $('.lang-link').click(function(e){
    e.preventDefault()
    $(this).addClass("clicked").siblings().removeClass("clicked")
    const text = $(this).attr("id")=="en"?"EN":"DE"
    $("#short").text(`${text}`)
    $(".submenu").removeClass("show")
  })

//tablet header
  if(windowWidth<=1024){
    $(".search-button").append($("#search-img"))
    $("#submenu-tab").append($(".links"))
  }
  
  $(".nav-toggle").click(function(e){
    e.preventDefault();
    console.log(e.target.getBoundingClientRect())
    const location = e.target.getBoundingClientRect()
    const leftLoacation = (location.left + location.right) / 2
    if(windowWidth>768){
      $("#submenu-tab").toggleClass("show").css({"left":`${leftLoacation}px`, "top":`${location.bottom+location.top-3}px`})
    } 
    if(windowWidth<=768){
      $("#submenu-tab").toggleClass("show").css({"right":"0px", "top":`${location.bottom+location.top-3}px`})
    } 
  })

  $('.list-item').click(()=>{
    $("#submenu-tab").removeClass("show")
  })
  

//#available card-toggle
  if(windowWidth<=480){
    $('.dots .img-horisontal').append("<img src='./images/cards/dots-horisontal.png' alt='Dots' /><img src='./images/cards/dots-horisontal.png' alt='Dots' /><img src='./images/cards/dots-horisontal.png' alt='Dots' />")
  }

  $('.card').click(function(){
    $(this).addClass('open').siblings().removeClass('open')
  })

  $('.img-card').click(function(){
    $(this).toggleClass('open').siblings().removeClass('open')
  })

  $('.links li a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active')
  })
  


  //Slider 
  $.each(slider, function(index, value){
    let {url, town, desc} = value;
    $(".slider").append(`<div class='card-slide ${index==0?"current":"next"}'>    
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


  $('#left').prop("disabled", true)

  $(".arrow-slider").click(function(){
    if($(this).attr("id")=="right"){
      if($(".next").length!=0){
        $('#left').prop("disabled", false)
        $(".card-slide.current").removeClass("current").addClass("prev");
        $(".card-slide.next").first().removeClass("next").addClass("current")
        if($(".next").length==0) $('#right').prop("disabled", true)
      } else {
        $('#right').prop("disabled", true)
      }
    }
    if($(this).attr("id")=="left"){
      if($(".prev").length!=0){
        $('#right').prop("disabled", false)
        $(".card-slide.current").removeClass("current").addClass("next");
        $(".card-slide.prev").last().removeClass("prev").addClass("current")
        if($(".prev").length==0) $('#left').prop("disabled", true)
      } else {
        $('#left').prop("disabled", true)
      }
    } 
  })
})