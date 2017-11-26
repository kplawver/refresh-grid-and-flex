var demo = {
  init: function() {
    console.log("I am initing")
    demo.initStepThree()
  },
  initStepThree: function() {
    var buttons = document.querySelectorAll("#grid-switcher-container button"), n=buttons.length, i
    console.log(buttons)
    for (i=0;i<n;i++) {
      var button = buttons[i]
      button.addEventListener("click", function(e) {
        e.preventDefault()
        var b = e.currentTarget, cls = b.getAttribute("data-class")
        demo.changeBodyClass(cls)
      })
      button.removeAttribute("disabled")
    }
  },
  changeBodyClass: function(cls) {
    document.getElementsByTagName("body")[0].setAttribute("class", cls)
  }
}

demo.init()
