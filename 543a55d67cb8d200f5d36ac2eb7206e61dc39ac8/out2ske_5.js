document.addEventListener('DOMContentLoaded', function () {
  const svgContainer = document.getElementById('svgContainer');

  async function addSVGRowToContainer(svgFileNames) {
    const svgRow = document.createElement('div');
    svgRow.classList.add('svg-row');

    for (const { folder, fileName } of svgFileNames) {
      const svgObject = document.createElement('object');
      const response = await fetch(`${folder}/${fileName}`);
      const svgContent = await response.text();

      svgObject.type = 'image/svg+xml';
      svgObject.width = 100; // Set the width as needed
      svgObject.height = 100; // Set the height as needed
      svgObject.style.marginRight = '10px'; // Set the right margin to 10 pixels
      svgObject.data = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;

      svgRow.appendChild(svgObject);
    }

    svgContainer.appendChild(svgRow);
  }

  // Replace 'svg50.csv' with the path to your CSV file
  const csvFilePath = 'test/testing_data/test_fold_5.csv';

  // Fetch the CSV file
  fetch(csvFilePath)
    .then(response => response.text())
    .then(csvData => {
      // Parse the CSV data using PapaParse
      Papa.parse(csvData, {
        header: true, // Assumes the first row contains headers
        complete: async function (result) {
          for (const row of result.data) {
            const svgFileNames = [
              { folder: 'test/outline_50_v2', fileName: row['File Name'] },
              { folder: 'test/outline_50_v0', fileName: row['File Name'] },
              { folder: 'test/outline_50', fileName: row['File Name'] },
              { folder: 'test/skeleton_50_v2', fileName: row['File Name'] },
              { folder: 'test/skeleton_50_v0', fileName: row['File Name'] },
              { folder: 'test/skeleton_50', fileName: row['File Name'] },
              { folder: 'test/test_result_5', fileName: row['File Name'] },
              { folder: 'test/overlap_50_skeleton/test_5', fileName: row['File Name'] }
            ];

            await addSVGRowToContainer(svgFileNames);
          }
        }
      });
    })
    .catch(error => console.error('Error fetching CSV:', error));
});

  
  