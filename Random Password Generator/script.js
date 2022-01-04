function generatePassword()
{
	var password = "";
	var length = document.getElementById('l');
	var output = document.getElementById('out');
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*+=?-_";
	
	if (!document.getElementById('cb1').checked)
		str = str.replace(/[A-Z]/g, "");
	if (!document.getElementById('cb2').checked)
		str = str.replace(/[a-z]/g, "");
	if (!document.getElementById('cb3').checked)
		str = str.replace(/[0-9]/g, "");
	if (!document.getElementById('cb4').checked)
		str = str.replaceAll("!@#$%^&*+=?-_","");
		
	while(1)
	{
		var character = Math.floor(Math.random() * str.length + 1);	
		password = password + str.charAt(character);
		
		if (password.length == length.value)
			break;	
		
	}
	
	output.value = password;
	
}

function cb1_check()
{
	if (!document.getElementById('cb2').checked && !document.getElementById('cb3').checked && !document.getElementById('cb4').checked)
		document.getElementById('cb1').checked = false;
}

function cb2_check()
{
	if (!document.getElementById('cb1').checked && !document.getElementById('cb3').checked && !document.getElementById('cb4').checked)
		document.getElementById('cb2').checked = false;
}

function cb3_check()
{
	if (!document.getElementById('cb1').checked && !document.getElementById('cb2').checked && !document.getElementById('cb4').checked)
		document.getElementById('cb3').checked = false;
}

function cb4_check()
{
	if (!document.getElementById('cb1').checked && !document.getElementById('cb2').checked && !document.getElementById('cb3').checked)
		document.getElementById('cb4').checked = false;
}

function changeToolTip(flag)
{
	if (flag)
	{
		document.getElementById('out').select();
		document.getElementById('out').setSelectionRange(0, 99999); 
		navigator.clipboard.writeText(document.getElementById('out').value);
		document.getElementById('msg').innerHTML = "Password Copied!";
	}
	else
		document.getElementById('msg').innerHTML = "Click to Copy Password!";
}