window.Account = Backbone.Model.extend({
    initialize: function() {
        debug.log('account initialized', debug.info);
    },
    defaults: {
        accountId: "110342234",
        firstName: "Jeffrey",
        lastName: "Ravas",
        notificationEmail: null,
        notificationMobilePhone: null,
        notificationMobileProvider: null,
        persistencePath: "REMOTELINK.Account",
        selectedVehicleVin: null,
        type: "Account",
        username: null,
        vehicles: [{
            branding: "branding-gmc",
            dataFeatures: [],
            make: "GMC",
            model: "Sierra Crew Cab",
            onstarUnitType: "ONSTAR",
            persistencePath: "REMOTELINK.Vehicle",
            serviceFeatures: [],
            type: "Vehicle",
            vehicleNickname: "Jeffs Sierra",
            vehiclePhone: "2483306366",
            vehiclePropType: "ICE",
            vin: "3GTP2VE79DG242444",
            year: "2013"
        }]
    }
});

window.Vehicle = Backbone.Model.extend({

    initialize: function() {
        console.log('This model has been initialized.');
    },

    defaults: {
        _id: null,
        branding: "branding-gmc",
        name: "",
        grapes: "",
        country: "USA",
        region: "California",
        year: "",
        description: "",
        picture: null
    }
});