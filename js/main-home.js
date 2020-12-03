// function for control scroll page to elements
function move (element) {
    let select = document.getElementById(element);
    // console.log(select.offsetTop);

    window.scrollTo(0, select.offsetTop - 80);
}

// function for display arrow scroll top
window.onscroll = () => {
    let select = document.getElementById("arrow-top-id");
    if (window.scrollY >= 900) {
        select.style.display = "block";
    } else {
        select.style.display = "none";
    }
}