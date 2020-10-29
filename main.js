function fetchData() {
  fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => {
            if (!response.ok) {
            throw Error('Error');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.querySelector('#cases').innerHTML=data.cases
        document.querySelector('#recovered').innerHTML=data.recovered
        document.querySelector('#deaths').innerHTML=data.deaths
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();