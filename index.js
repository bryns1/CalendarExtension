window.onload = function(){
    next = document.querySelector('[id^="navForward"]');
    prev = document.querySelector('[id^="navBack"]');
    window.focus();
    
    class KeyBinds{
        constructor(){
            document.addEventListener("keyup", this.navigate)
        }

        navigate(e){
            if(e.key === "ArrowRight"){
                next.click();
            }
            if(e.key === "ArrowLeft"){
                prev.click();
            }
        }
    }

    const keybinds = new KeyBinds()
}
