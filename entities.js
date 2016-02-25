// ENTITIES
var globalCounter = 0;

App.Result = Backbone.Model.extend({
  initialize: function() {
    this.set("id", globalCounter);
    globalCounter += 1;
  },
  defaults: {
    selected: false
  }
})

App.Results = Backbone.Collection.extend({
  url: 'https://gist.githubusercontent.com/willemtoledano/422521d16b1ac4317002/raw/44fb415b91e2cb91e15632a52d83dd8d403219f4/cities.json',
  model: App.Result,
})

App.FullList = new App.Results({
})

App.FullList.fetch({
  success: function() {
    // var listview = new App.ResultsView({collection: App.FullList});
    // App.regions.list.show(listview)
  }
});






















// // ENTITIES
// var globalCounter = 0;
//
// App.Result = Backbone.Model.extend({
//   initialize: function() {
//     this.set("id", globalCounter);
//     globalCounter += 1;
//   }
// })
//
// App.Results = Backbone.Collection.extend({
//   url: 'https://gist.githubusercontent.com/willemtoledano/422521d16b1ac4317002/raw/9909db0a339b11658f77f82417b701599906551e/cities.json',
//   model: App.Result,
// })
//
// App.FullList = new App.Results({
// })
//
// var tempList =     [{
//         "city": "New York",
//         "growth_from_2000_to_2013": "4.8%",
//         "latitude": 40.7127837,
//         "longitude": -74.0059413,
//         "population": "8405837",
//         "rank": "1",
//         "state": "New York"
//     },
//     {
//         "city": "Los Angeles",
//         "growth_from_2000_to_2013": "4.8%",
//         "latitude": 34.0522342,
//         "longitude": -118.2436849,
//         "population": "3884307",
//         "rank": "2",
//         "state": "California"
//     },
//     {
//         "city": "Chicago",
//         "growth_from_2000_to_2013": "-6.1%",
//         "latitude": 41.8781136,
//         "longitude": -87.6297982,
//         "population": "2718782",
//         "rank": "3",
//         "state": "Illinois"
//     }]
//
// App.FullList.fetch({
//   success: function() {
//     var listview = new App.ResultView({tempList});
//     App.regions.list.show(listview)
//   }
// });






















//
// var city, city2, city3;
//
// App.FullList.fetch({
//   success: function() {
//     city = App.FullList.get(1);
//     var cityview = new App.ResultView({city});
//     App.regions.list.show(cityview)
//
//     city2 = App.FullList.get(2);
//     var cityview2 = new App.ResultView({city2});
//     App.regions.list.show(cityview2)
//
//     city3 = App.FullList.get(3);
//     var cityview3 = new App.ResultView({city3});
//     App.regions.list.show(cityview3)
//   }
// });

// var fullListView = new App.ResultsView({
//   collection: App.FullList
// })

// var city = App.FullList.get(1);

// var cityview = new App.ResultView({city})
//
// App.regions.list.show(cityview)





// var nn =     {
//         "city": "New York",
//         "growth_from_2000_to_2013": "4.8%",
//         "latitude": 40.7127837,
//         "longitude": -74.0059413,
//         "population": "8405837",
//         "rank": "1",
//         "state": "New York"
//     }
//
// var nnview = new App.ResultView({nn})
//
// App.regions.list.show(nnview)
