document.addEventListener('DOMContentLoaded', function () {
  const svgContainer = document.getElementById('svgContainer');

  async function addPNGRowToContainer(pngFileNames) {
    const pngRow = document.createElement('div');
    pngRow.classList.add('png-row');

    for (const { folder, fileName } of pngFileNames) {
      const imgElement = document.createElement('img');
      const response = await fetch(`${folder}/${fileName}`);
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);

      imgElement.src = objectURL;
      imgElement.width = 100; // Set the width as needed
      imgElement.height = 100; // Set the height as needed
      imgElement.style.marginRight = '10px'; // Set the right margin to 10 pixels

      pngRow.appendChild(imgElement);
    }

    svgContainer.appendChild(pngRow);
  }

  // Replace 'svg50.csv' with the path to your CSV file
  const csvFilePath = 'order/test_2_predictions.csv';

  // Fetch the CSV file
  fetch(csvFilePath)
    .then(response => response.text())
    .then(csvData => {
      // Parse the CSV data using PapaParse
      Papa.parse(csvData, {
        header: true, // Assumes the first row contains headers
        complete: async function (result) {
          for (const row of result.data) {
            const pngFileNames = [
              //{ folder: 'order/l2r_out_png', fileName: row['File Name'] },
              //{ folder: 'order/l2r_gt_png', fileName: row['File Name'] },
              //{ folder: 'order/l2r_png', fileName: row['File Name'] },{ folder: 'order/kanjivg_png', fileName: row['File Name'] },
              // { folder: 'order/test2_o_order_png', fileName: row['File Name'] },
              // { folder: 'order/test2_s_order_png', fileName: row['File Name'] },
              // { folder: 'order/o_sorted_test2_o_ord_png', fileName: row['File Name'] },
              // { folder: 'order/o_sorted_test2_s_ord_png', fileName: row['File Name'] },
              // { folder: 'order/kanjivg_png', fileName: row['File Name'] },
              // { folder: 'order/kanjivg_sorted_o_png', fileName: row['File Name'] },
              // { folder: 'order/kanjivg_sorted_s_png', fileName: row['File Name'] }
              { folder: 's_2_test_2/shuffle/1/shuffle_1_out_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/shuffle/1/shuffle_1_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/1/origin_1_out_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/1/origin_1_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/2/origin_2_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/3/origin_3_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/4/origin_4_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/5/origin_5_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/6/origin_6_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/7/origin_7_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/8/origin_8_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/9/origin_9_stop_png', fileName: row['filename'] },
              { folder: 's_2_test_2/origin/10/origin_10_stop_png', fileName: row['filename'] }
            ];

            await addPNGRowToContainer(pngFileNames);
          }
        }
      });
    })
    .catch(error => console.error('Error fetching CSV:', error));
});


  
  