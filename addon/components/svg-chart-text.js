import Ember from 'ember';
import layout from '../templates/components/svg-chart-text';

export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    attributeBindings: [
        'textAnchor:text-anchor',
        'writingMode:writing-mode',
        'x',
        'y'
    ],

    layout: layout,

    tagName: 'text',

    textAnchor: 'middle',

    textPath: null,

    writingMode: 'lr-tb',

    x: 0,

    y: 0

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

});
