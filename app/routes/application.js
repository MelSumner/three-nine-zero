import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service('router'),
  model(params) {
    return params;
  },
  init() {
    this._super(...arguments);
    this.router.on('routeDidChange', transition => {

      if (document.activeElement) {
        document.activeElement.blur();
      }

      if (transition.to !== null) {
        setTimeout(function() {
          document.body.querySelector('#nav-message').setAttribute("tabindex", "-1");
          document.body.querySelector('#nav-message').focus();
        }, 0);        
      }
    });
  }
});