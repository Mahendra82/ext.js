Ext.application({
    name: 'Fiddle',

    launch: function() {
        Ext.Ajax.request({
            url: 'https://reqres.in/api/users',
            method: 'GET',
            useDefaultXhrHeader: false,
            params: {
               // email: 'some@gmail.com', //efbuserResults.email,
                password: '1234567890123456', //fbuserResults.id,
                email:'geowerge.bluth@reqres.in',
                name:'George',
            
            },
            callback: function(options, success, response) {
                Ext.defer(function() {
					Ext.Msg.show({
                        title: this.status === 200 ? 'Success' : 'Failure',
                        message: this.responseText.includes(options.params.email) ? options.params.name+ ' is Present':options.params.name+'Absent'
                    });
                }.bind(response), 200);
            }
        });
    }
});
