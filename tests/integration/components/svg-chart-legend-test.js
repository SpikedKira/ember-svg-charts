import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'svg-chart-legend', 'Integration | Component | svg chart legend', {
    integration: true
});

test( 'it renders', function(assert) {
    assert.expect( 2 );

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render( hbs`{{svg-chart-legend}}` );

    assert.equal( this.$().text().trim(), '' );

    // Template block usage:
    this.render( hbs`
        {{#svg-chart-legend}}
            template block text
        {{/svg-chart-legend}}
    `);

    assert.equal( this.$().text().trim(), 'template block text' );
});
