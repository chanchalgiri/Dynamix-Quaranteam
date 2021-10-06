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

