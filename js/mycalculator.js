
// FUNCTIONS OF THE CALCULATOR
var value = document.getElementById("display").value;
var firstNumber;
var secondNumber;
var operator;
var operatorValue;
var result;
var _equalTo = false;

function on(){
	document.getElementById("display").value = 0;
	operator = '';
	operatorValue = '';
	firstNumber = 0;
	_equalTo = false;
}

function off(){
	document.getElementById("display").value = "";
}

function saveScreen(){

	if( "" == document.getElementById("display").value )
		return;

	if(_equalTo)
	document.getElementById("display").value = 0;
	
	if( '' == operator )
		return;

	document.getElementById("display").value = 0;
	operatorValue = operator;
	operator = '';
}

// the number function starts from here ->
function num0(){

	saveScreen();

	if( document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 0;
	}
	else if (document.getElementById("display").value === "0") {
		document.getElementById("display").value = 0;
	}
	else{
		;
	}
}

function num1(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 1;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 1;
	}
	else{
		;
	}
}

function num2(){
	
	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 2;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 2;
	}
	else{
		;
	}
}

function num3(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 3;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 3;
	}
	else{
		;
	}
}

function num4(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 4;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 4;
	}
	else{
		;
	}
}

function num5(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 5;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 5;
	}
	else{
		;
	}
}

function num6(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 6;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 6;
	}
	else{
		;
	}
}

function num7(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 7;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 7;
	}
	else{
		;
	}
}

function num8(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 8;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 8;
	}
	else{
		;
	}
}

function num9(){

	saveScreen();

	if(document.getElementById("display").value !== "0" && document.getElementById("display").value !== ""){
		document.getElementById("display").value += 9;
	}
	else if(document.getElementById("display").value === "0"){
		document.getElementById("display").value = 9;
	}
	else{
		;
	}
}

function point(){
	
	if( "" == document.getElementById("display").value )
		return;

	saveScreen();

	if (document.getElementById("display").value == document.getElementById("display").value) {
		document.getElementById("display").value +=".";
	}
}
// the number functions ends here <-

function clr(){
	if( document.getElementById("display").value !== "" )
		document.getElementById("display").value = 0;

	operator = '';
	operatorValue = '';
}

function del(){

	if( "" == document.getElementById("display").value )
		return;

	var displaystring = document.getElementById("display").value;
	var lastnumber = displaystring.slice(0, -1);
	
	if (document.getElementById("display").value !== displaystring.charAt(0)) {
		document.getElementById("display").value = lastnumber;
	}

	else if (document.getElementById("display").value == displaystring.charAt(0)) {
		document.getElementById("display").value = 0;
	}
}

function doTempOperation(){
	
	var temp = 0;
	
	if('-' == operatorValue )
		temp = Number(firstNumber) - Number(document.getElementById("display").value);
	if('+' == operatorValue )
		temp = Number(firstNumber) + Number(document.getElementById("display").value);
	if('*' == operatorValue )
		temp = Number(firstNumber) * Number(document.getElementById("display").value);
	if('/' == operatorValue )
		temp = Number(firstNumber) / Number(document.getElementById("display").value);		

    return temp;
}

function minus(){
	
	if(document.getElementById("display").value == "")
		return;
		
	result = doTempOperation();
	
	//result = Number(firstNumber) - Number(document.getElementById("display").value);
	
	//result = Number( result );
	if('' != operatorValue )
	document.getElementById("display").value = result;

	firstNumber = document.getElementById("display").value;			
		
	if('0.' == firstNumber )
		firstNumber = 0;

	operator = '-';
}

function plus(){
	
	if(document.getElementById("display").value == "")
		return;

	//else if (document.getElementById("dispaly").value == value) {
		//firstNumber + secondNumber;
	
	result = doTempOperation();	

	if('' != operatorValue )
	document.getElementById("display").value = result;

	firstNumber = document.getElementById("display").value;			
		
	if('0.' == firstNumber )
		firstNumber = 0;

	operator = '+';
}

function multiply(){
	if(document.getElementById("display").value == "")
		return;

	result = doTempOperation();
	
	if('' != operatorValue )
	document.getElementById("display").value = result;
	
	firstNumber = document.getElementById("display").value;			
		
	if('0.' == firstNumber )
		firstNumber = 0;

	operator = '*';
}

function divide(){
	if(document.getElementById("display").value == "")
		return;

	result = doTempOperation();

	if('' != operatorValue )
	document.getElementById("display").value = result;

	firstNumber = document.getElementById("display").value;			
		
	if('0.' == firstNumber )
		firstNumber = 0;

	operator = '/';
}

function sqrt(){
	if(document.getElementById("display").value == "")
		return;

	document.getElementById("display").value = Math.sqrt(document.getElementById("display").value);
	operator = '';
	operatorValue = '';
}

function square(){
	if(document.getElementById("display").value == "")
		return;

	document.getElementById("display").value = (document.getElementById("display").value)*(document.getElementById("display").value);
	operator = '';
	operatorValue = '';
}


//start here with the operators
function equalTo(){

	result = doTempOperation();

	if( '' == operator )
		document.getElementById("display").value = result;

	//firstNumber = document.getElementById("display").value;			
	_equalTo = true;	
	//if('0.' == firstNumber )
		//firstNumber = 0;

	//operatorValue = '';
}

function ans(){
	equalTo();
}