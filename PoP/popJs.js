// popJs.js

const externalData = [
    { name: "John Doe", location: "Diner", size: "16oz.", user: "JDoe45", rating: "9.0/10", photo: "/project folder/pop/assets/johndoe.jpg" },
    { name: "Alice Johnson", location: "Tea House", size: "12oz.", user: "AJohnson", rating: "7.5/10", photo: "/project folder/pop/assets/alicejohnson.jpg" }
];

function addRowsToTable() {
    const tableBody = document.getElementById("popTable").getElementsByTagName('tbody')[0];

    externalData.forEach(data => {
        const newRow = tableBody.insertRow(tableBody.rows.length);
        const cells = Object.values(data);

        cells.forEach((cellValue, index) => {
            const cell = newRow.insertCell(index);
            cell.appendChild(document.createTextNode(cellValue));
        });
    });
}

addRowsToTable();