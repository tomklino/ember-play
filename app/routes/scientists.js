import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    //TODO load json file
    results = [];
    //TODO go over json and add relevant items to the result array
    //return resutls
    return ["Tom Klinovsky", "Stav Barak", "Beyleys", "Alba"]
  }
});
