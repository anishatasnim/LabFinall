function f1()
{

	var name1=document.getElementById('name').value;
	if(name1=="" || name1.length<2 )
	{
		document.getElementById('name').value="incorrect";
	}
	else
	{
		name1=document.getElementById('name').value;
		document.getElementById('name').innerHTML=name1;
	}
   
}
function f2()
{
	var id1=document.getElementById('id').value;
	
	if(id1=="" || id1<=0 )
	{
		alert(incorrect);
	}
    else 
	{
		id1=document.getElementById('id').value;
		document.getElementById('id').innerHTML=id1;
	}
	
}
function f3()
{
	
    var pass1=document.getElementById('pass').value;
	if(pass1=="" || pass1.length<5 )
	{
		document.getElementById('pass').value="incorrect";
	}
	else
	{
		if(pass1.includes(@)|| pass1.includes(#)||pass1.includes($))
		{
			alert("okaaa");
			//document.getElementById('pass').value="correct";
		}
		else
		{
			alert("You have to insert a special character @ , # or $");
		}
	}
}
function f4()
{
	var cpass1=document.getElementById('cpass').value;
	if(cpass1=="")
	{
		document.getElementById('cpass').value="incorrect";
	}
	else
	{
		if(document.getElementById('cpass').value==document.getElementById('pass').value)
		{
			alert("Correct");
		}
	}
}
function f5()
{
	var email1=document.getElementById('email').value;
	if(email1=="")
	{
		document.getElementById('email').value="incorrect";
	}
	else
	{
		if(email1.includes(@gmail.com))
		{
			email1 = document.getElementById('email').value;
			document.getElementById('email').innerHTML=email1;
		}
	}
}