var win;
var loss;
var random_result;

random_number = Math.floor(Math.random()*69) +30;
$("#result").html("Random Result:" + random_result);

for(var i=0; i< 4; i++){
  var random = Math.floor(Math.random() * 12);
console.log(random);
  var crystal = $("<div>");
      crystal.attr({"class": "crystal", "data-random":random
      });

      $(".crystals").append(crystal);
}

$(".crystal").on('click', function(){
  console.log($(this).attr("data-random")
  
});