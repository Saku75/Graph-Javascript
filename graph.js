// Get DOM element: #graph
const graphElement = document.getElementById("graph");

graph(graphElement, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

// Function to draw graph (input graph element and graph data)
function graph(graphElement, graphData) {
	// Create graphDisplay element
	const graphDisplay = document.createElement("div");

	// Apply styles to graph element
	graphDisplay.style.display = "flex";
	graphDisplay.style.flexDirection = "row";
	graphDisplay.style.alignItems = "flex-end";
	graphDisplay.style.gap = "1%";
	graphDisplay.style.width = "100%";
	graphDisplay.style.height = "100%";
	graphDisplay.style.padding = "1rem";

	graphElement.appendChild(graphDisplay);

	// Get max value from graph data
	const maxValue = Math.max(...graphData);

	// Loop through graph data
	graphData.forEach((value, index) => {
		// Create bar element
		const bar = document.createElement("div");

		// Apply styles to bar element
		bar.style.display = "flex";
		bar.style.flexDirection = "column";
		bar.style.width = "100%";
		bar.style.height = `calc(${value} / ${maxValue} * 100%)`;
		bar.style.backgroundColor = "#000";

		// Append bar to graph
		graphDisplay.appendChild(bar);
	});
}
