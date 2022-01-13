$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val()); // 29
    const gender = $("select#gender").val(); // male
    const favoriteColor = $("select#favoriteColor").val(); // turquoise
    


    if (age) { // if (age) <--- if it exists, then it's true. "if 29" (instead if (age > something else), then do something)
      let perfectMatch = (""); // "" <-- empty string, null
      
      
      if (gender === "male") {
        
                    if (age < 21) {
                      
                      $("#match6").show();
                    } else if (age === 21) {
                      $("#match5").show();
                    } else { 
                      $("#match4").show();
                    }
    } else {
      
                    if (age < 21) {
                     $("#match1").show();
                    } else if (age === 21) {
                     $("#match2").show();
                    } else {
                     $("#match3").show();
                    }
            

    } 


  
      // showing all matches
   } else { 
     alert('please enter your age');
   }


    event.preventDefault();
  });
});