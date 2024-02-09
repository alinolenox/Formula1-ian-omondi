document.addEventListener("DOMContentLoaded", function () {
    fetch('http://ergast.com/api/f1/drivers.json')
        .then(response => response.json())
        .then(data => {
            const drivers = data.MRData.DriverTable.Drivers;

            const tableBody = document.querySelector('#driversTable tbody');

            drivers.forEach(driver => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${driver.givenName}</td>
                    <td>${driver.familyName}</td>
                    <td>${driver.dateOfBirth}</td>
                    <td>${driver.nationality}</td>
                    <td><a href="${driver.url}" target="_blank">More Info</a></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});