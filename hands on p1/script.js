/*function score(){

switch(score) {
    case 100:
        grade = "A";
        break;
    case 90:
        text = "B";
        break;
    case 80:
        text = "C";
        break;
    case 70:
        text = "D";
        break;
    case 60:
        text = "E";
        break;
    case 50:
        text = "F";
        break;
    case 40:
        text = "G";
        break;
    case 30:
        text = "H";
        break;
    case 20:
        text = "I";
        break;
    case 10:
        text = "J";
        break;
    default:
        text = "Report to counseling...";

        
    }
}

var score = document.getElementById("scoreNumber").innerHTML = "Grade " + grade;*/

function score(){
    var score = document.getElementById("scoreNumber");
    var grade = document.getElementById("scoreNumber");
    var text  = '';
  
    switch(grade) {
      case grade.value >= 90:
          text = "A";
          break;
      case grade.value >= 80:
          text = "B";
          break;
      case grade.value >= 70:
          text = "C";
          break;
      case grade.value >= 60:
          text = "D";
          break;
      case grade.value < 60:
          text = "F";
          break;
      default:
          text = "Report to counseling...";
    }
    score.innerHTML = "Grade " + text;
  }
  
  grade.addEventListener('change', score);
  grade.addEventListener('keyup', score);
  
  
  