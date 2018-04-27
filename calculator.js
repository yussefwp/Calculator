
// CALCULATOR.JS
//   Note: Look at 04_SampleProgram first
//
//

// 
var equation = "";
var memory = "";

var Calc = {


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  buttonPlus : {id: "buttonPlus", type: "button", value: '+', onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  buttonPoint : {id: "buttonPoint", type: "button", value: '.', onclick:""},
  buttonEqual : {id: "buttonEqual", type: "button", value: '=', onclick:""},
  buttonDiv : {id: "buttonDiv", type: "button", value: '/', onclick:""},
  buttonMinus : {id: "buttonMinus", type: "button", value: '-', onclick:""},
  buttonMul : {id: "buttonMul", type: "button", value: '*', onclick:""},
  buttonClear : {id: "buttonClear", type: "button", value: 'C', onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: 'MR', onclick:""},
  buttonMM : {id: "buttonMM", type: "button", value: 'M-', onclick:""},
  buttonMP : {id: "buttonMP", type: "button", value: 'M+', onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: 'MC', onclick:""}
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7);
  s += Calc.displayElement(Calc.View.button8);
  s += Calc.displayElement(Calc.View.button9);
  s += Calc.displayElement(Calc.View.buttonPlus);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += Calc.displayElement(Calc.View.button5);
  s += Calc.displayElement(Calc.View.button6);
  s += Calc.displayElement(Calc.View.buttonMinus);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button2);
  s += Calc.displayElement(Calc.View.button3);
  s += Calc.displayElement(Calc.View.buttonMul);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonPoint);
  s += Calc.displayElement(Calc.View.buttonEqual);
  s += Calc.displayElement(Calc.View.buttonDiv);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonClear);
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonMM);
  s += Calc.displayElement(Calc.View.buttonMP);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.buttonMC);
  s += "</tr></td></table>";
  return s;
},

attachHandlers : function() {
  Calc.View.button1.onclick = "Calc.button1Handler()";
  Calc.View.button2.onclick = "Calc.button2Handler()";
  Calc.View.button3.onclick = "Calc.button3Handler()";
  Calc.View.button4.onclick = "Calc.button4Handler()";
  Calc.View.button5.onclick = "Calc.button5Handler()";
  Calc.View.button6.onclick = "Calc.button6Handler()";
  Calc.View.button7.onclick = "Calc.button7Handler()";
  Calc.View.button8.onclick = "Calc.button8Handler()";
  Calc.View.button9.onclick = "Calc.button9Handler()";
  Calc.View.buttonPlus.onclick = "Calc.buttonPlusHandler()";
  Calc.View.button0.onclick = "Calc.button0Handler()";
  Calc.View.buttonPoint.onclick = "Calc.buttonPointHandler()";
  Calc.View.buttonEqual.onclick = "Calc.buttonEqualHandler()";
  Calc.View.buttonDiv.onclick = "Calc.buttonDivHandler()";
  Calc.View.buttonMinus.onclick = "Calc.buttonMinusHandler()";
  Calc.View.buttonMul.onclick = "Calc.buttonMulHandler()";
  Calc.View.buttonClear.onclick = "Calc.buttonClearHandler()";
  Calc.View.buttonMR.onclick = "Calc.buttonMRHandler()";
  Calc.View.buttonMM.onclick = "Calc.buttonMMHandler()";
  Calc.View.buttonMP.onclick = "Calc.buttonMPHandler()";
  Calc.View.buttonMC.onclick = "Calc.buttonMCHandler()";
},

button1Handler : function() {
  equation += "1";
  document.getElementById("textRow").value = equation;
},

button2Handler : function() {
  equation += "2";
  document.getElementById("textRow").value = equation;
},

button3Handler : function() {
  equation += "3";
  document.getElementById("textRow").value = equation;
},

button4Handler : function() {
  equation += "4";
  document.getElementById("textRow").value = equation;
},

button5Handler : function() {
  equation += "5";
  document.getElementById("textRow").value = equation;
},

button6Handler : function() {
  equation += "6";
  document.getElementById("textRow").value = equation;
},

button7Handler : function() {
  equation += "7";
  document.getElementById("textRow").value = equation;
},

button8Handler : function() {
  equation += "8";
  document.getElementById("textRow").value = equation;
},

button9Handler : function() {
  equation += "9";
  document.getElementById("textRow").value = equation;
},

buttonPlusHandler : function() {
  equation += "+";
  document.getElementById("textRow").value = equation;
},

button0Handler : function() {
  equation += "0";
  document.getElementById("textRow").value = equation;
},

buttonPointHandler : function() {
  equation += ".";
  document.getElementById("textRow").value = equation;
},

buttonEqualHandler : function() {
  var value = eval(equation);
  equation = value;
  document.getElementById("textRow").value = equation;
},

buttonDivHandler : function() {
  equation += "/";
  document.getElementById("textRow").value = equation;
},

buttonMinusHandler : function() {
  equation += "-";
  document.getElementById("textRow").value = equation;
},

buttonMulHandler : function() {
  equation += "*";
  document.getElementById("textRow").value = equation;
},

buttonClearHandler : function() {
  equation = "";
  document.getElementById("textRow").value = equation;
},

buttonMRHandler : function() {
  document.getElementById("textRow").value = memory;
},

buttonMMHandler : function() {
  memory -= equation;
  document.getElementById("textRow").value = memory;
},

buttonMPHandler : function() {
  memory = equation;
},

buttonMCHandler : function() {
  memory = "";
  document.getElementById("textRow").value = equation;
}

} // end of Calc;
