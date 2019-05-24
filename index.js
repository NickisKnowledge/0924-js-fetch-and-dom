// GOAL: 
  // - Connect to a github api
  // - Fetch data and return a promise
  // - Parse that promise to json (javascript object notation)
  // - Use the parsed json in order to work with the data


  // create GithubApi class
  class GithubApi {
    constructor(){
      this.base_url = 'https://api.github.com'
    }
  }

  class SearchGithub {
    static findRepos(githubObj, searchTerm) {
      // EX: https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

      // using concatenetion to create query
      // fetch(BASE_URL + '/search/repositories?q=' + query)
      fetch(githubObj.base_url + `/search/repositories?q=${searchTerm}`)
      .then(function(resp) {return resp.json()})
      .then(objs => Repository.createRepos(objs.items))
     }

  }

    class Repository {
      static all = [];
      constructor(name, html_url, owner, fork) {
        this.name = name;
        this.html_url = html_url;
        this.owner = owner;
        this.fork = fork;

        Repository.all.push(this)
      }

      // create repository objs
      static createRepos(arr) {
        arr.forEach(obj => new Repository(obj.name, obj.html_url, obj.owner.login, obj.fork))

        Repository.renderRepoList();
      }

      static renderRepoList() {
        // grab tbody tags to insert repo info to HTLM (DOM)
        let tbody = document.getElementById('repo-list')
      
        this.all.forEach((obj, i) => {
        // debugger
        let val =`
          <tr>
            <td>${i+1}</td>
            <td>${obj.name }</td>
            <td><a href=${obj.html_url }>${obj.owner }</a></td>
            <td>${obj.fork }</td>
          </tr>
        `
        tbody.innerHTML += val;
      })
    }

    }



function searchGithub(e){
  e.preventDefault();
  const githubApi = new GithubApi() 
  let query = document.getElementById('query').value

  SearchGithub.findRepos(githubApi, query)

  // clear query input 
  document.getElementById('query').value = ''
}

window.addEventListener('load', function(){
  // find target, addEventListener fn, parameters event & cb Fn
  document.querySelector('form').addEventListener('submit', searchGithub)
})
