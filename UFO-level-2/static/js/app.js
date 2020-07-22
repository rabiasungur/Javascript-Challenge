/*
* Using the UFO dataset provided in the form of an array of JavaScript objects, 
  write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

    * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and 
  search through the `date/time` column to find rows that match user input.
*/
// from data.js
var tableData = data;
console.log(tableData);

// Get the table body
var tbody = d3.select("tbody");

// Values for each column
tableData.forEach(function(ufoData) {
    var row = tbody.append("tr");

    Object.entries(ufoData).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
      console.log(key, value);
    });
  });

// Select the filter button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    var filteredDate = tableData.filter(sighting => sighting.city === inputValue);
    var filteredDate = tableData.filter(sighting => sighting.state === inputValue);
    var filteredDate = tableData.filter(sighting => sighting.country === inputValue);
    var filteredDate = tableData.filter(sighting => sighting.shape === inputValue);
    console.log(filteredData);


    filteredData.forEach(function(selections) {
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
        console.log(key, value);
    });
});
});