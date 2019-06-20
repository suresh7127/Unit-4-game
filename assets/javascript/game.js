var win=0;
var loss=0;
var random_result;
var previous = 0;

var resetAndStart = function (){
  $(".crystals").empty();
  var images=[
  'crystal1.jpg',
  'crystal2.jpg',
  'crystal3.jpg',
  'crystal4.jpg']
random_result = Math.floor(Math.random()*69) +30;
$("#result").html("Random Result:" + random_result);

for(var i=0; i< 4; i++){
  var random = Math.floor(Math.random() * 12);
console.log(random);
  var crystal = $("<div>");
      crystal.attr({"class": "crystal", "data-random":random
      });
crystal.css({
  "background-images":"url('"+ images[i]+"')",
  "background-size":"cover"
})
      $(".crystals").append(crystal);
}
$("previous").html("Total Score:" +previous);
}

resetAndStart ();
$(document).on('click',".crystal", function(){
  var num = parseInt($(this).attr('data-random'));
  previous += num;

  $("previous").html("Total Score:" +previous);

  if(previous> random_result){
loss--;
$("#loss").html("You lost:",loss);

previous=0;
resetAndStart ();
  }
  else if(previous = random_result){
win++;
$("#win").html("You win:",win);
previous=0;

resetAndStart ();
  }
});