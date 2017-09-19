// JavaScript Nyhedsbrev

function formular(form)
{
	"use strict";
	if(form.mail.value.length===0)
	{
		alert("Udfyld din email adresse");
		form.mail.focus(); //sætter markøren i det valgte felt
		return false;
	}
	
	if(form.nyhed.checked === true){
		confirm("Du har sagt ja til at modtage vores nyhedsbrev");
	}
	
	function checkEmail(mail){
	 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 if (filter.test(mail)){
	 	return true;
	 }
	 return false;
	} 
}

/* Kontakt */


function formular(form)
{
	"use strict";
	if(form.fornavn.value.length===0)
	{
		alert("Udfyld dit fornavn");
		form.fornavn.focus(); //sætter markøren i det valgte felt
		//form.fornavn.style.backgroundColor = "#ffaaaaaa"; - slåe ikke igennem ???
		return false;
	}
	
	if(form.mail.value.length===0)
	{
		alert("Udfyld din email adresse");
		form.mail.focus(); //sætter markøren i det valgte felt
		return false;
	}
	
	if(form.besked.value.length==="")
	{
		alert("Udfyld besked feltet");
		form.besked.focus(); //sætter markøren i det valgte felt
		return false;
	}
	
	function checkEmail(mail){
	 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 if (filter.test(mail)){
	 	return true;
	 }
	 return false;
	} 
}