// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

// Displaying game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}



// Function to randomly select a person from the characters array and saved in variable "secret"
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Function to start (and restart) the game
const start = () => {
  // Setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  
  // Displaying the board so we can start the game
  generateBoard();
  
  // When the games starts the secret person will be selected
  setSecret();
   
}

//Sets currentQuestion object when user selects a value in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // Variable that stores the actual value of the question we've selected.
  let valueSelectedQuestion = questions.value
  
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: valueSelectedQuestion,
      // 👆 add the value from the input here
      category,
    };
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute:'eyeColor',
      value: valueSelectedQuestion,    
      category,
    };
    // Set this up your self
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: valueSelectedQuestion,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category,
    }
  } else if (category === 'other') {
     currentQuestion = {
       attribute: valueSelectedQuestion,
       value: true,
       category,
     }
    // Set this up your self (should be same structure as above)
  }
  
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  selectQuestion()
  // Compare the currentQuestion with the secret person.
  const secretAttribute = secret[currentQuestion.attribute]
  
  let willKeep

  if (secretAttribute === currentQuestion.value) {
    // See if we should keep or remove people based on that
    willKeep = true
  }
  else {
    willKeep = false
  }

  // Then invoke filterCharacters
  filterCharacters(willKeep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log(keep)

  const group = currentQuestion.category
  const attribute = currentQuestion.attribute
  const physicalAttribute = currentQuestion.value

  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all wearing ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all wearing ${attribute}`
      )
    }
  } else if (group === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keep all the ${attribute} persons`
      )
    } else {
      alert(
        `No, the person is not a ${attribute}! Remove all the ${attribute} persons`
      )
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
      alert(
        `Yes, the person has ${group} ${physicalAttribute}! Keep all persons with ${group} ${physicalAttribute}`
      )
    } else {
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
      alert(
        `No, the person doesn't have ${physicalAttribute} ${group}. Remove all persons with ${physicalAttribute} ${group} `
      )
    }
  }
  // filter to keep or remove based on the keep variable.
  charactersInPlay = charactersInPlay.filter((person) =>  {
    if (keep) {
      return person[attribute] === physicalAttribute
    } else {
      return person[attribute] !== physicalAttribute
    }   
  })

generateBoard()

}
// Invoking function to redraw the boardwith the remaining people.
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const userConfirms = confirm(`Are you sure you want to guess who the suspect is?`)
  if (userConfirms === true){
    checkMyGuess(suspect)
  }
} 

// If user confirms, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Checking if the suspect is the same as the secret person's name
  // 2. Setting a Message to show in the win or lose section accordingly
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Wow! You guessed right! ${suspect} is the secret person`
  } else {
    winOrLoseText.innerHTML = `Sorry, but you didn't guess. ${suspect} is not the secret person`
  }
  // 3. Showing the win or lose section
  winOrLose.style.display = 'flex'
   // 4. Hiding the game board
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  winOrLose.style.display = 'none'
  board.style.display ='flex' 
  start()
})

