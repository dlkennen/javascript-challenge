// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");
var form = d3.select(".form-control");

// Create event handlers 
form.on("submit",runEnter);
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(ufoentry => ufoentry.datetime === inputValue);

    console.log(filteredData);};

    var tbody = d3.select("tbody");

    filteredData.forEach((ufotable) => {
        var row = tbody.append("tr");
        Object.entries(ufotable).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

    //tableData.html("")