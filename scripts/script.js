let speech = new SpeechSynthesisUtterance();
// we can use this element to use speech


// line 6 to line 18 is used for changing style of speaking by google
// start
let voices = [];

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change",() => {
  speech.voice = voices(voiceSelect.value);
})
// end

document.querySelector("button").addEventListener("click",() =>{
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
})