let mydiv=document.getElementById("mydiv");
//detect touch device
function isTouchDevice(){
    try{
        //we try to create TouchEvent. 
        //It would fail for desktops and throw error
        document.createEvent("TouchEvent");
        return true;
    }catch(e)
    {
        return false;
    }
}
const move=(e) => {
    //try catch to avoid NY ERRORS for touch screens(Error throen when user doesnt  move his finger)
    try{
        //page x and page y return the position of clients cursor from top lefts of screens
        var x= !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y=!isTouchDevice() ?e.pageY : e.touches[0].pageY;
    }
    catch(e){}
    mydiv.style.left=x+"px";
    mydiv.style.top=y+"px";
};
//for mouse
document.addEventListener("mousemove",(e) => {
    move(e);
});