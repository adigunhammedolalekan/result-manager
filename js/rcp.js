/*
 *	Project: Result Checking Portal Script
 *	Author: Oguntuberu Nathan O.
 *	Date: 04 - 06 - 2018
*/

var RCP = {
	/*	*/
	/*	*/
	createCourseCodeRow: function(data)
	{
		var parent = document.getElementById("course-codes");
		var li = document.createElement('li');
		li.innerHTML = data;
		
		parent.appendChild(li);
	},
	createCourseTitleRow: function(data)
	{
		var parent = document.getElementById("course-titles");
		var li = document.createElement('li');
		li.innerHTML = data;
		
		parent.appendChild(li);
	},
	createCourseUnitRow: function(data)
	{
		var parent = document.getElementById("course-units");
		var li = document.createElement('li');
		li.innerHTML = data;
		
		parent.appendChild(li);
	},
	createCourseScoreRow: function(data)
	{
		var parent = document.getElementById("course-scores");
		var li = document.createElement('li');
		li.innerHTML = data;
		
		parent.appendChild(li);
	},
	createCourseGradeRow: function(data)
	{
		var parent = document.getElementById("course-grades");
		var li = document.createElement('li');
		li.innerHTML = data;
		
		parent.appendChild(li);
	},
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
				var response = JSON.parse(request.responseText);
				if(response.isSuccessful)
				{
					localStorage.setItem('result', JSON.stringify(response.result));
					localStorage.setItem('aggregates', JSON.stringify(response.aggregates));
				}else
				{
					alert('Could not get result');
				}
			}
		};
	},
	displayAggregates: function()
	{
		var aggr = JSON.parse(localStorage.getItem('aggregates'));
		var semTotalUnit = document.getElementById('stu');
		var semTotalPoint = document.getElementById('stp');
		var semGPA = document.getElementById('sgpa');
		var cummTotalUnit = document.getElementById('ctu');
		var cummTotalPoint = document.getElementById('ctp');
		var cummGPA = document.getElementById('cgpa');
		
		semTotalUnit.innerHTML = aggr.stu;
		semTotalPoint.innerHTML = aggr.stp;
		semGPA.innerHTML = aggr.sgpa;
		cummTotalUnit = aggr.ctu;
		cummTotalPoint = aggr.ctp;
		cummGPA = aggr.cgpa;
	},
	displayResult: function()
	{
		var result = JSON.parse(localStorage.getItem('result'));
		for(var course in result)
		{
			if(course)
			{
				RCP.createCourseCodeRow(course.code);
				RCP.createCourseTitleRow(course.title);
				RCP.createCourseUnitRow(course.unit);
				RCP.createCourseScoreRow(course.score);
				RCP.createCourseGradeRow(course.grade);
			}
		}
		
	}
};