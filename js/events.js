//define functions here
function getIt(){
  $('p').on('click',function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('typing').on('keydown', function(key){
    if(key === 71){
      alert('G is pressed')
    }
  })
}

//function submitIt(){
//  $("form").('submit', function(){
//    alert('Your form is going to be submitted now.')
//    return
//  })
//}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  presIt()
  //submitIt()

});
