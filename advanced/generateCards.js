

function alreadyPicked(array,n){
 return array[n]; 
}

function cardSelected(n){
 //alert("card "+n+" selected");
 //$("#card"+n).removeClass("card");
 //$("#card"+n).addClass("selected");
 //$("#card"+n).draggable();
}

function placeCard(id){
 var newCard=$("<div id='card"+id+"' class='card' onclick='cardSelected("+id+")'><div>"+id+"</div></div>");
 $("#cardpile").append(newCard);
 $("#card"+id).addClass("ui-widget-content");
 $("#card"+id).draggable();
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
 function(){generateCards();
  generateDroppables();
 });
  
function generateDroppables(){
 var names=['one','two','three','four','five','six','seven','eight','nine','ten'];
 
 var i=1;
 names.map(function(x){
  var newItem=$("<div class='todrop' id='drop-"+x+"' prop='"+i+"'><div>"+x+"</div></div>");
  console.log(x);
  $("#toplace").append(newItem);
  $("#drop-"+x).droppable({accept: "#card"+i,hoverClass: "onRightPlace", drop: function(event,ui){
                                                                                 
                                                                                 var index=$(this).attr("prop");
                                                                                 var newCard=$("<p class='copied' id='copy"+index+"'><span>"+index+"</span></p>");
                                                                                 $("#drop-"+x).removeClass("todrop");
                                                                                 $("#drop-"+x).addClass("droppingDone");     
                                                                                 $("#drop-"+x).html(newCard);
                                                                                 $("#card"+index).remove();
                                                                                 //console.log(newCard);
                                                                                }
                          });
  ++i;
 });

}



