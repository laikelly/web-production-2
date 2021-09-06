const myTitle = 'Love Yourself'
let myObject = {
    'adjectives': ['strongest', 'amazing', 'powerful', 'beautiful', 'wonderful', 'special'],
    'nouns': ['person', 'individual', 'being', 'human', 'soul']
}
let myArticleArray = ['the', 'an', 'a']

function returnPoem(title, article, noun, adjective) {
    return title + ': The journey of becoming ' + article + ' ' + adjective + ' ' + noun
}

W(returnPoem(myTitle, getRandomItem(myArticleArray), getRandomItem(myObject.nouns), getRandomItem(myObject.adjectives)))

function forLoopPoem(title, articles, nouns, adjectives) {
    // W(title)
    for (i = 0; i < 3; i++) {
        W('You are ' + articles[i] + ' ' + nouns[i] + ' ' + adjectives[i])
    }
}

forLoopPoem(myTitle, myArticleArray, myObject.adjectives, myObject.nouns)


// while loop poem:
let counter = 0
while (counter < 6) {
    W(getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.nouns))
    counter++
}

//select random word from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
}
