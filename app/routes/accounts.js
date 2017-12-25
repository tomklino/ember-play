import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    var headers = new Headers({
    	'Content-Type': 'application/json'
    });
    var request = new Request("/accounts.json", {
      headers
    })
    return new Promise(function(resolve, reject) {
      fetch(request)
        .then(function(response) {
          response.json().then((obj) => {
            console.dir(obj)
            resolve(obj)
          })
        });
    })

    // return ["Tom Klinovsky", "Stav Barak", "Beyleys", "Alba"]
    // return resellers;
  }
});
