async function fetchStationsData() {
  const table = document.getElementById('stationsTable');
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = ''; 

  try {
      const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
          headers: {
              'token': 'wbLUFAbsHbjDhAJmmHYiVxQuMtMaAcvc'
          }
      });


      const data = await response.json();
      console.log(data)

      if (data.results && data.results.length > 0) {
          data.results.forEach(station => {
              const row = `
                  <tr>
                      <td>${station.id}</td>
                      <td>${station.name || 'N/A'}</td>
                      <td>${station.state}</td>
                      <td>${station.latitude || 'N/A'}</td>
                      <td>${station.longitude || 'N/A'}</td>
                  </tr>
              `;
              tableBody.insertAdjacentHTML('beforeend', row);
          });
          table.style.display = 'table';
      } else {
          alert("No station data found.");
      }
  } catch (error) {
      alert(error.message);
      table.style.display = 'none';
  }
}