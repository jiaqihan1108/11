
//show time
function rendertime(){
	var currentTime =new Date();
	var h = currentTime.getHours();
	var m=currentTime.getMinutes();
	var s=currentTime.getSeconds();
	var Mytime=document.getElementById("timeDisplay");
	Mytime.innerHTML= h +':'+ m +':'+s;
	setTimeout("rendertime()",1000);
}

//last modify date
function lastModify(){
    var modiDate = new Date(document.lastModified);
    var showAs = modiDate.getDate() + "-" + (modiDate.getMonth() + 1) + "-" + modiDate.getFullYear();
    document.getElementById("Modifydate").innerHTML='Last modified on '+showAs;
}

//date format verification
function submitt(){
	var d=document.getElementById("day").value;
	var m=document.getElementById("month").value;
	var y=document.getElementById("year").value;
	if(d&&m&&y)
	{alert("You are successfully submitted!");}
	else
		{alert("Please enter the valid dates");}
	
}

//user login verification
function verification(){
	//got login form
	var acct = document.getElementById("signemail").value;
	
	//password must contain numbers and must>8 digits.
	//verify the account, format of the email
	var idx_mail = acct.indexOf("@");
	var idx_dot = acct.lastIndexOf(".");
	
	if (acct == null || idx_mail<1 || (idx_dot)-(idx_mail)<2 ){
		alert('warning, you need to enter your valid email address.');
	}
	

	
}

//pass and repass must be same
function passcheck(){
	var pass1 = document.getElementById("signpass").value;
	var pass2 = document.getElementById("signrepass").value;
	if (pass1 != pass2 || pass1==""){
		alert('Invalid Password!');
		return false;
	}
	else return true;
}

function accountcheck(){
	var accto = document.getElementById("signacco").value;

	if (accto==""){
		alert('Account can not be none!');
	}
}