//Javascript HW - Diana Kennen
// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button and input form
var button = d3.select("#filter-btn");
var form = d3.select(".form-control");

// Create event handlers 
form.on("submit",runEnter);
button.on("click", runEnter);

//Select the table body
var tbody = d3.select("tbody");
console.log(tableData)

//Displaying unfiltered data table
tableData.forEach((ufotable) => {
  var row = tbody.append("tr");
  Object.entries(ufotable).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
});

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Emptying table
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  //If then conditional to reset with the complete table or use a filtering date.
  //If the input field is blank or deleted, use the full table data to complete the table.
  if (inputValue === "") {
    tableData.forEach((ufotable) => {
      var row = tbody.append("tr");
      Object.entries(ufotable).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
    }); 
  //If the input field contains a date, create a new filtered data array for completing the table. 
  } else {
      var filteredData = tableData.filter(ufoentry => ufoentry.datetime === inputValue);

      console.log(filteredData);

      filteredData.forEach((ufotable) => {
      var row = tbody.append("tr");
      Object.entries(ufotable).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      });
    });}}