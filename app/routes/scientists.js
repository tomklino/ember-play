import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ["Tom Klinovsky", "Stav Barak", "Beyleys", "Alba"]
  }
});
