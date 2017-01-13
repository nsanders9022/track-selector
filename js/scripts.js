var imageIcon = ""

var trackSelect = function (compPeople, design, smallLarge, appWeb, netAndroid) {
  if (compPeople && design && smallLarge && appWeb && netAndroid ){
    if (compPeople === "both" && design === "undecided" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
      imageIcon = "research";
      return "You should do some more research to learn more about this field and if it is a good fit for you.";
    } else if (compPeople === "computers" && design === "undecided" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
      imageIcon = "research";
      return "This field is right for you since you like to work with computers. However, it would be a good idea to spend more time on figuring out what path you want to go down.";
    } else if (compPeople === "people") {
      imageIcon = "research";
      return "I suggest you look for a different career path since you don't like to work with computers."
    } else if (design === "front"){
      imageIcon = "design"
      return "Design/CSS! This track is perfect for you since you want to work on the front end of web programming. Here you get to learn about planning out the aesthetics of a page and selecting the most user friendly and effective styles.";
    } else if (compPeople === "computers" && smallLarge === "undecided" && appWeb === "undecided" && netAndroid === "undecided") {
      imageIcon = "research";
      return "You want a back end track like C#, Java, PHP or Ruby. Do some more research to find out what kinds of companies or types of products you'd like to work on to help give you an opinion on the factors that differentiate these languges.";
    } else if (smallLarge === "large" && appWeb === "undecided" && netAndroid === "undecided") {
      imageIcon = "research";
      return "You've narrowed down your options to C#, Java, and PHP because you want to work on the back end for a large company. Now figure out if you want to work on apps or on web products.";
    } else if (appWeb === "app" && netAndroid === "undecided") {
      imageIcon = "research";
      return "You've now narrowed down your options to C# and Java because you want to have the ability to work on apps for large companies. Spend some time learning whether you would prefer to work with .NET or Android.";
    } else if (smallLarge === "small") {
      imageIcon = "ruby";
      return "Ruby/Rails! Ruby's simplistic and naturalistic syntax makes this a fun language to learn and a popular language for startups and small companies to code it.";
    } else if (appWeb === "web") {
      imageIcon = "php";
      return "PHP/Drupal! This track will prepare you for working on sites that are geared towards specific clients. These sites are content heavy and involve many different aspects, including form data and cookies.";
    } else if (netAndroid ==="net"){
      imageIcon = "cSharp";
      return "C#/.NET! If you want to work for a large corporation or the government this track is right for you. Microsoft is a major employer that uses these languages. C# is used to develop a company's internal software as well as apps for clients and databases.";
    } else {
      imageIcon = "java";
      return "Java/Android! This track teaches you all about Android. This operating system can be used to create all the apps you can think of.";
    }
  } else {
    imageIcon = "error"
    return "Please make sure you answer every question.";
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

    var nameInput = $("#name").val();

    $("#result").text(trackSelect(computersAnswer, cssAnswer, rubyAnswer, phpAnswer, javaCSharpAnswer));
    $("#nameHere").text(nameInput);

    $("#" + imageIcon).show();

    $("form#blank-form").hide();
    $(".result").show();
  });
});
