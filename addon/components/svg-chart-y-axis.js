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

    labels: [],

    offsetX: 0,

    offsetY: 0,

    title: null,

    width: 0,

    writingMode: 'tb-rl',

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    labelPositions: Ember.computed(
        'height',
        'labels',
        'offsetX',
        'offsetY',
        'x2',
        function() {
            const height = this.get( 'height' );
            const x = this.get( 'offsetX' );
            const y = this.get( 'offsetY' );
            const x2 = this.get( 'x2' );
            const labels = this.get( 'labels' );
            const heightChunk = height / ( labels.length - 1 ); // -1 to drop the 0

            const labelPos = Ember.A();

            labels.forEach( ( label, index ) => {
                labelPos.push({
                    x: x2 - 10 - 3, // far left - 10(ticks) - 3(padding)
                    y: height - ( ( heightChunk * index ) + y ) + 3, // 5 for text height/2
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
            const tickCount = this.get( 'labels' ).length - 1;
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
