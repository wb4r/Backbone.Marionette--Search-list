

App.ResultView = Marionette.ItemView.extend({
  template: "#js-result",
})

App.ResultsView = Marionette.CompositeView.extend({
  tagName: "ul",
  childView: App.ResultView,
  template: "#js-results",

  filter: function(child) {
    return child.get("selected")
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

    App.FullList.models = _.filter( App.FullList.models, function(model) {
        if (model.attributes.selected) {
          return true;
        } else {
          return false;
        }
    })

    var listview = new App.ResultsView({collection: App.FullList});

    console.log(listview);
    console.log(App.FullList);
    console.log(array);


    App.regions.list.show(listview)
    App.FullList = new App.Results({})
    App.FullList.fetch();
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
