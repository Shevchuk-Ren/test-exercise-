// 1. returns a Promise that is resolved after ms milliseconds
async function delay(ms) {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
}

const myEvent = delay(4000).then(() => alert('Resolved after 4 seconds'));

// 2. moves the element to the right by 100px over a duration of 1 second

const trainEl = document.querySelector('#train');
const carEl = document.querySelector('#car');


  function animateRight (el) {

    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      el.style.left = timePassed / 10 + 'px';

      if (timePassed > 1000) clearInterval(timer);

    }, 10);
}
animateRight(trainEl)
animateRight(carEl)

// 3 returns: a new array, with unique items
const myArray = ['I', 1, 'love', 2, 'love', 1, 'coding'];
function removeDuplicates(array) {
    return  [...new Set(myArray)];
}

console.log('Variant 1 (unique irems) :', removeDuplicates(myArray));

// or

function removeDuplicates2(array) {
    return  array.filter((v, i, a) => a.indexOf(v) === i);;
}

console.log('Variant 2 (unique irems) :', removeDuplicates2(myArray));