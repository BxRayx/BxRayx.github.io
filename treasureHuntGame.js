//  Connect HTML to JS

  // alert("You are connected!")

// three random outcomes
  // rainbow(victory)
  // bomb(lose)
  // tree(try again)

// assign each tile in td to 🎄,💣,🌈
  // bomb cannot be the same tile as treasure
  // all tiles should be random

  const button = document.querySelector('button')
button.onclick = () => {
  window.location.reload();
}

var bomb = Math.floor(Math.random() * 9 )
var treasureLocation = Math.floor(Math.random() * 9 )
if(treasureLocation === bomb){
var treasureLocation = Math.floor(Math.random() * 9 )}


  const treasure = (location) => {
      if(treasureLocation === location){
        alert("YOU WIN!")
        return document.getElementById(location).innerHTML = "🌈"
    }
      else if(bomb === location){
        alert("YOU LOSE!")
        return document.getElementById(location).innerHTML = "💣"
        }
      else {
        return document.getElementById(location).innerHTML = "🎄"
      }
}

// there can be MULTIPLE or NO bombs or treasures
// *alerts (you lose) before the bomb shows up*
// boxes are clickable multiple times
// game doesn't end on a bomb/treasure selection
