$(".section2-col").mouseenter(function(){
  $("#col2-1").removeClass("col-4")
  $("#col2-2").removeClass("col-4")

  $("#col2-1").removeClass("col-7")
  $("#col2-2").removeClass("col-7")

  $(this).addClass("col-7")

  $("#col2-1").addClass("col-2")
  $("#col2-2").addClass("col-2")
})
