import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

const emberRequire = Ember.__loader.require('@ember/-internals/glimmer');

export default Route.extend({
  router: service('router'),
  init() {
    this._super(...arguments);
    this.router.on('routeDidChange', transition => {

      if (document.activeElement) {
        document.activeElement.blur();
      }

      if (transition.to !== null) {
        emberRequire.renderSettled().then(function() {
          document.body.querySelector('#ember-primary-application-outlet').focus();
        });        
      }
    });
  }
});