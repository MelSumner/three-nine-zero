import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    click() {
      document.body.focus();
    }
  }
});
