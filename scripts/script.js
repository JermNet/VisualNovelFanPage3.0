Promise.all([
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        }),
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        }),
    fetch('components/icon-bars.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("icon-bars-container").innerHTML = data;
        }),
])
.catch(error => console.error('Error loading components:', error))
.finally(addEventListeners());

function addEventListeners() {
    document.body.addEventListener("click", (ev) => {
        const isExpandableTitle = !!ev.target.closest(".expandable-icon");
        const expandable = ev.target.closest(".expandable");
    
        if (!isExpandableTitle) {
            return;
        }
        expandable.classList.toggle("expandable-open");
    });

    document.addEventListener("keydown", (ev) => {
        const sidenav = document.getElementById("sidenav");
        if (ev.key === "m" || ev.key === "M") {
            if (sidenav && sidenav.style.width === "0px") {
                openNav();
            } else if (sidenav && sidenav.style.width !== "0px") {
                closeNav();
            }
        }
    });
}

function openNav() {
    document.getElementById("sidenav").style.width = "280px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}