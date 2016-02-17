import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'svg-chart', 'Integration | Component | svg chart', {
    integration: true
});

test( 'it renders', function( assert ) {
    assert.expect( 2 );

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render( hbs`{{svg-chart}}` );

    assert.equal( this.$().text().trim(), '' );

    // Template block usage:
    this.render( hbs`
        {{#svg-chart}}
            template block text
        {{/svg-chart}}
    `);

    assert.equal( this.$().text().trim(), 'template block text' );
});
