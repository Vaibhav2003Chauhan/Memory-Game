
let random_numbers = []; // array of random numbers
var words;
var selected_words_array = [];

// function to fecth words from the api 

async function getwords() {
    const response = await fetch("https://dummyjson.com/products/categories");
    words = await response.json();
    // console.log(words);

    let wordButtons = document.querySelectorAll('.words');
    let idSpan;

    " Unhiding the numbers in all the words"
    wordButtons.forEach(button => {
        idSpan = button.querySelector('.id');
        idSpan.classList.remove('hidden'); // Unhide the <span> element
    });
    let word_section = document.getElementById('word_section')

    for (let i = 0; i < words.length; i++) {
        word_section.innerHTML += `<button class="words">
    <span class="id">${i + 1}</span>&nbsp;
    
    <span class="word">${words[i]}</span>
   </button>`
    }
}

// shuffle an array 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// function to generate the random number

function generate_number() {



    // generating and printing the shuffled array 
    let word_section = document.getElementById('word_section')
    word_section.innerHTML = '';
    let shuffled_words = shuffleArray(words);
    console.log(shuffleArray.length)
    for (let i = 0; i < shuffled_words.length; i++) {
        word_section.innerHTML += `<button class="words" onclick=word_selection(${i + 1})>
    <span class="id ">${i + 1}</span>&nbsp;
    
    <span class="word">${words[i]}</span>
   </button>`
    }


    " Hiding the numbers in all the words"

    let wordButtons = document.querySelectorAll('.words');
    let idSpan
    wordButtons.forEach(button => {
        idSpan = button.querySelector('.id');
        idSpan.classList.add('hidden'); // Add the "hidden" class to hide the span // Hide the <span> element
    });




    // generating a random number 
    for (let i = 0; i < 3; i++) {
        let randomchoice = Math.floor(Math.random() * 20) + 1;

        let randomnum = Math.min(Math.max(randomchoice, 1), 20); // stricictly maing in beytween 1 and 20 


        console.log(randomnum);
        console.log("random in range ")
        random_numbers.push(randomnum);
    }
    console.log(random_numbers) // printing random number array 



    // printing random number to check memory-ability
    let list_of_randomnumber = document.getElementById('random_number_list');
    list_of_randomnumber.innerHTML = ' ';

    for (let i = 0; i < random_numbers.length; i++) {


        list_of_randomnumber.innerHTML += `<button class="hidden_words">
        <span class="ran_num">${random_numbers[i]}</span>
        <span id="selected_word${i+1}"></span>
    </button>`
        console.log("printing a random numbers")
    }
    random_numbers = []; // eliminating the number to remove redundanncy 

}


function word_selection(index) {


    if (selected_words_array.length >=3) {
        alert("You have fullfilled your choices please deselect an word to enter new word");
    }
    else {
        let selectedWordSpan = document.getElementById(`selected_word${selected_words_array.length + 1}`);
        selectedWordSpan.textContent = words[index - 1];
        selected_words_array.push(words[index - 1]);

    }
    console.log(selected_words_array)
    
    
}
