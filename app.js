function navbar() {
    let btn = document.querySelector(".icon");
    let ul = document.querySelector("ul");

    btn.addEventListener("click", function () {
        ul.classList.toggle("showData");

        if (ul.className == "showData") {
            document.getElementById("bar").className = "ri-close-fill";
        } else {
            document.getElementById("bar").className = "ri-menu-line";
        }
    })

}
navbar();



