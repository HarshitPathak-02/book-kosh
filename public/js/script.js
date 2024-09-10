function loaderAnimation() {
    var loader = document.querySelector("#loader")
    console.log(loader)
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation();