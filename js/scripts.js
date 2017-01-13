var trackSelect = function (compPeople, design, smallLarge, appWeb, netAndroid) {
  if (compPeople && design && smallLarge && appWeb && netAndroid ){
    if (compPeople === "both" && design === "undecided" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
      return "You should do some more research to learn more about this field and if it is a good fit for you";

    } else if (compPeople === "people") {
      return "I suggest you look for a different career path since you don't like to work with computers"
    } else if (design === "front"){
      return "CSS..................."
    } else if (smallLarge === "small") {
      return "Ruby............."
    } else if (appWeb === "web") {
      return "PHP ....................."
    } else if (netAndroid ==="net"){
      return "C#............"
    } else {
      return "Java ........."
    }
  } else {
    return "Please answer every question"
  }
};




$(document).ready(function(){
  $("form#blank-form").submit(function(event){
    event.preventDefault();
    var computersAnswer = $("input:radio[name=preference]:checked").val();
    var cssAnswer = $("input:radio[name=front-back]:checked").val();
    var rubyAnswer = $("input:radio[name=size]:checked").val();
    var phpAnswer = $("input:radio[name=products]:checked").val();
    var javaCSharpAnswer = $("input:radio[name=tool]:checked").val();

    $("#result").text(trackSelect(computersAnswer, cssAnswer, rubyAnswer, phpAnswer, javaCSharpAnswer));

    $("form#blank-form").hide();
    $(".result").show()
  });
});
