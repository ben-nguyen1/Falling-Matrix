//when the Go button is clicked
function go()
{
    canvas = document.getElementById('c');
    context = canvas.getContext("2d");

    characters = document.getElementById('input').value;
    characters = characters.split("");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    fontSize = document.getElementById('font').value;
    speed = document.getElementById('speed').value;

    canDrop = true;

    columns = canvas.width/fontSize;

    //checks if user entered a fontSize of speed
    if (fontSize == '')
    {
        alert("you have to put in a font size!");
        canDrop = false;
    }
    if (speed == '')
    {
        alert("you have to put in a speed!");
        canDrop = false;
    }
    if (canDrop)
    {
        drops = [];
        for(i = 0; i < columns; i++)
            drops[i] = 1;
        interval = setInterval(fall, +speed);
        document.getElementById('go').disabled = true;
    }

}
//add the falling numbers to the context
function fall()
{
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, c.width, c.height);
    context.fillStyle = "#0F0";
    context.font = fontSize + "px arial";
    for(i = 0; i < drops.length; i++)
    {
        text = characters[Math.floor(Math.random()*characters.length)];
        context.fillText(text, i*fontSize, drops[i]*fontSize);

        //for randomness of falling characters
        if(drops[i]*fontSize > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}

//stops the falling
function stop()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    clearInterval(interval);
    document.getElementById("go").disabled = false;
}



