new fullpage('#fullpage', {
    sectionsColor: ['#fff', '#fff', '#fff'],
    navigation: true,
    navigationPosition: 'right',
    scrollBar: false,
    scrollOverflow: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    menu: '#menu'
});

document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.href === location.href) {
        link.classList.add('active');
    }
});

$('#inv-table').DataTable({
    "pageLength": 6,
});
$(document).ready(function () {
    $('#inv-table').DataTable();
});

const labels = [
    'Historical Fiction',
    'Romance',
    'Fantasy',
    'Science Fiction',
    'Mystery',
    'Self-Help',
    'Autobiography'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Number of books',
        backgroundColor: ['#AEC8AD', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3'],
        borderColor: ['#AEC8AD', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3'],
        data: [5, 4, 2, 1, 1, 1, 1],
    }]
};

const config = {
    type: 'bar',
    data: data,
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const data2 = {
    datasets: [{
        label: 'Overall Rating',
        backgroundColor: ['#DEEEDD', '#fff'],
        borderColor: ['#DEEEDD', '#fff'],
        data: [9.1, 0.9],
    }]
};

const config2 = { 
    type: 'pie',
    data: data2,
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);

$(document).on('click','.project-filter li',function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});

$(document).ready(function(){
    
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value=='favs'){
            $('.card').show('1000');
        }
        else{
            $('.card').not('.'+value).hide('1000');
            $('.card').filter('.'+value).show('1000');
        }
    })
})

function showSVG() {
    var svgContainer = document.getElementById('svgContainer');
    svgContainer.style.display = (svgContainer.style.display === 'none' || svgContainer.style.display === '') ? 'block' : 'none';
}

function closeSVG() {
    var svgContainer = document.getElementById('svgContainer');
    svgContainer.style.display = 'none';
}

function showSVG1() {
    var svgContainer1 = document.getElementById('svgContainer1');
    svgContainer1.style.display = (svgContainer1.style.display === 'none' || svgContainer1.style.display === '') ? 'block' : 'none';
}

function closeSVG1() {
    var svgContainer1 = document.getElementById('svgContainer1');
    svgContainer1.style.display = 'none';
}

function showSVG2() {
    var svgContainer2 = document.getElementById('svgContainer2');
    svgContainer2.style.display = (svgContainer2.style.display === 'none' || svgContainer2.style.display === '') ? 'block' : 'none';
}

function closeSVG2() {
    var svgContainer2 = document.getElementById('svgContainer2');
    svgContainer2.style.display = 'none';
}

function showSVG3() {
    var svgContainer3 = document.getElementById('svgContainer3');
    svgContainer3.style.display = (svgContainer3.style.display === 'none' || svgContainer3.style.display === '') ? 'block' : 'none';
}

function closeSVG3() {
    var svgContainer3 = document.getElementById('svgContainer3');
    svgContainer3.style.display = 'none';
}

function showSVG4() {
    var svgContainer4 = document.getElementById('svgContainer4');
    svgContainer4.style.display = (svgContainer4.style.display === 'none' || svgContainer4.style.display === '') ? 'block' : 'none';
}

function closeSVG4() {
    var svgContainer4 = document.getElementById('svgContainer4');
    svgContainer4.style.display = 'none';
}

function showSVG5() {
    var svgContainer5 = document.getElementById('svgContainer5');
    svgContainer5.style.display = (svgContainer5.style.display === 'none' || svgContainer5.style.display === '') ? 'block' : 'none';
}

function closeSVG5() {
    var svgContainer5 = document.getElementById('svgContainer5');
    svgContainer5.style.display = 'none';
}

function showSVG6() {
    var svgContainer6 = document.getElementById('svgContainer6');
    svgContainer6.style.display = (svgContainer6.style.display === 'none' || svgContainer6.style.display === '') ? 'block' : 'none';
}

function closeSVG6() {
    var svgContainer6 = document.getElementById('svgContainer6');
    svgContainer6.style.display = 'none';
}

function showSVG7() {
    var svgContainer7 = document.getElementById('svgContainer7');
    svgContainer7.style.display = (svgContainer7.style.display === 'none' || svgContainer7.style.display === '') ? 'block' : 'none';
}

function closeSVG7() {
    var svgContainer7 = document.getElementById('svgContainer7');
    svgContainer7.style.display = 'none';
}

function showSVG8() {
    var svgContainer8 = document.getElementById('svgContainer8');
    svgContainer8.style.display = (svgContainer8.style.display === 'none' || svgContainer8.style.display === '') ? 'block' : 'none';
}

function closeSVG8() {
    var svgContainer8 = document.getElementById('svgContainer8');
    svgContainer8.style.display = 'none';
}

function showSVG9() {
    var svgContainer9 = document.getElementById('svgContainer9');
    svgContainer9.style.display = (svgContainer9.style.display === 'none' || svgContainer9.style.display === '') ? 'block' : 'none';
}

function closeSVG9() {
    var svgContainer9 = document.getElementById('svgContainer9');
    svgContainer9.style.display = 'none';
}

function showSVG10() {
    var svgContainer10 = document.getElementById('svgContainer10');
    svgContainer10.style.display = (svgContainer10.style.display === 'none' || svgContainer10.style.display === '') ? 'block' : 'none';
}

function closeSVG10() {
    var svgContainer10 = document.getElementById('svgContainer10');
    svgContainer10.style.display = 'none';
}

function showSVG11() {
    var svgContainer11 = document.getElementById('svgContainer11');
    svgContainer11.style.display = (svgContainer11.style.display === 'none' || svgContainer11.style.display === '') ? 'block' : 'none';
}

function closeSVG11() {
    var svgContainer11 = document.getElementById('svgContainer11');
    svgContainer11.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const reserveButtons = document.querySelectorAll('.reserve');
    reserveButtons.forEach((button) => {
        tippy(button, {
            content: 'Reserve this book?',
            placement: 'bottom',
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-text');
    const cardContainers = document.querySelectorAll('.card-container .card');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchBar.value.toLowerCase();

        cardContainers.forEach(function (card) {
            const title = card.querySelector('.card-title').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function reserveBook(clickedButton) {
    clickedButton.textContent = 'Reserved';
    clickedButton.classList.add('reserved');
    clickedButton.removeAttribute('onclick');
    clickedButton.style.backgroundColor = '#d3d3d3';
    clickedButton.style.color = 'black';
}