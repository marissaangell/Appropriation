$(".section2").mouseenter(function(){
  $(this).addClass("col-8")
  $("#col1").addClass("col-2")
  $("#col2").addClass("col-2")
  $("#col3").addClass("col-2")
})

$(".section2").mouseleave(function(){
  $(this).removeClass("col-8")
  $("#col1").removeClass("col-2")
  $("#col2").removeClass("col-2")
  $("#col3").removeClass("col-2")
})