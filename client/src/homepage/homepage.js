window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop < 10) {
        document.getElementById("navbar").classList.remove("navbar-light");
        document.getElementById("navbar").classList.add("navbar-dark");
        document.getElementById("navbar").classList.remove("bg-light");
        document.getElementById("navbar").classList.add("bg-transparent");
        console.log(document.documentElement.scrollTop + " uping");
    } else {
        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.remove("bg-transparent");
        document.getElementById("navbar").classList.add("bg-light");
        console.log(document.documentElement.scrollTop + " downing")
    }
})

document.onload = () => {
    if (document.documentElement.scrollTop < 100) {
        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.remove("bg-light");
        document.getElementById("navbar").classList.add("bg-transparent");
        console.log(document.documentElement.scrollTop + " uping");
    } else {
        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.add("navbar-dark");
        document.getElementById("navbar").classList.remove("bg-light");
        document.getElementById("navbar").classList.add("bg-light");
        console.log(document.documentElement.scrollTop + " downing")
    }
}