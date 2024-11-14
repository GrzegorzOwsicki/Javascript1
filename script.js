(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  async function fetchCountryData() {
    const capital = document.getElementById('capitalInput').value.trim();
    if (!capital) {
        alert("Please enter a capital name.");
        return;
    }

    const response = await fetch(`https://restcountries.com/v3.1/capital/${capital}`);
    const data = await response.json();

    console.log(data)
    const table = document.getElementById('countryTable');
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 
    if (response.ok && data.length > 0) {
        const country = data[0]; 
        const row = `
            <tr>
                <td>${country.name.common}</td>
                <td>${country.capital ? country.capital[0] : 'N/A'}</td>
                <td>${country.population.toLocaleString()}</td>
                <td>${country.region}</td>
                <td>${country.subregion}</td>
            </tr>
        `;
        tableBody.innerHTML = row;
        table.style.display = 'table';
    } else {
        alert("Country not found.");
        table.style.display = 'none';
    }
  }
})