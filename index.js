// GOAL: 
  // - Connect to a github api
  // - Fetch data and return a promise
  // - Parse that promise to json (javascript object notation)
  // - Use the parsed json in order to work with the data


window.addEventListener('load', function(){
  // find target, addEventListener fn, parameters event & cb Fn
  document.querySelector('form').addEventListener('submit', searchGithub)
})


// e == event
function searchGithub(e){
  // alert('CONNECTED CORRECTLY')
  e.preventDefault();
  // debugger;

  const BASE_URL = 'https://api.github.com'
  let query = document.getElementById('query').value
  // EX: https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

  // using concatenetion to create query
  // fetch(BASE_URL + '/search/repositories?q=' + query)
  fetch(BASE_URL + `/search/repositories?q=${query}`)
  .then(resp => console.log(resp.json()))


}