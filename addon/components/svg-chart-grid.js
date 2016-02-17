import Ember from 'ember';
import layout from '../templates/components/svg-chart-grid';

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [
        'plotlines'
    ],

    height: 0,

    layout: layout,

    tagName: 'g',

    width: 0,

    x: 0,

    xTickCount: 1,

    y: 0,

    yTickCount: 1,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    horzLines: Ember.computed(
        '',
        function() {
            const yTickCount = this.get( 'yTickCount' );
            const x = this.get( 'x' );
            const y = this.get( 'y' );
            const width = this.get( 'width' );

            const lines = Ember.A();

            for ( let i = 0; i < yTickCount; i++ ) {
                const ys = ( this.get( 'height' ) / yTickCount * i ) + y
                lines.push({
                    x1: x,
                    y1: ys,
                    x2: width + x,
                    y2: ys
                });
            }

            return lines;
        }
    ),

    vertLines: Ember.computed(
        '',
        function() {
            const xTickCount = this.get( 'xTickCount' );
            const x = this.get( 'x' );
            const y = this.get( 'y' );
            const height = this.get( 'height' );

            const lines = Ember.A();

            for ( let i = 0; i < xTickCount; i++ ) {
                const xs = ( this.get( 'width' ) / xTickCount * i ) + x
                lines.push({
                    x1: xs,
                    y1: y,
                    x2: xs,
                    y2: height + y
                });
            }

            return lines;
        }
    )

});
