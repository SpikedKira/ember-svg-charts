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

    labels: [],

    offsetX: 0,

    offsetY: 0,

    tickCount: 0,

    title: null,

    width: 0,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    labelPositions: Ember.computed(
        'labels',
        'width',
        'offsetX',
        'offsetY',
        function() {
            const width = this.get( 'width' );
            const x = this.get( 'offsetX' );
            const y = this.get( 'offsetY' );
            const labels = this.get( 'labels' );
            const widthChunk = width / labels.length;

            const labelPos = Ember.A();

            labels.forEach( ( label, index ) => {
                labelPos.push({
                    x: ( widthChunk * index ) + x + ( widthChunk / 2 ),
                    y: y + 10,
                    text: label
                });
            });

            return labelPos;
        }
    ),

    ticks: Ember.computed(
        'height',
        'labels',
        'width',
        'offsetX',
        'offsetY',
        function() {
            const tickCount = this.get( 'labels' ).length;
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
                y: this.get( 'offsetY' ) + 25 // 10(ticks) + 10(title height) + 5(margin-top)
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
