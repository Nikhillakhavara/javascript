let valuesDisplay= document.querySelectorAll(".num");
let interval=1000;

valuesDisplay.forEach((valuesDisplays)  => {
    let startValue=0;
    let endValue=parseInt(valuesDisplays.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function()
    {
        startValue +=1;
        valuesDisplays.textContent=startValue;
        if(startValue==endValue)
        {
            clearInterval(counter);
        }
    },duration);
})