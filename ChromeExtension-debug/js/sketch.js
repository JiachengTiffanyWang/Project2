let affirmations = ["You are so talented!", "GREAT WORK!", "So proud of you!", "Look at how amazing you are!","You got this!", "You are an intellectual masterpiece", "Pressure builds diamonds.", "What doesn't kill you make you stronger!","Holy moly you're a genius", "Nothing is stopping you anymore.", "You're such a powerful human being.", "Hard work pays off, and will pay you extra.", "You're killing it!", "Look at you getting all the work done!", "This is just a note that I appreciate you so much as a robot", "Show the world what you're made of.", "Spread your wings and soar!", "You are so courageous!", "No one compares to you.", "Look at you conquering all fears fearlessly!","I don't have hands, but I want to clap for you"];

document.body.insertAdjacentHTML('afterbegin', '<div id="p5Canvas"></div>') //Embed in body

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5Canvas');
  textSize(width / 35);
  textAlign(CENTER, CENTER);
  fill(228, 113, 124);
  textFont('Georgia');
  textStyle(BOLDITALIC);
  text('Font Style Bold Italic');
}

function draw() {
  // clear();
 circle (mouseX, mouseY, 25);
}

function mouseClicked (){
  clear(); //all the text will stay at the page if you don't clear the background
  let affirmation = random (affirmations);
  console.log(affirmation);
  text(affirmation, mouseX, mouseY) ;

}