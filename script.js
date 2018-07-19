var asteroids = [
    {
        name: 'Asteroid 1',
        age: 30
    },

    {
        name: 'Asteroid 2',
        age: 32        
    },

    {
        name: 'Asteroid 3',
        age: 31        

    },

    {
        name: 'Asteroid 4',
        age: 35        
    },

    {
        name: 'Asteroid 5',
        age: 40

    },
    {
        name: 'Asteroid 6',
        age: 70
    },
    {
        name: 'Asteroid 7',
        age: 31        

    },

    {
        name: 'Asteroid 8',
        age: 35        
    },

    {
        name: 'Asteroid 9',
        age: 40

    },
    {
        name: 'Asteroid 10',
        age: 70
    },
    {
        name: 'Asteroid 11',
        age: 70
    }                     
];

let currentPage = 0;
let pageSize = 5;
let currentPageItems = [];
let previousPageItems = [];


function initializeTable() {    
    if (asteroids.length > pageSize) {
        currentPageItems = asteroids.slice(0, pageSize);
        document.getElementById('nextPageButton').disabled = false;
        document.getElementById('previousPageButton').disabled = true;
    } else {
        currentPageItems = asteroids;
        document.getElementById('nextPageButton').disabled = true;
        document.getElementById('previousPageButton').disabled = true;
    }

    fillCurrentPageItems();
}

function navigateToNextPage() {
    let numberOfElementsToPlaceInNextPage = ((asteroids.length > currentPage * pageSize + pageSize) ? pageSize : asteroids.length - currentPage * pageSize)
    
    if (currentPageItems) {
        previousPageItems = currentPageItems;
    }
    currentPage++;
    currentPageItems = asteroids.slice(currentPage * pageSize, currentPage*pageSize+numberOfElementsToPlaceInNextPage);

    if (asteroids.indexOf(currentPageItems[currentPageItems.length-1]) == asteroids.length-1) {
        document.getElementById('nextPageButton').disabled = true;        
    }
    document.getElementById('previousPageButton').disabled = false;
    
    fillCurrentPageItems();
    
}

function navigateToPrevoiusPage() {
    currentPageItems = previousPageItems;
    fillCurrentPageItems();
    document.getElementById('nextPageButton').disabled = false;
    currentPage--;

    if (currentPage == 0) {        
        document.getElementById('previousPageButton').disabled = true;
        previousPageItems = [];
    } else {
        previousPageItems = asteroids.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize)
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    initializeTable();
});

function fillCurrentPageItems() {
    let table = document.getElementById('asteroids-table');
    clearTable(table);
    
    currentPageItems.forEach(item => {
        let firstColumnCell = document.createElement("TD");
        let firstColumnText = document.createTextNode(item.name);
        firstColumnCell.appendChild(firstColumnText);

        let secondColumnCell = document.createElement("TD");
        let secondColumnText = document.createTextNode(item.age);
        secondColumnCell.appendChild(secondColumnText);

        table.appendChild(firstColumnCell);
        table.appendChild(secondColumnCell);        
    })
}

function clearTable(table) {
    var table = document.getElementById('asteroids-table');
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}