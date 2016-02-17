import Ember from 'ember';
import layout from '../templates/components/svg-chart';

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNames: [
        'chart'
    ],

    layout: layout,

    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    actions: {

        resize() {
            console.log( 'resized' );
            //this.set( 'height', this.$().height() );
            //this.set( 'width', this.$().width() );
        }

    },

    // -------------------------------------------------------------------------
    // Events

    didInsertElement() {
        this._super( ...arguments );

        console.log( 'did insert element' );
        this.send( 'resize' );
    },

    init() {
        this._super( ...arguments );

        const eventSpace = 'resize.' + this.get( 'elementId' );
        Ember.$( window ).on( eventSpace, () => {
            this.send( 'resize' );
        });
    },

    willDestroy() {
        this._super( ...arguments );

        const eventSpace = 'resize.' + this.get( 'elementId' );
        Ember.$( window ).off( eventSpace );
    },

    // -------------------------------------------------------------------------
    // Properties

    height: 150,

    series: [
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
    ],

    width: 500,

    xAxisTitle: null,

    xAxisPlotlines: false,

    yAxisTitle: null,

    yAxisPlotlines: true,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    axisXHeight: Ember.computed(
        function() {
            return 20;
        }
    ),

    axisYWidth: Ember.computed(
        function() {
            return 20;
        }
    ),

    axisYSet: Ember.computed(
        'series',
        function() {
            const series = this.get( 'series' );
            const pleasantNumbers = [ 1, 2, 2.5, 5, 10, 15, 25, 30, 50, 75, 100 ];

            // flatten data
            let data = [];
            series.forEach( ( series ) => {
                data = data.concat( series.data );
            });

            const maximum = Math.max.apply( Math, data );

            // scale pleasantNumbers as needed
            let delta = 1;
            while ( maximum < 1 * delta ) {
                delta *= .1;
            }
            if ( delta === 1 ) {
                while ( maximum > 100 * delta ) {
                    delta *= 10;
                }
            }

            pleasantNumbers.forEach( ( val, index, arr ) => {
                arr[ index ] = val * delta;
            });

            // find iterator
            let iterator = 0;
            while ( maximum / pleasantNumbers[ iterator++ ] > 10 ) {}
            if ( maximum / pleasantNumbers[ iterator ] <= 5 ) {
                iterator--;
            }

            // build set
            const set = [];
            const step = pleasantNumbers[ iterator ];
            for ( let i = 0; i <= Math.ceil( maximum / step ) + 1; i++ ) {
                // trim floating point errors
                let temp = parseFloat( parseFloat( i * step ).toPrecision( 12 ) );
                set.push( temp );
            }
            return set;
        }
    ),

    axisX: Ember.computed(
        'axisXHeight',
        'axisYWidth',
        'height',
        'width',
        'ticksX',
        function() {
            const axisXHeight = this.get( 'axisXHeight' );
            const axisYWidth = this.get( 'axisYWidth' );

            return {
                height: axisXHeight,
                offsetX: axisYWidth,
                offsetY: this.get( 'height' ) - axisXHeight,
                width: this.get( 'width' ) - axisYWidth,
                ticks: this.get( 'ticksX' )
            };
        }
    ),

    axisY: Ember.computed(
        'axisXHeight',
        'axisYWidth',
        'height',
        'width',
        'axisYSet',
        function() {
            const axisXHeight = this.get( 'axisXHeight' );
            const axisYWidth = this.get( 'axisYWidth' );

            return {
                height: this.get( 'height' ) - axisXHeight,
                offsetX: 0,
                offsetY: 0,
                width: axisYWidth,
                ticks: this.get( 'axisYSet' ).length
            };
        }
    ),

    chartDimensions: Ember.computed(
        'axisXHeight',
        'axisYWidth',
        'height',
        'width',
        function() {
            const axisWidth = this.get( 'axisYWidth' );

            return {
                x: axisWidth,
                y: 0,
                height: this.get( 'height' ) - this.get( 'axisXHeight' ),
                width: this.get( 'width' ) - axisWidth
            };
        }
    ),

    dataPoints: Ember.computed(
        'chartDimensions',
        'series',
        function() {
            const chartDimensions = this.get( 'chartDimensions' );
            const axisYSet = this.get( 'axisYSet' );
            const series = this.get( 'series' );
            const ticksX = this.get( 'ticksX' );

            const widthChunk = chartDimensions.width / ticksX;
            const widthBuffer = 10; // left and right dataPoint padding
            const barWidth = ( ( widthChunk - ( widthBuffer * 2 ) ) - ( 5 * ( series.length - 1 ) ) ) / series.length;

            const heightScale = axisYSet[ axisYSet.length - 1 ];

            const dataPoints = Ember.A();

            for ( let index = 0; index < ticksX; index++ ) {
                let dataPoint = Ember.A();
                series.forEach( ( series, seriesIndex ) => {
                    const value = series.data[ index ];

                    dataPoint.push( {
                        height: ( value / heightScale ) * chartDimensions.height,
                        offsetX: ( index * widthChunk ) + widthBuffer + chartDimensions.x + ( seriesIndex * ( barWidth + 5 ) ),
                        offsetY: chartDimensions.height - ( ( value / heightScale ) * chartDimensions.height ),
                        width: barWidth
                    });
                });
                dataPoints.push( dataPoint );
            }

            return dataPoints;
        }
    ),

    ticksX: Ember.computed(
        'series',
        function() {
            return this.get( 'series' ).map( ( item ) => {
                return item.data.length;
            } ).sort().pop();
        }
    ),

    ticksY: Ember.computed(
        'axisYSet',
        function() {
            // subtract 1 for the 0 line
            return this.get( 'axisYSet' ).length - 1;
        }
    )

});
