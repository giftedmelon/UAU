document.addEventListener('DOMContentLoaded', function () {
    const svgContainer = document.getElementById('svgContainer');
  
    function addSVGToContainer(folder, svgFileName) {
      const svgObject = document.createElement('object');
      svgObject.data = `${folder}/${svgFileName}`;
      svgObject.type = 'image/svg+xml';
      svgObject.width = 200; // Set the width as needed
      svgObject.height = 200; // Set the height as needed
      svgObject.style.marginRight = '10px'; // Set the right margin to 10 pixels
  
      svgContainer.appendChild(svgObject);
    }
  
    // Replace 'svg50.csv' with the path to your CSV file
    const csvFilePath = 'test/testing_data/test_fold_1.csv';
  
    // Fetch the CSV file
    fetch(csvFilePath)
      .then(response => response.text())
      .then(csvData => {
        // Parse the CSV data using PapaParse
        Papa.parse(csvData, {
          header: true, // Assumes the first row contains headers
          complete: function (result) {
            // Iterate over the rows and get the SVG file names from the "File name" column
            result.data.forEach(row => {
              const svgFileName = row['File Name']; // Replace 'File name' with the actual column name
              // console.log(svgFileName)
              addSVGToContainer('test/outline_50', svgFileName);
              addSVGToContainer('test/skeleton_50', svgFileName);
              addSVGToContainer('test/test_result_1', svgFileName);
            });
          }
        });
      })
      .catch(error => console.error('Error fetching CSV:', error));
  });
  
  