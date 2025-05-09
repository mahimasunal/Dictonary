const inputWord = document.querySelector('.input_word')
const searchBtn = document.querySelector('.search')
const searchResult = document.querySelector('.result')
const dictionary = document.querySelector('.dictionary')
console.log(dictionary)



searchBtn.addEventListener('click', ()=>{

  let word = inputWord.value
  getWordData(word)
  console.log(searchResult)
})

function getWordData(word){
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {
     data = data[0]
    console.log(data)
    searchResult.innerHTML = `
    <div class="word">
    <h2>${data.word}</h2>
    <button type='button' class='audio'>Play</button>
  </div>
  <div class='grammer'>
    <p>${data.meanings[0].partOfSpeech} ${data.phonetic || ''}</p>
    <p>${data.meanings[0].definitions[0].definition} </p>
  </div>
  <div class="example">
    <p>${data.meanings[0].definitions[0].example || ''} </p>
  </div>
    `
  })
  .catch(err => console.log(err))
}

// getWordData('hello')


// const word = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
// console.log(word.Response)