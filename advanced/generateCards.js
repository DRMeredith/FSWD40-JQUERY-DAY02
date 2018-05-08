

function alreadyPicked(array,n){
 return array[n]; 
}

function cardSelected(n){
 //alert("card "+n+" selected");
 $("#card"+n).removeClass("card");
 $("#card"+n).addClass("selected");
}

function placeCard(id){
 var newCard=$("<div id='card"+id+"' class='card' onclick='cardSelected("+id+")'><div>"+id+"</div></div>");
 $("#cardpile").append(newCard);
}

function generateCards(){
 var id; 
 var cards=[];

 for(var i=0;i<10;++i){
  cards.push(false);
 }

 console.log(JSON.stringify(cards));

 for(var i=0;i<10;++i){
  id=Math.floor(Math.random()*10+1);
  while(alreadyPicked(cards,id)){ 
   id=Math.floor(Math.random()*10+1);  
  }
  cards[id]=true;
  console.log("card "+id);
  placeCard(id);
 }

} 

$(document).ready(
 function(){generateCards();}
);
