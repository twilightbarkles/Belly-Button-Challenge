// Get the Data endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data 
function barGraph(graphData){
d3.json(url).then (function(data)
{
    // Retrieve data values
    let values = data.samples.filter(data =>data.id == graphData)
    let sampleValues = values[0].sample_values
    let otuId = values[0].otu_ids
    let otuLabels = values[0].otu_labels

    // Setup trace for bar chart
    trace = {
        x: sampleValues.slice(0,10).reverse(),
        y: otuId.slice(0,10).map(otuid =>`OTU `+ otuid).reverse(),
        text: otuLabels.slice(0,10).reverse(),
        type: 'bar',
        orientation: 'h'
    }
let graph = [trace];
// Set Plotly graph to HTML class
Plotly.newPlot("bar", graph);
})}
// Size graph
barGraph("940") 
;