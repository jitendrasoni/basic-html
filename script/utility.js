function showmessageAlert()
{
   alert('Test Message from the file');
}

function showmessage(element)
{
   alert('The called action is   ' +  element.value  );
}

//Add event AudioListener


document.getElementById("btnListener")?.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}