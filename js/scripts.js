//Lesson wk3 Practice: Roman Numerals but instructions on crypto is actually
//wrong in the lesson see saved github in bookmarks

function crypto(string){

	var newstr = string.replace(/\W/ig, '').toLowerCase(); //normalize get rid of non word chars
	var len = newstr.length;
	var colums;
	var rows;
	var arr = [];
	var k = 0;
	var finalCode = [];

	/*The size of the rectangle (r x c) should be decided by the length of
	the message, such that c >= r and c - r <= 1, where c is the number of
	columns and r is the number of rows. OR choose the number of columns
	that corresponds to the smallest square that is larger than the number
	of characters in the message */
	if(Math.sqrt(len) % 1 === 0)    //if perfect square
	{
		columns = Math.sqrt(len);
		rows = columns;
	}
	else
	{
		columns = Math.ceil(Math.sqrt(len)); //ceil rounds up
		rows = columns - 1;
	}


	//create 2d array of crypto square
	for (var i = 0; i < rows; i++)
	{
		arr[i] = [];      //**** NEED THIS because JS doesn't support 2D array
						  //instead you are making an array of arrays - in this
						  //assignment the ith element is an array
		for (var j = 0; j < columns && k < len; j++)
		{
			arr[i][j] = newstr[k];
			k++;
		}
	}

	//read the crypto square letters by reading down each column
	//then join each coloumn letters to one word and add that to
	//final code array
	for (var a = 0; a < columns; a++)
	{
		var codeletters = [];  //temp regular 1D array

		for(var b = 0; b < rows; b++)
			codeletters.push(arr[b][a]);  //reading down colums


		var oneword = codeletters.join(""); //join letters in array into string no seperator

		finalCode.push(oneword); //add each code word into finalCode array
	}

	//join array of code words to string (space seperator) and return
	return finalCode.join(" ");

}


$(document).ready(function(){


	$("form#original").submit(function(event){

		event.preventDefault();

		var string = $("input#words").val();

		var code = crypto(string);

		$("#origString").text(string);
		$("#codeString").text(code);

	});

});
