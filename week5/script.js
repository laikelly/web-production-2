//Make your own array of 5 objects with at least 4 keys
// This one only has 3 right now!
let myDramas = [{
    'title': 'Healer',
    'country': 'South Korea',
    'episodes': '20',
    'genres': 'Action, Thriller, Mystery, Romance'
}, {
    'title': 'Love is Sweet',
    'country': 'China',
    'episodes': '36',
    'genres': 'Business, Comedy, Romance'
}, {
    'title': 'Mouse',
    'country': 'South Korea',
    'episodes': '20',
    'genres': 'Thriller, Mystery, Sci-fi'
}, {
    'title': 'Someday or One Day',
    'country': 'Taiwan',
    'episodes': '13',
    'genres': 'Thriller, Romance, Sci-fi, Fantasy'
}, {
    'title': 'You Are My Glory',
    'country': 'China',
    'episodes': '32',
    'genres': 'Comedy, Romance, Life, Youth'
}]


function showElements(array) {
    let container = O('object-container')
    //clear out the inner HTML in case we call this function again
    container.innerHTML = ''
    //use a for loop to add the items from the array - you can just add it to the innerHTML, or use the createDiv function below and .appendChild to the container
    for (let i = 0; i < array.length; i++) {
        let item = createDiv(array[i])
        container.appendChild(item)
    }
}

// showElements(myDramas)

/*function makeDramaLibrary(array) {
  let library = O('drama-library')
  //clear out the HTML in case we call it again
  library.innerHTML = ''
  for (let drama of array) {
    let dramaDiv = createDiv('Title', drama.title)
    dramaDiv.className = 'drama-div'
    library.appendChild(dramaDiv)
  }
}
makeDramaLibrary(myDramas)

let elementArray = document.querySelectorAll('.drama-div')
function showDramaInformation(HTMLArray, objectArray) {
  for (let i = 0; i < HTMLArray.length; i++) {
    HTMLArray[i].onclick = function() {
      O(HTMLArray[i]).innerHTML += '<br> Country: ' + objectArray[i].country + '<br> Total Episodes: ' + objectArray[i].episodes + '<br> Genres: ' + objectArray[i].genres
    }
  }
}

showDramaInformation(elementArray, myDramas)
*/


function addDrama() {
    // add inputs for your own keys
    let titleInput = O('key-1')
    let countryInput = O('key-2')
    let episodesInput = O('key-3')
    let genresInput = O('key-4')

    // change these to your own keys
    let title = titleInput.value
    let country = countryInput.value
    let episodes = episodesInput.value
    let genres = genresInput.value
    // create a new object - again, change this to your own keys
    let item = {
        title: title,
        country: country,
        episodes: episodes,
        genres: genres
    }
    myDramas.push(item)
    console.log('my dramas: ', myDramas)
    //if we don't call showElements again, it won't display the new one
    showElements(myDramas)
    //zero out the inputs
    titleInput.value = ''
    countryInput.value = ''
    episodesInput.value = ''
    genresInput.value = ''
}

function createDiv(object) {
    let div = document.createElement("div")
    //you could add more properties to the textContent, or set its innerHTML to properties
    div.innerHTML += 'Title: ' + object.title + '<br> Country: ' + object.country + '<br> Total Episodes: ' + object.episodes + '<br> Genres: ' + object.genres
    S(div).backgroundColor = '#d7c5fc'
    S(div).border = 'double'
    return div
}

function getRandomItem(array) {
    //don't worry about the math here, this just selects a random item from the array
    //but it could be useful if you want to do something similar!

    return array[Math.floor(Math.random() * array.length)]
}
