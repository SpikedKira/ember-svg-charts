"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/svg-chart-base', ['exports', 'ember-svg-charts/components/svg-chart-base'], function (exports, svg_chart_base) {

	'use strict';



	exports['default'] = svg_chart_base['default'];

});
define('dummy/components/svg-chart-column', ['exports', 'ember-svg-charts/components/svg-chart-column'], function (exports, svg_chart_column) {

	'use strict';



	exports['default'] = svg_chart_column['default'];

});
define('dummy/components/svg-chart-grid', ['exports', 'ember-svg-charts/components/svg-chart-grid'], function (exports, svg_chart_grid) {

	'use strict';



	exports['default'] = svg_chart_grid['default'];

});
define('dummy/components/svg-chart-legend', ['exports', 'ember-svg-charts/components/svg-chart-legend'], function (exports, svg_chart_legend) {

	'use strict';



	exports['default'] = svg_chart_legend['default'];

});
define('dummy/components/svg-chart-line', ['exports', 'ember-svg-charts/components/svg-chart-line'], function (exports, svg_chart_line) {

	'use strict';



	exports['default'] = svg_chart_line['default'];

});
define('dummy/components/svg-chart-rect', ['exports', 'ember-svg-charts/components/svg-chart-rect'], function (exports, svg_chart_rect) {

	'use strict';



	exports['default'] = svg_chart_rect['default'];

});
define('dummy/components/svg-chart-text', ['exports', 'ember-svg-charts/components/svg-chart-text'], function (exports, svg_chart_text) {

	'use strict';



	exports['default'] = svg_chart_text['default'];

});
define('dummy/components/svg-chart-x-axis', ['exports', 'ember-svg-charts/components/svg-chart-x-axis'], function (exports, svg_chart_x_axis) {

	'use strict';



	exports['default'] = svg_chart_x_axis['default'];

});
define('dummy/components/svg-chart-y-axis', ['exports', 'ember-svg-charts/components/svg-chart-y-axis'], function (exports, svg_chart_y_axis) {

	'use strict';



	exports['default'] = svg_chart_y_axis['default'];

});
define('dummy/components/svg-chart', ['exports', 'ember-svg-charts/components/svg-chart'], function (exports, svg_chart) {

	'use strict';



	exports['default'] = svg_chart['default'];

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/index', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({

        actions: {

            change: function change() {
                var index = Ember['default'].$('#chartPicker')[0].selectedIndex;
                var types = this.get('chartTypes');

                this.set('chartType', types[index]);
            }

        },

        chartType: 'column',

        chartTypes: ['column', 'line'],

        data: [{
            title: 'set one',
            data: [.30, .60, .40, .70, .10]
        }, {
            title: 'set 2',
            data: [.20, .50, .20, .50, .20]
        }, {
            title: 'third set',
            data: [.30, .40, .30, .40, .10]
        }],

        xAxisLabels: ['first', 'second', 'third', 'fourth', 'fifth']

    });

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-base.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-base.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-svg-charts/components/svg-chart-base.js should pass jshint.');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-column.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-column.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-svg-charts/components/svg-chart-column.js should pass jshint.');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-grid.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-grid.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-svg-charts/components/svg-chart-grid.js should pass jshint.\nmodules/ember-svg-charts/components/svg-chart-grid.js: line 61, col 73, Missing semicolon.\nmodules/ember-svg-charts/components/svg-chart-grid.js: line 88, col 72, Missing semicolon.\n\n2 errors');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-legend.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-legend.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-svg-charts/components/svg-chart-legend.js should pass jshint.');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-line.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-line.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-svg-charts/components/svg-chart-line.js should pass jshint.');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-rect.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-rect.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-svg-charts/components/svg-chart-rect.js should pass jshint.');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-text.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-text.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-svg-charts/components/svg-chart-text.js should pass jshint.');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-x-axis.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-x-axis.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-svg-charts/components/svg-chart-x-axis.js should pass jshint.\nmodules/ember-svg-charts/components/svg-chart-x-axis.js: line 88, col 89, Missing semicolon.\nmodules/ember-svg-charts/components/svg-chart-x-axis.js: line 84, col 19, \'height\' is defined but never used.\n\n2 errors');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart-y-axis.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart-y-axis.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-svg-charts/components/svg-chart-y-axis.js should pass jshint.\nmodules/ember-svg-charts/components/svg-chart-y-axis.js: line 58, col 19, \'x\' is defined but never used.\nmodules/ember-svg-charts/components/svg-chart-y-axis.js: line 90, col 89, Missing semicolon.\n\n2 errors');
  });

});
define('dummy/ember-svg-charts/tests/modules/ember-svg-charts/components/svg-chart.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-svg-charts/components');
  QUnit.test('modules/ember-svg-charts/components/svg-chart.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'modules/ember-svg-charts/components/svg-chart.js should pass jshint.\nmodules/ember-svg-charts/components/svg-chart.js: line 136, col 28, A leading decimal point can be confused with a dot: \'.1\'.\nmodules/ember-svg-charts/components/svg-chart.js: line 242, col 33, Don\'t make functions within a loop.\n\n2 errors');
  });

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Ember SVG Charts");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[3,0],[3,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 8
            },
            "end": {
              "line": 41,
              "column": 8
            }
          },
          "moduleName": "dummy/templates/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","value",["concat",[["get","type",["loc",[null,[38,29],[38,33]]]]]]],
          ["content","type",["loc",[null,[39,16],[39,24]]]]
        ],
        locals: ["type"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 54,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","docColumn");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        var el3 = dom.createTextNode("Template");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createTextNode("{{svg-chart\n    series=data\n    type=chartType\n    xAxisLabels=xAxisLabels\n    xAxisTitle='Demo Chart'\n    yAxisTitle='Some Numbers'\n}}");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        var el3 = dom.createTextNode("Controller");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("pre");
        var el3 = dom.createTextNode("chartType: 'column',\n\nxAxisLabels: [\n    'first', 'second', 'third', 'fourth', 'fifth'\n],\n\ndata: [\n    {\n        title: 'set one',\n        data: [.30, .60, .40, .70, .10]\n    },\n    {\n        title: 'set 2',\n        data: [.20, .50, .20, .50, .20]\n    },\n    {\n        title: 'third set',\n        data: [.30, .40, .30, .40, .10]\n    }\n]");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","exampleColumn");
        var el2 = dom.createTextNode("\n    Chart Type:\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2,"id","chartPicker");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(element2,1,1);
        morphs[2] = dom.createMorphAt(element1,6,6);
        return morphs;
      },
      statements: [
        ["element","action",["change"],["on","change"],["loc",[null,[36,29],[36,60]]]],
        ["block","each",[["get","chartTypes",["loc",[null,[37,16],[37,26]]]]],["key","@index"],0,null,["loc",[null,[37,8],[41,17]]]],
        ["inline","svg-chart",[],["series",["subexpr","@mut",[["get","data",["loc",[null,[47,15],[47,19]]]]],[],[]],"type",["subexpr","@mut",[["get","chartType",["loc",[null,[48,13],[48,22]]]]],[],[]],"xAxisLabels",["subexpr","@mut",[["get","xAxisLabels",["loc",[null,[49,20],[49,31]]]]],[],[]],"xAxisTitle","Demo Chart","yAxisTitle","Some Numbers"],["loc",[null,[46,4],[52,6]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/index.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/index.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 26, col 23, A leading decimal point can be confused with a dot: \'.30\'.\ncontrollers/index.js: line 26, col 28, A leading decimal point can be confused with a dot: \'.60\'.\ncontrollers/index.js: line 26, col 33, A leading decimal point can be confused with a dot: \'.40\'.\ncontrollers/index.js: line 26, col 38, A leading decimal point can be confused with a dot: \'.70\'.\ncontrollers/index.js: line 26, col 43, A leading decimal point can be confused with a dot: \'.10\'.\ncontrollers/index.js: line 30, col 23, A leading decimal point can be confused with a dot: \'.20\'.\ncontrollers/index.js: line 30, col 28, A leading decimal point can be confused with a dot: \'.50\'.\ncontrollers/index.js: line 30, col 33, A leading decimal point can be confused with a dot: \'.20\'.\ncontrollers/index.js: line 30, col 38, A leading decimal point can be confused with a dot: \'.50\'.\ncontrollers/index.js: line 30, col 43, A leading decimal point can be confused with a dot: \'.20\'.\ncontrollers/index.js: line 34, col 23, A leading decimal point can be confused with a dot: \'.30\'.\ncontrollers/index.js: line 34, col 28, A leading decimal point can be confused with a dot: \'.40\'.\ncontrollers/index.js: line 34, col 33, A leading decimal point can be confused with a dot: \'.30\'.\ncontrollers/index.js: line 34, col 38, A leading decimal point can be confused with a dot: \'.40\'.\ncontrollers/index.js: line 34, col 43, A leading decimal point can be confused with a dot: \'.10\'.\n\n15 errors'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-bar-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart-bar', 'Integration | Component | svg chart bar', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 17
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart-bar', ['loc', [null, [1, 0], [1, 17]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart-bar', [], [], 0, null, ['loc', [null, [2, 8], [4, 26]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-bar-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-bar-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-bar-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-base-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('svg-chart-base', 'Integration | Component | svg chart base', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'svg-chart-base', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'svg-chart-base', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('dummy/tests/integration/components/svg-chart-base-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-base-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-base-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-column-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('svg-chart-column', 'Integration | Component | svg chart column', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'svg-chart-column', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'svg-chart-column', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('dummy/tests/integration/components/svg-chart-column-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-column-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-column-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-grid-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart-grid', 'Integration | Component | svg chart grid', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 18
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart-grid', ['loc', [null, [1, 0], [1, 18]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart-grid', [], [], 0, null, ['loc', [null, [2, 8], [4, 27]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-grid-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-grid-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-grid-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-legend-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart-legend', 'Integration | Component | svg chart legend', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 20
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart-legend', ['loc', [null, [1, 0], [1, 20]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart-legend', [], [], 0, null, ['loc', [null, [2, 8], [4, 29]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-legend-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-legend-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-legend-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-line-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('svg-chart-line', 'Integration | Component | svg chart line', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'svg-chart-line', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.7',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'svg-chart-line', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('dummy/tests/integration/components/svg-chart-line-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-line-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-line-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart', 'Integration | Component | svg chart', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 13
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart', ['loc', [null, [1, 0], [1, 13]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart', [], [], 0, null, ['loc', [null, [2, 8], [4, 22]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-text-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart-text', 'Integration | Component | svg chart text', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 18
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart-text', ['loc', [null, [1, 0], [1, 18]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart-text', [], [], 0, null, ['loc', [null, [2, 8], [4, 27]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-text-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-text-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-text-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-x-axis-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart-x-axis', 'Integration | Component | svg chart x axis', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 20
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart-x-axis', ['loc', [null, [1, 0], [1, 20]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart-x-axis', [], [], 0, null, ['loc', [null, [2, 8], [4, 29]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-x-axis-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-x-axis-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-x-axis-test.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/components/svg-chart-y-axis-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleForComponent('svg-chart-y-axis', 'Integration | Component | svg chart y axis', {
        integration: true
    });

    ember_qunit.test('it renders', function (assert) {
        assert.expect(2);

        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.on('myAction', function(val) { ... });

        this.render(Ember.HTMLBars.template((function () {
            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 1,
                            'column': 20
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                    dom.insertBoundary(fragment, 0);
                    dom.insertBoundary(fragment, null);
                    return morphs;
                },
                statements: [['content', 'svg-chart-y-axis', ['loc', [null, [1, 0], [1, 20]]]]],
                locals: [],
                templates: []
            };
        })()));

        assert.equal(this.$().text().trim(), '');

        // Template block usage:
        this.render(Ember.HTMLBars.template((function () {
            var child0 = (function () {
                return {
                    meta: {
                        'revision': 'Ember@1.13.7',
                        'loc': {
                            'source': null,
                            'start': {
                                'line': 2,
                                'column': 8
                            },
                            'end': {
                                'line': 4,
                                'column': 8
                            }
                        }
                    },
                    arity: 0,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                        var el0 = dom.createDocumentFragment();
                        var el1 = dom.createTextNode('            template block text\n');
                        dom.appendChild(el0, el1);
                        return el0;
                    },
                    buildRenderNodes: function buildRenderNodes() {
                        return [];
                    },
                    statements: [],
                    locals: [],
                    templates: []
                };
            })();

            return {
                meta: {
                    'revision': 'Ember@1.13.7',
                    'loc': {
                        'source': null,
                        'start': {
                            'line': 1,
                            'column': 0
                        },
                        'end': {
                            'line': 5,
                            'column': 4
                        }
                    }
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode('\n');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment('');
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode('    ');
                    dom.appendChild(el0, el1);
                    return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                    return morphs;
                },
                statements: [['block', 'svg-chart-y-axis', [], [], 0, null, ['loc', [null, [2, 8], [4, 29]]]]],
                locals: [],
                templates: [child0]
            };
        })()));

        assert.equal(this.$().text().trim(), 'template block text');
    });

});
define('dummy/tests/integration/components/svg-chart-y-axis-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/svg-chart-y-axis-test.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'integration/components/svg-chart-y-axis-test.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-svg-charts","version":"0.0.0+f77b9e69"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map