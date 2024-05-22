function reqListener() {
    let total = JSON.parse(this.responseText);
    console.table(total);
    for (let country of total) {
      console.log(
        country.name.common,
        "\n",
        country.region,
        "\n",
        country.subregion,
        "\n",
        country.population
      );
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();