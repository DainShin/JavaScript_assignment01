// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.getElementById("noun1");
const verb = document.getElementById("verb");
const adjective = document.getElementById("adjective");
const noun2 = document.getElementById("noun2");
const setting = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playback = document.getElementById("playback");
const random = document.getElementById("random");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", " a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my sapghetti", "in my soup", "on the grass", " in my shoes"];

// Variables for count to grab array elements
let noun1Cnt = 0;
let verbCnt = 0;
let adjectiveCnt = 0;
let noun2Cnt = 0;
let settingCnt = 0;


let text = "";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    noun1Cnt = Math.floor(Math.random()* nouns1.length);
    choosenNoun1.textContent = nouns1[noun1Cnt];
    

    // if-else to change count setting
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
function playback_on_click() {
    document.getElementById('story').textContent = nouns1[noun1Cnt] + " " + verbs[verbCnt] + " " + nouns2[noun2Cnt] + " " + settings[settingCnt];
    console.log(nouns1[noun1Cnt] + " " + verbs[verbCnt] + " " + nouns2[noun2Cnt] + " " + settings[settingCnt]);
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
