

// MAIN APP
var App = new Marionette.Application();

// MAIN APP LAYOUT
App.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#main-container",
    regions: {
      list: "#list"
    }
  })

  App.regions = new Layout();
})

App.on("start:after", function() {
  // var city = App.FullList.get(1);
  // var cityview = new App.ResultView({model: city.attributes})
  // App.regions.list.show(cityview)
})
