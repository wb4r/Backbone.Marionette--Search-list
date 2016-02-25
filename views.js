

App.ResultView = Marionette.ItemView.extend({
  template: "#js-result",
})

App.ResultsView = Marionette.CompositeView.extend({
  tagName: "ul",
  // className: ".suggestions",
  childView: App.ResultView,
  template: "#js-results",
  // this.listenTo("show", this.filter()),

  filter: function() {
    console.log("filtering!!!!!!!!!!!!!!!!!!!!!!!");
  }
})


App.InputView = Marionette.ItemView.extend({
  el: "#inputSearch",

  initialize: function() {
    _.bindAll(this, 'launchCollection')
  },

  events: {
    "keyup": "launchCollection",
  },
  launchCollection: function(e) {
    this.allBackToUnselected();
    var array = [],
        filtered = this.getCollectionMatches(array);

    this.changeModelsToSelected(filtered)
    console.log(App.FullList.where({"selected": true}));

    // var selectionCollection = new App.Results({
    //   filter: function(model) {
    //     console.log(model);
    //   }
    // })
    // return child.get('value') % 2 === 0;
    // this.remove
    // console.log(selectionCollection);

    var listview = new App.ResultsView({
      collection: App.FullList,
      filter: function(child) {
        return App.FullList.where({"selected": true})
      }
    });
    console.log(listview);
    // var listview = new App.ResultsView({collection: App.FullList});
    App.regions.list.show(listview)
  },
  getCollectionMatches: function(array) {
    var search = $("#inputSearch").val();

    _.each(App.FullList.models, function(model) {
      if (model.attributes.city.toLowerCase().includes(search)) {
        array.push(model.attributes.id)
      }
    })
    return array;
  },
  changeModelsToSelected: function(filtered) {
    _.each(filtered, function(id) {
      var model = App.FullList.get(id)
      model.set({"selected": true})
    })
  },
  allBackToUnselected: function() {
    App.FullList.invoke('set', {"selected": false});
  }
})

var inputview = new App.InputView()


//
// // what user enters
// var inputText;
// // the actual value
// var $inputText = $(".inputText").val();
//
// $(".search").on("keyup", function() {
//   $inputText = $(this).val();
//   console.log($inputText);
// })
//




// var city = App.FullList.get(1);
//
// var cityview = new App.ResultView({model: city.attributes})
//
// cityview.render()
//
// App.regions.list.show(cityview)

// var Message = Backbone.Model.extend();
// var message = new Message({ title: "Title", description: "Description" });
// template = '<div><%= message.title %> This is a test</div>'
// var ItemView = Backbone.Marionette.ItemView.extend({
//   region: '#main',
//   template: template,
//   model: message
// });
// var view = new ItemView();
// view.render();
