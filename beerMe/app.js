var $clickYourDay = document.querySelectorAll('.your-day')
var $picDiv = document.querySelector('.allPics')
var $main = document.querySelector('main')
let apiUrl = ''


$clickYourDay.forEach((meme)=> {
  meme.addEventListener('click', function () {
    var clickedId = event.target.id
    makeQueryString(clickedId)
    console.log(apiUrl)
    hideClickedElement()
    showResetButton()
    getBeer()
  })
})

function getBeer (){
  console.log(apiUrl)
fetch(apiUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data);
    var selectedBeer = getRandomNumber(data)
    createDiv(selectedBeer)

  })
  .catch(function(err) {
    console.log(err.message)
  })
}

  function hideClickedElement() {
    $picDiv.setAttribute('style', 'display: none;')
  }

  function showResetButton() {
    var $resetButton = document.createElement('button')
    $resetButton.classList = 'reset-button'
    $main.appendChild($resetButton)
  }

  function makeQueryString(clickedId){
    switch (clickedId) {
      case '1':
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=4.1'
        break;
      case '2':
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=8&abv_gt=4'
        break;
      case '3':
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=12&abv_gt=8'
        break;
      case '4':
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=17&abv_gt=12'
        break;
      case '5':
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_gt=17'
        break;
      default:
      console.log('nope');

    }
    return apiUrl
  }

  function createDiv(beer){
    var $aboveButton = document.querySelector('.reset-button')
    var $beerDiv = document.createElement('div')
    $beerDiv.classList = 'your-beer'
    $beerDiv.innerHTML = "<img src= `${beer.img_url}`> <h3>`${beer.name}`</h3><p>`${beer.abv}`</p><p>`${beer.description}`</p>"
    $main.appendChild($beerDiv)

  }

  function getRandomNumber(data) {
    var lengthOfArray = data.length
    var randomBeerSelection = Math.floor(Math.random() * lengthOfArray)
    return  data[randomBeerSelection]
  }
