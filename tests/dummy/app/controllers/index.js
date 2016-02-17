import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        change() {
            const index = Ember.$( '#chartPicker' )[0].selectedIndex;
            const types = this.get( 'chartTypes' );

            this.set( 'chartType', types[ index ] );
        }

    },

    chartType: 'column',

    chartTypes: [
        'column',
        'line'
    ],

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
