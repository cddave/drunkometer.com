<!-- hiding for old browsers
	// response time test, created by Jasper van Zandbeek
	// e-mail: jasperz@net-v.com

var startTime=new Date();
var endTime=new Date();
var startPressed=false;
var bgChangeStarted=false;
var maxWait=20;
var timerID;
var gmePlye = false;

function startTest()
{
	document.body.style.background=document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
	bgChangeStarted=true;
	startTime=new Date();
}

function remark(responseTime)
{
	var c=parseInt(sessionStorage.getItem("score"));

	if(isNaN(c))
		sessionStorage.setItem("score", 8);
	var responseString="";
	if (responseTime < 0.10){
		sessionStorage.setItem("score", c+10);
		responseString="Well done!";
	}
	if (responseTime >= 0.10 && responseTime < 0.20){
		sessionStorage.setItem("score", c+8);
		responseString="Nice!";
	}
	if (responseTime >=0.20 && responseTime < 0.30){
		sessionStorage.setItem("score", c+6);
		responseString="Could be better...";
	}
	if (responseTime >=0.30 && responseTime < 0.60){
		sessionStorage.setItem("score", c+4);
		responseString="Keep practising!";
	}
	if (responseTime >=0.60 && responseTime < 1){
		sessionStorage.setItem("score", c+2);
		responseString="Have you been drinking?";
	}
	if (responseTime >=1){
		responseString="Did you fall asleep?";
	}

	return responseString;
}

function stopTest()
{
	if(bgChangeStarted)
	{
		endTime=new Date();
		var responseTime=(endTime.getTime()-startTime.getTime())/1000;
		alert("Your response time is: " + responseTime + " seconds " + "\n" + remark(responseTime));
		document.body.style.backgroundImage = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,192,0,1) 0%, rgba(246,214,0,1) 62.5% )";
		startPressed=false;
		bgChangeStarted=false;
		gmePlye = true;
	//	setTimeout(
	//		function(){
	//			window.location.href ="question8.html";
	//		},1000);
	}
	else
	{
		if (!startPressed)
		{
			alert("press start first to start test");
		}
		else
		{
			clearTimeout(timerID);
			startPressed=false;
			alert("cheater! you pressed too early!");
		}
	}
}

var randMULTIPLIER=0x015a4e35;
var randINCREMENT=1;
var today=new Date();
var randSeed=today.getSeconds();
function randNumber()
{
	randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
	return((randSeed >> 15) & 0x7fff) / 32767;
}

function startit()
{
	if(startPressed)
	{
		alert("Already started. Press stop to stop");
		return;
	}
	else
	{
		startPressed=true;
		timerID=setTimeout('startTest()', 6000*randNumber());
	}
}

function next(){
	if(gmePlye)
		window.location.href ="question8.html";
	else
		alert("Plwe ply the gme");
}
