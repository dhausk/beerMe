var $clickYourDay = document.querySelectorAll('.your-day')
let clickedId;
let apiUrl;

$clickYourDay.forEach((meme)=> {
  meme.addEventListener('click', function () {
    clickedId = event.target.id
    makeQueryString(clickedId)
    hideClickedElement()
    showResetButton()
    getShit()
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
    $clickYourDay.class = 'hidden'
  }

  function showResetButton() {
    var $resetButton = document.createElement('button')
    $resetButton.classList = 'reset-button'
    $clickYourDay.append($resetButton)
  }

  function makeQueryString(clickedId){
    switch (clickedId) {
      case 1:
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=4.1'
        break;
      case 2:
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=8&abv_gt4'
        break;
      case 3:
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=12&abv_gt8'
        break;
      case 4:
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_lt=17&abv_gt12'
        break;
      case 5:
        apiUrl = 'https://api.punkapi.com/v2/beers?abv_gt17'
        break;
      default:

    }
  }

  function createDiv(){
    
  }

  function getRandomNumber(data) {
    var lengthOfArray = data.length
    var randomBeerSelection = Math.floor(math.random() * lengthOfArray)
    return  data[randomBeerSelection]
  }
