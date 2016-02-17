import Ember from 'ember';

export default Ember.Controller.extend({

    data: [
        {
            title: 'set one',
            data: [.30, .60, .40, .70, .10]
        },
        {
            title: 'set 2',
            data: [.20, .50, .20, .50, .20]
        },
        {
            title: 'third set',
            data: [.30, .40, .30, .40, .10]
        }
    ]

});
