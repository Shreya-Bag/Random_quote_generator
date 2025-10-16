const quotes = [
  "The quietest moments often carry the loudest truths.",
  "Dreams don’t demand perfection; they demand persistence.",
  "Courage is not the absence of fear, but the decision to keep walking with it.",
  "Even shadows prove that light exists.",
  "The future whispers to those who listen, not to those who shout.",
  "You don’t find balance — you build it, one choice at a time.",
  "Kindness is the only investment that never loses value.",
  "When you stop racing others, you finally begin the marathon within.",
  "Change begins quietly — and ends loudly.",
  "Your peace is a fortress; guard it with intention.",
  "Don’t chase moments — create them.",
  "Growth rarely feels like progress until you look back.",
  "The stars don’t compete to shine; they just do.",
  "Some answers are only found after you stop asking.",
  "What you nurture daily becomes your destiny.",
  "Every setback is a rehearsal for resilience.",
  "The strongest people are often the softest with others.",
  "Clarity arrives when you let silence finish its sentence.",
  "You can’t rewrite the past, but you can edit your reaction to it.",
  "Light doesn’t argue with darkness — it simply appears."
];

function generate(){

let index = Math.floor(Math.random()*quotes.length);
const text = document.getElementById("quote");
text.innerHTML=quotes[index];}

function color(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let r1,g1,b1;
    r1= 255-r;
    g1= 255-g;
    b1=255-b;

    let element= document.querySelector('body');
    //element.style=`background-color: rgb(${r},${g},${b})`;
    element.style = `background: linear-gradient(135deg, rgb(${r},${g},${b}) 50%, rgb(${r1},${g1},${b1}) 50%)`;
}

setInterval(generate,5000);
setInterval(color,5000);