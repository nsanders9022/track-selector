$(document).ready(function(){
  $("form#blank-form").submit(function(event){
    $(".result").hide();


    var computersAnswer = $("input:radio[name=:work-preference:checked");
    var cssAnswer = $("input:radio[name=:front-back:checked");
    var rubyAnswer = $("input:radio[name=:size:checked");
    var phpAnswer = $("input:radio[name=:products:checked");
    var javaCSharpAnswer = $("input:radio[name=:tool:checked");

    $("p#result").text(answer)
    $(".result").show();
  });
});
