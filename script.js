switcher = document.querySelector(".toggle");
console.log("hello")

let main = document.querySelector("body")
switcher.addEventListener("change", (event) => {
    main.classList.toggle("altfont")
    main.classList.remove(".basefont")
    console.log(main)
});

