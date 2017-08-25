$(document).ready(function(){
    $('#namebox').keypress(function(e){
      if(e.keyCode==13)
      $('#namebutton').click();
    });
});

function db_search(item, db) {
    for(var x=0; x<db.length;x++){
        if(db[x].Villager.toLowerCase() == item.toLowerCase()){
          return x;
        }
      }
    return -1;
}

function set_coffee() {
  name = document.getElementById('namebox').value;
  result = db_search(name, cafe_db);
  if(result>=0){
    document.getElementById("villager_name").innerHTML="Here's " +
      cafe_db[result].Villager + "'s coffee order!";
    document.getElementById("beans_type").innerHTML=cafe_db[result].Beans;
    document.getElementById("milk_type").innerHTML=cafe_db[result].Milk;
    document.getElementById("sugar_type").innerHTML=cafe_db[result].Sugar;
  } else{
    document.getElementById("villager_name").innerHTML="Please enter a villager's " +
    "name into the text box, then press the button (check spelling!):";
    document.getElementById("beans_type").innerHTML="";
    document.getElementById("milk_type").innerHTML="";
    document.getElementById("sugar_type").innerHTML="";
  }
}
