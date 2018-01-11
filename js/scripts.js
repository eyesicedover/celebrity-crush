$(document).ready(function(){
  $("#crushForm").submit(function(event){
    //collect info and set to variables
    var age = $("input#userAge").val();
    var style = $("#style").val();
    var genderPref = $("#genderPref").val();
    event.preventDefault();

    //if statements to determine CRUSH!!!
    if (age >= 18) {
      $("img").hide();
      if (style === "Edgy") {
        if (genderPref==="No preference") {
          $("img#edgyMale").show();
          $("img#edgyFemale").show();
        } else if(genderPref==="Gals"){
          $("img#edgyFemale").show();
        } else {
          $("img#edgyMale").show();
        }
      }
      if (style === "Preppy") {
        if (genderPref==="No preference") {
          $("img#preppyMale").show();
          $("img#preppyFemale").show();
        } else if(genderPref==="Gals"){
          $("img#preppyFemale").show();
        } else {
          $("img#preppyMale").show();
        }
      }
      if (style === "Jock") {
        if (genderPref==="No preference") {
          $("img#jockMale").show();
          $("img#jockFemale").show();
        } else if(genderPref==="Gals"){
          $("img#jockFemale").show();
        } else {
          $("img#jockMale").show();
        }
      }
    } else {
      $("img").hide();
      if (style==="Edgy") {
        $("img#edgyUnder").show();
      } else if (style==="Preppy") {
        $("img#preppyUnder").show();
      } else {
        $("img#jockUnder").show();
      }
    }
  });
});
