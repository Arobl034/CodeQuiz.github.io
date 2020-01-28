function Question(obj)
		{
			var objKey = Object.keys(obj);
			if (objKey.length !== 3)
			{
				this.question = "Invalid question object passed";
			}
			else
			{
				this.question = obj[objKey[0]];
				this.options	= obj[objKey[1]];	
				this.answer = obj[objKey[2]];		
			}
		}

		

		Question.prototype.displayQuestion = function(){
				var html = this.question;
				 	html += "<br><br>";
				 	this.options.forEach(function(val){
				 		html += "<input type='radio' name='option' class='options' value='"+val+"'>"+val+"</input><br>";
				 	});
				 	
				return html;
		}

		Question.prototype.isCorrect	= function(reply){
				return reply === this.answer;
		}




var JSON = [{"question":"How do you create a function in JavaScript?","options":["function myfunction()","function=myfunction()","function:function()","myfunction()"],"answer":"function myfunction()"},
					{"question":"How to write an IF statement in JavaScript?","options":["if i=5 then","if i==5 then","if(i=5)","if(i==5)"],"answer":"if(i==5)"},
					{"question":"How does a FOR loop start?","options":["for(1=o;i<10)","for(i=o;i<5)","for(i=0;i<=5;i++)","for(i<5=++"],"answer":"for(i=0;i<=5;i++)"},
					{"question":"How can you add a comment in a JavaScript?","options":["//This is","(This is)","*This is","$This is"],"answer":"//This is"},
					{"question":"Where is the correct place to insert a JavaScript","options":["The body section","the head section","Both body and head section","The HTML section"],"answer":"Both body and head section"},
					{"question":"The external JavaScript file must contain the script tag","options":["Sometimes","True","False","none of the above"],"answer":"False"},
					{"question":"How does a WHILE loop start?","options":["while(i<=10)","while(i<=10;++)","while i=1 to 10","none of the above"],"answer":"while(i<=10)"},
					{"question":"How to insert a comment that has more than one line?","options":["/*This comment has more than one line*/","This comment has more than one line","!This comment has more than one line!","//This comment has more than one line//"],"answer":"/*This comment has more than one line*/"},
					{"question":"How do you round the number 7.25, to the nearest integer?","options":["Math.rnd(7.25)","rnd(7.25)","round(7.25)","Math.round(7.25)"],"answer":"Math.round(7.25)"},
					{"question":"How do you find the number with the highest value of x and y?","options":["Math.max(x,y)","Math.celi(x,y)","top(x,y)","celi(x,y)"],"answer":"Math.max(x,y)"},
					{"question":"JavaScript is the same as Java.","options":["Always","False","True","none of the above"],"answer":"False"},
					{"question":"How can you detect the client's browser name?","options":["navigator.appName","browser.name","client.navName","form.navBar"],"answer":"navigator.appName"},
					{"question":"Which event occurs when the user clicks on an HTML element?","options":["onmouserover","onchange","onclick","onmouseclick"],"answer":"onclick"},
					{"question":"How do you declare a JavaScript variable?","options":["var carName;","variable carName;","v carName;","vrr carName;"],"answer":"var carName;"},
					{"question":"Is JavaScript case-sensitive?","options":["Depends","Yes","No","none of the above"],"answer":"Yes"},
					{"question":"Which operator is used to assign a value to a variable?","options":["-","=","*","x"],"answer":"="}];

		var counter = 1;			
		var score = 0;			
		var displayElement = document.getElementById("question");  
		var nextButton = document.getElementById("next");	
		var timerr = document.getElementById("timer");		
		var intTag = null;									

		displayOnBrowserLoad();

		setTimeout(showQuestion,5000);	
		setTimeout(startTimer,5000);			





		function displayOnBrowserLoad()
		{
			 displayElement.innerHTML = "Question will be displayed here"; 

		}

		function showQuestion()
		{
			var randInt = Math.floor(Math.random()*(JSON.length));	
			var questObject = new Question(JSON[randInt]);			
			
			displayElement.innerHTML = (counter)+". "+questObject.displayQuestion();
			nextButton.value = "Next";								

			window.questObject = questObject; 						
																	
		}


		

		function nextQuestion()
		{	

			if(nextButton.value == "Start Again")		
			{
				startTimer();
			}

			var picked = "";
			var input = document.getElementsByClassName("options");
			for(var i=0;i<input.length;i++)
			{
				if(input[i].checked)
				{
					picked = input[i].value;
				}
			}
			if(questObject.isCorrect(picked))
			{
				score += 1;		
			}
			counter +=1 ;		

			showQuestion();

			if(counter===11)
			{
				terminateQuiz();	
			}
		}

		
		function terminateQuiz()
		{
				displayOnBrowserLoad();	
				alert("Your score is "+score);
				counter = 0;
				score = 0;
				nextButton.value = "Start Again";
			 	clearInterval(intTag);
			 	timerr.innerHTML = "--:--"
		}


		function startTimer()
		{
			var min = 0;
			var sec = 60;
			var m;
			var s;
			intTag = setInterval(function(){
				sec -= 1;
				if(sec==-1)
				{
					min -= 1;
					sec = 60;
				}
				m = (min<10) ? ("0"+min):min;
				s = (sec<10) ? ("0"+sec):sec;
				timerr.innerHTML = m+":"+s;

			},1000);
		}

		
		setInterval(function(){
			if(timerr.innerHTML == "00:00")
			{
				terminateQuiz();
			}
		},1000);