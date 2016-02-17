import Ember from 'ember';
import layout from '../templates/components/svg-chart-x-axis';

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [
        'axis',
        'x-axis'
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
            const tickCount = this.get( 'tickCount' );
            const height = this.get( 'height' );
            const width = this.get( 'width' );
            const x = this.get( 'offsetX' );
            const y = this.get( 'offsetY' );
            const ticks = Array.apply( null, Array( tickCount ) ).map( () => { return {} } );

            ticks.forEach( function( tick, index ) {
                tick.x = ( ( width / tickCount ) * index ) + x;
                tick.y = y + 10;
            });

            return ticks;
        }
    ),

    titlePos: Ember.computed(
        'width',
        'offsetX',
        'offsetY',
        function() {
            return {
                x: ( this.get( 'width' ) / 2 ) + this.get( 'offsetX' ),
                y: this.get( 'offsetY' ) + 20
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
