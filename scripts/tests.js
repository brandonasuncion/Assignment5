(function(window) {
    'use strict';


    QUnit.test("DataStore Test", function(assert) {

        var App = window.App || {};
         var ds = new App.DataStore();
        ds.add('m@bond.com', 'tea');
        ds.add('james@bond.com', 'eshpressho');

        assert.equal(ds.get('m@bond.com'), 'tea', "m@bond.com check");
        assert.equal(ds.get('james@bond.com'), 'eshpressho', "james@bond.com check");

        ds.remove('james@bond.com');
        assert.ok(ds.get('james@bond.com') == null, "james@bond.com check");

        ds.get('m@bond.com');
        assert.equal(ds.get('m@bond.com'), 'tea', "m@bond.com check");
    });


    /*
    myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
    myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
    myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
    myTruck.printOrders();
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    myTruck.printOrders();
    */

    QUnit.test("Truck Test", function(assert) {

        var App = window.App || {};
        var Truck = App.Truck;
        var DataStore = App.DataStore;

        var myTruck = new Truck('ncc-1701', new DataStore());

        myTruck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
        myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
        myTruck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});

        assert.equal(myTruck.db.data['me@goldfinger.com'], {"coffee": "double mocha", "emailAddress": "me@goldfinger.com"}, "m@bond.com check");
        //assert.equal(ds.get('james@bond.com'), 'eshpressho', "james@bond.com check");

        //ds.remove('james@bond.com');
        //assert.ok(ds.get('james@bond.com') == null, "james@bond.com check");

        //ds.get('m@bond.com');
        //assert.equal(ds.get('m@bond.com'), 'tea', "m@bond.com check");
    });
})(window);
