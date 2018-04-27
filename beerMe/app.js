var $clickYourDay = document.querySelectorAll('.your-day')
var $picDiv = document.querySelector('.allPics')
var $main = document.querySelector('main')
$main.classList = 'beer-main'
let apiUrl = ''


$clickYourDay.forEach((meme)=> {
  meme.addEventListener('click', function () {
    var clickedId = event.target.id
    makeQueryString(clickedId)
    hideClickedElement()
    showResetButton()
    getBeer()
  })
})

function getBeer (){
fetch(apiUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
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
    var $resetButton = document.createElement('a')
    $resetButton.classList = 'reset-button'
    $resetButton.textContent = 'Have Another'
    $resetButton.href = "characters.html"
    $main.appendChild($resetButton)
  }

  function makeQueryString(clickedId){
    switch (clickedId) {
      case '1':
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=4'
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
    $main.appendChild($beerDiv)
    createImg(beer, $beerDiv)
    createH3(beer, $beerDiv)
    createP1(beer, $beerDiv)
    createP2(beer, $beerDiv)
    createFindBeer(beer, $beerDiv)
  }
function createImg(beer, $parent) {
  var $img = document.createElement('img')

  $img.src = beer.image_url
  $parent.appendChild($img)
}
function createH3(beer, $parent) {
  var $h3 = document.createElement('h3')
  $h3.textContent = beer.name
  $parent.appendChild($h3)
}
function createP1(beer, $parent) {
  var $p1 = document.createElement('p')
  $p1.textContent = beer.abv
  $parent.appendChild($p1)
}
function createP2(beer, $parent) {
  var $p2 = document.createElement('p')
  $p2.textContent = beer.description
  $parent.appendChild($p2)
}

function createFindBeer(beer, $parent){
  var tapUrl = `https://www.taphunter.com/search/?search=${beer.name}`
  var $a = document.createElement('a')
  $a.textContent = 'Find Me That Beer'
  $parent.appendChild($a)
  $a.href = tapUrl
  $a.target = "_blank"
}

  function getRandomNumber(data) {
    var lengthOfArray = data.length
    var randomBeerSelection = Math.floor(Math.random() * lengthOfArray)
    return  data[randomBeerSelection]
  }
