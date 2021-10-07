    let Container = document.getElementById("Container");
    scrollStep = 200;

    document.getElementById("swipeRight").addEventListener("click", function(e){
        e.preventDefault();
        let sl = Container.scrollLeft,
            cw = Container.scrollWidth;

            if ((sl + scrollStep) >= cw) {
                Container.scrollTo(cw, 0);
            } else {
                Container.scrollTo((sl + scrollStep), 0);
            }

    })

    document.getElementById("swipeLeft").addEventListener("click", function(e){
        e.preventDefault();
        let sl = Container.scrollLeft;

        if ((sl - scrollStep) <= 0) {
            Container.scrollTo(0, 0);
        } else {
            Container.scrollTo((sl - scrollStep), 0);
        }
    })


    /* popup signin form logic */
    let btn = document.getElementById("btn-signin");
    let signin_form = document.getElementById("signin_form");
    let close = document.getElementById("close");

    let main_content = document.getElementById("main-content");


    btn.addEventListener("click", ()=>{
        signin_form.style.transitionProperty = "bottom";
        signin_form.style.bottom = "-20px"
        signin_form.style.transitionTimingFunction = "ease-out";
        signin_form.style.transitionDuration = "1s";
        signin_form.style.transitionDelay = "0.2s";

    })

    close.addEventListener("click", ()=>{
        console.log("click event is fired on close button");
        signin_form.style.bottom = "303px";
    })



