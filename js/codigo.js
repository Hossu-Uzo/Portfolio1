var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

window.onscroll = function () {
    HeaderScroll();
};

function HeaderScroll() {
    if (document.body.scrollTop > h - 81 || document.documentElement.scrollTop > h - 81) {
        document.getElementById("header").className = "test";
    } else {
        document.getElementById("header").className = "";
    }
}


function setup_for_width(mql) {
    if (mql.matches) {
        document.getElementById("toTeam").href = "#team";
        document.getElementById("toServ").href = "#services";
        document.getElementById("toProjects").href = "#projects";
    } else {
        /*document.getElementById("toTeam").href = "#teamAnchor";
        document.getElementById("toServ").href = "#servicesAnchor";
        document.getElementById("toProjects").href = "#projectsAnchor";*/

    }
}

var width_mql = window.matchMedia("(max-width: 650px)");
width_mql.addListener(setup_for_width);
setup_for_width(width_mql);