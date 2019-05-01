import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { componentNodes } from '../utils/ember-internals';


export default Route.extend({
  router: service('router'),
  init() {
    this._super(...arguments);
    this.router.on('routeDidChange', transition => {
      let focusTarget = componentNodes(this).firstNode;
      if (document.activeElement && this._inserted) {
         console.log(focusTarget);
      }
      if (transition.to !== null) {
        setTimeout(function() {
          document.body.querySelector('main').setAttribute("tabindex", "-1");
          document.body.querySelector('main').focus();
        }, 0);        
      }
    });
  }
});