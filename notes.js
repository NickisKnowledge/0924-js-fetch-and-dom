// place to store code for later reference

// addEventListner Docs:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Github API Docs: 
https://developer.github.com/v3/

// Asyn JS & fetch errors stuff
fetch(BASE_URL + `/search/repositories123?q=${query}`)
.then(resp => {
  console.log('b')
  // debugger
  if (resp.status != 200){
    throw new Error(resp.statusText)
  } else {
    resp.json()
  }
})
.then(objs => {
  console.log('c')
// debugger
})
.catch(err => console.log('d', err))

console.log('e')

// with throwing error & bad url
// a d b c 
// a e b d
// correct: a e b d

// with 123 in url
// a e b d
// a e d
// a e b c d 
// correct: a e b c

// b c
// c
// b c e 
// b c d e
// correct: a e b c
