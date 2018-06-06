/*
 *	Project: Result Checking Portal Script
 *	Author: Oguntuberu Nathan O.
 *	Date: 04 - 06 - 2018
*/

var RCP = {
	/*	*/
	/*	*/
	getResult: function(studentId, session, semester)
	{
		var request = system.createAjaxObject();
		request.open('post', './process/get-result.php');
		request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		request.send('student='+studentId+'&session='+session+'&semester='+semester);
		//
		request.onreadystatechange = function(){
			if(request.readyState === 4)
			{
				var response = request.responseText;
			}
		};
	}
};