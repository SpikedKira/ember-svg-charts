import Ember from 'ember';
import layout from '../templates/components/svg-chart-y-axis';

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [
        'axis',
        'y-axis'
    ],

    layout: layout,

    tagName: 'g',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    height: 0,

    offsetX: 0,

    offsetY: 0,

    tickCount: 0,

    width: 0,

    writingMode: 'tb-rl',

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    ticks: Ember.computed(
        'height',
        'tickCount',
        'width',
        'offsetX',
        'offsetY',
        function() {
            const tickCount = this.get( 'tickCount' ) - 1;
            const height = this.get( 'height' );
            const width = this.get( 'width' );
            const x = this.get( 'offsetX' );
            const y = this.get( 'offsetY' );
            const ticks = Array.apply( null, Array( tickCount ) ).map( () => { return {} } );

            ticks.forEach( function( tick, index ) {
                tick.x = width + x - 10;//x + width;
                tick.y = ( ( height / tickCount ) * ( index + 1 ) ) + y;
            });

            return ticks;
        }
    ),

    titlePos: Ember.computed(
        'height',
        'offsetX',
        'offsetY',
        function() {
            return {
                x: 5,
                y: ( this.get( 'height' ) / 2 ) + this.get( 'offsetY' )
            };
        }
    ),

    x2: Ember.computed(
        'width',
        'offsetX',
        function() {
            return this.get( 'width' ) + this.get( 'offsetX' );
        }
    )

});
