const url = `https://api.openbrewerydb.org/breweries`;

const container = document.querySelector(".row");

async function brewryData() {
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const res = await data.json();
    container.innerHTML = "";
    res.forEach((brewry) => {
      displayData(brewry);
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

brewryData();

function displayData(obj) {
  container.innerHTML += `
    <div class="col-4">
        <div class="card card-details">
            <div>Brewry's Name: ${obj.name}</div>
            <div>Brewry's Type: ${obj.brewery_type}</div>
            <div>Brewry's Address:${obj.street}</div>
            <div>Brewry's Phone Number:${obj.phone}</div>
            <div>Brewry's Website : ${obj.website_url}</div>
        </div>
    </div>`;
}
