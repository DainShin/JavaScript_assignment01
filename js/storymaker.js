// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
// I set the constant variables for the buttons because the valuese of buttons remain unchanged
const noun1 = document.getElementById("noun1");
const verb = document.getElementById("verb");
const adjective = document.getElementById("adjective");
const noun2 = document.getElementById("noun2");
const setting = document.getElementById("setting");
const stuButton = document.getElementById("stuButton");

// Constants for p tag to display query selectors
// I set the constant variables for the p tags because the valuese remain unchanged
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
// I set the constant variables for the buttons because the valuese of buttons remain unchanged
const playback = document.getElementById("playback");
const random = document.getElementById("random");

// Variables for pre-defined arrays
// I set the values accroding to the referencce
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", " a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my sapghetti", "in my soup", "on the grass", " in my shoes"];

// Variables for count to grab array elements
// I set these values by using let, because values will contain different values everytime click the buttons 
let noun1Cnt = 0;
let verbCnt = 0;
let adjectiveCnt = 0;
let noun2Cnt = 0;
let settingCnt = 0;


let text = "";

/* Functions
// when each function is called, it will set the value in each section according to the ranmdom value 
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Cnt = Math.floor(Math.random()* nouns1.length);
    choosenNoun1.textContent = nouns1[noun1Cnt];
}

function verb_on_click() {
    verbCnt = Math.floor(Math.random()* verbs.length);
    choosenVerb.textContent = verbs[verbCnt];
}

function adjective_on_click() {
    adjectiveCnt = Math.floor(Math.random()* adjectives.length);
    choosenAdjective.textContent = adjectives[adjectiveCnt];
}

function noun2_on_click() {
    noun2Cnt = Math.floor(Math.random()* nouns2.length);
    choosenNoun2.textContent = nouns2[noun2Cnt];
}

function setting_on_click() {
    settingCnt = Math.floor(Math.random()* settings.length);
    choosenSetting.textContent = settings[settingCnt];
}

// concatenate the user story and display
// In the p tag called story, the sentence will be shown in a line 
function playback_on_click() {
    document.getElementById('story').textContent = nouns1[noun1Cnt] + " " + verbs[verbCnt] + " " + nouns2[noun2Cnt] + " " + settings[settingCnt];
    console.log(nouns1[noun1Cnt] + " " + verbs[verbCnt] + " " + nouns2[noun2Cnt] + " " + settings[settingCnt]);
}

// grabbing random element from arrays, concatenate and display
// If this function is called, it will call each on_click functions and randomly make a sentence all at once
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

// when the button is clicked, this function will be called and show my student ID and my name
function stuinfo_on_click() {
    var stuInfo = "200535561 / DainShin";
    var studentId = document.getElementById('studentId');
    studentId.textContent = stuInfo;
}

/* Event Listeners
// When each buttons has click event, it will call the functions which make the random values
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
stuButton.addEventListener("click", stuinfo_on_click);