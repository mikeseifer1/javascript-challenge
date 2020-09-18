// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);

      
//Pull in all the data from the data.js file and append to a table on the website.
tableData.forEach((alienReport) => {
var row = tbody.append("tr");
Object.entries(alienReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
});
});

//Set the botton to the date selected
var button = d3.select("#filter-btn");
var form = d3.select("#form-group");
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    //Clear all table data
    var table = document.getElementById("ufo-table");
   
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }

    // Prevent the page from refreshing
    

    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);

    //Get the filtered data and return it to the website
    var filtered_Data = tableData.filter(inputDate => inputDate.datetime === inputValue);
    console.log(filtered_Data); 

    filtered_Data.forEach((alienReport) => {
        var row = tbody.append("tr");
        Object.entries(alienReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });
//Code used in the second half of the assignment
    // var filtered_Data_city = tableData.filter(inputCity => inputCity.city === inputValue);
    // console.log(filtered_Data_city); 

    // filtered_Data_city.forEach((alienReport) => {
    //     var row = tbody.append("tr");
    //     Object.entries(alienReport).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    //     });

    // var filtered_Data_state = tableData.filter(inputState => inputState.state === inputValue);
    // console.log(filtered_Data_city); 

    // filtered_Data_state.forEach((alienReport) => {
    //     var row = tbody.append("tr");
    //     Object.entries(alienReport).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    //     });

    // var filtered_Data_country = tableData.filter(inputCountry => inputCountry.country === inputValue);
    // console.log(filtered_Data_city); 

    // filtered_Data_country.forEach((alienReport) => {
    //     var row = tbody.append("tr");
    //     Object.entries(alienReport).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    //     });

    // var filtered_Data_shape = tableData.filter(inputShape => inputShape.shape === inputValue);
    // console.log(filtered_Data_city); 

    // filtered_Data_shape.forEach((alienReport) => {
    //     var row = tbody.append("tr");
    //     Object.entries(alienReport).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    //     });

}
