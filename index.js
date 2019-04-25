// GOAL: 
  // - Connect to a github api
  // - Fetch data and return a promise
  // - Parse that promise to json (javascript object notation)
  // - Use the parsed json in order to work with the data


window.addEventListener('load', function(){
  // find target, addEventListener fn, parameters event & cb Fn
  document.querySelector('form').addEventListener('submit', searchGithub)
})

function renderRepoList(arr) {
  // clear query input 
  document.getElementById('query').value = ''

  // grab tbody tags to insert repo info to HTLM (DOM)
  let tbody = document.getElementById('repo-list')

  arr.forEach((el, i) => {
    // debugger
    let val =`
      <tr>
        <td>${i+1}</td>
        <td>${el.name }</td>
        <td><a href=${el.html_url }>${el.owne.login }</a></td>
        <td>${el.form }</td>
      </tr>
    `
    tbody.innerHTML += val;
  })


  
}

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
    .then(function(resp) {return resp.json()})
    .then(objs => {
      debugger
      renderRepoList(objs.items)
    })


}