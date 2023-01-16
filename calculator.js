$(document).ready(function(){
  var nums = []
  var oper = []
  $(".nums").click(function(){
    nums.push($(this).text())
    $("#answer").text($(this).text())
  });
  $(".opers").click(function(){
    oper.push($(this).text())
    $("#answer").text($(this).text())
  })
  $("#clr").click(()=>{
    $("#answer").text("")
    nums=[]
    oper=[]
  })


  function calc(num1,operation,num2){
    switch(operation){
      case "+":
        return num1+num2
      case "-":
        return num1-num2
      case "/":
        return num1/num2
      case "x":
        return num1*num2
      case "^":
        return num1**num2
    }
  }

  $("#equals").click(()=>{
    $("#answer").text(calc(parseInt(nums[0]),oper[0],parseInt(nums[1])));
  });

});


