# basics https://basic-react-nine.vercel.app/
# Javascript eventlistener didn't work while calling from the external utility.js
Eventlistener is working fine when using on the page

<script>
document.getElementById("btnListener").addEventListener("click", myFunction);
</script>
https://stackoverflow.com/questions/67577894/javascript-eventlistener-doesnt-work-in-external-js-file

Added null check but didn't work
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null

Finally.. Amazing adding keword differ in the javascript file resolved the issue
    <script src="script/utility.js" defer="defer"></script>
Reference take from here - 
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null

Now, I would like to know why the defer word is so important.

The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.

https://javascript.info/script-async-defer#:~:text=The%20defer%20attribute%20tells%20the,the%20DOM%20is%20fully%20built.