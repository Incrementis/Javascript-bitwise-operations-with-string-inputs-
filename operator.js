/*
NOTE: 	The code could be optimized by writing only one function, 
		but due to simplicity and readability there were implemented two functions.
*/

//Operators = [~ , ^ , &, |]
function bitwise()
{

	//Getting Html result tag
	var operators 		= document.getElementById('BA_operators');
	var first_operand 	= document.getElementById('BA_operand_one');
	var second_operand 	= document.getElementById('BA_operand_two');
	var result = document.getElementById('BA_result');
	
	//Getting the specific selected operator
	var operator = operators.options[operators.selectedIndex].value;
	
	
	if(operator === "~")
	{
		//No second operand needed due to operator
		first_operand.value = "";
		second_operand
		//Bitwise "NOT"
		result.innerHTML = ~second_operand.value;
		
	}
	else if(operator === "&")
	{
		//Bitwise "AND"
		result.innerHTML = first_operand.value & second_operand.value;
				
	}
	else if(operator === "^")
	{
		//Bitwise "XOR"
		result.innerHTML = first_operand.value ^ second_operand.value;
	}
	else
	{
		//Bitwise "OR"
		result.innerHTML = first_operand.value | second_operand.value;
	}
}



//Operators = [<< , >> , >>>]
function shift()
{


	//Getting Html result tag
	var operators 		= document.getElementById('SH_operators');
	var first_operand 	= document.getElementById('SH_operand_one');
	var second_operand 	= document.getElementById('SH_operand_two');
	var result = document.getElementById('SH_result');
	
	//Getting the specific selected operator
	var operator = operators.options[operators.selectedIndex].value;
	
	
	if(operator === "<<")
	{	
		//Bitwise "LEFT-SHIFT"
		result.innerHTML = first_operand.value << second_operand.value;
		
	}
	else if(operator === ">>")
	{
		//Bitwise "RIGHT-SHIFT"
		result.innerHTML = first_operand.value >> second_operand.value;
				
	}
	else
	{
		//Bitwise "ZERO-FILL-RIGHT-SHIFT"
		result.innerHTML = first_operand.value >>> second_operand.value;
	}
}



//NOTE: There are different ways to realize and optimize the following examples in js.
//		To split it in two seperate functions should simplify code readability. 

function example1()
{
	var result = document.getElementById('ex_one');
	
	//result should be 4
	result.innerHTML = "2" * 2;
}


function example2()
{
	var result = document.getElementById('ex_two');
	
	//result should be 9
	result.innerHTML = "8" | 1;
}