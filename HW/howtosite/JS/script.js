$(document).ready(function(){
  $("#button").click(function(){
    $("#hide").show(1000)
  });
  $("#button2").click(function(){
    $("#hide").hide(1000)
  });
  $("#button5").click(function(){
    $("#show1").show(1000)
  });
  $("#button6").click(function(){
    $("#show1").hide(1000)
  });
  $("#button7").click(function(){
    $("#show2").show(1000)
  });
  $("#button8").click(function(){
    $("#show2").hide(1000)
  });
  $("#button9").click(function(){
    $("#show3").show(1000)
  });
  $("#button10").click(function(){
    $("#show3").hide(1000)
  });
  $("#button11").click(function(){
    $("#show4").show(1000)
  });
  $("#button12").click(function(){
    $("#show4").hide(1000)
  });
  $("#button13").click(function(){
    $("#show5").show(1000)
  });
  $("#button14").click(function(){
    $("#show5").hide(1000)
  });
  $("#button3").click(function(){
    $("#paragraph").html("Sewing is so fun!")
  })
  $("#button4").click(function(){
    $("#styledP").css({"color":"red","font-size":"30px"})
  })
  $("#styledP").mouseover(function(){
    $("body").css("background-color","blue")
  })

  $("#styledP").mouseleave(function(){
    $("body").css("background-color","pink")
  })
})
