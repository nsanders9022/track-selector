var trackSelect = function (compPeople, design, smallLarge, appWeb, netAndroid) {
  if (compPeople && design && smallLarge && appWeb && netAndroid ){
    if (compPeople === "both" && design === "undecided" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
      return "You should do some more research to learn more about this field and if it is a good fit for you.";
    } else if (compPeople === "computers" && design === "undecided" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
      return "This field is right for you since you like to work with computers. However, it would be a good idea to spend more time on figuring out what path you want to go down.";
    } else if (compPeople === "people") {
      return "I suggest you look for a different career path since you don't like to work with computers."
    } else if (design === "front"){
      return "Design/CSS! This track is perfect for you since you want to work on the front end of web programming. Here you get to learn about planning out the aesthetics of a page and selecting the most user friendly and effective styles."
    } else if (smallLarge === "small") {
      return "Ruby/Rails! Ruby's simplistic and naturalistic syntax makes this a fun language to learn and a popular language for startups and small companies to code it."
    } else if (appWeb === "web") {
      return "PHP/Drupal! This track will prepare you for working on sites that are geared towards specific clients. These sites are content heavy and involve many different aspects, including form data and cookies."
    } else if (netAndroid ==="net"){
      return "C#/.NET! If you want to work for a large corporation or the government this track is right for you. Microsoft is a major employer that uses these languages. C# is used to develop a company's internal software as well as apps for clients and databases."
    } else {
      return "Java/Android! This track teaches you all about Android. This operating system can be used to create all the apps you can think of."
    }
  } else {
    return "Please make sure you answer every question."
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
