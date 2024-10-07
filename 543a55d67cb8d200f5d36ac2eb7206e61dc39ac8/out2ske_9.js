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
  const csvFilePath = 'colab/test_1_cd.csv';

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
              { folder: 'colab/test_result/cd/mistral/mistral_out_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/cd/mistral/mistral_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/l2r_t2b/mistral/mistral_out_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/l2r_t2b/mistral/mistral_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/outline_base/mistral/mistral_out_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/outline_base/mistral/mistral_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/kanjivg_base_l2r_t2b/mistral/mistral_out_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/kanjivg_base_l2r_t2b/mistral/mistral_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/kanjivg_base/mistral/mistral_out_stop_png', fileName: row['File Name'] },
              { folder: 'colab/test_result/kanjivg_base/mistral/mistral_stop_png', fileName: row['File Name'] },
            ];

            await addPNGRowToContainer(pngFileNames);
          }
        }
      });
    })
    .catch(error => console.error('Error fetching CSV:', error));
});


  
  