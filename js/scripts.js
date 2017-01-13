var trackSelect = function (compPeople, design, smallLarge, appWeb, netAndroid) {
  if (compPeople === "both" && design === "undecided" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
    var answer = "You should do some more research to learn more about this field and if it is a good fit for you";
    return answer;
  } else {
    return "lajlkjljlkj"
  }
} //function end




$(document).ready(function(){
  $("form#blank-form").submit(function(event){

    var computersAnswer = $("input:radio[name=work-preference]:checked").val();
    var cssAnswer = $("input:radio[name=front-back]:checked").val();
    var rubyAnswer = $("input:radio[name=size]:checked").val();
    var phpAnswer = $("input:radio[name=products]:checked").val();
    var javaCSharpAnswer = $("input:radio[name=tool]:checked").val();

    $("p#result").text(trackSelect(computersAnswer, cssAnswer, rubyAnswer, phpAnswer, javaCSharpAnswer))
  });
});
