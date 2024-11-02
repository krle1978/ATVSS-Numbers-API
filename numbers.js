document.addEventListener("DOMContentLoaded", function() {
    // Pronađi elemente u DOM-u
    const numBox = document.getElementById("num-box");
    const fetchNumButton = document.getElementById("fetch-num");
    const fetchRandomNumButton = document.getElementById("fetch-random-num");
    const output = document.getElementById("output");
  
    // Dodaj event listener za dugme za fetchovanje
    fetchNumButton.addEventListener("click", function() {
      const number = numBox.value;
      if (number) {
        fetchNumberFact(number);
      } else {
        output.textContent = "Please enter a valid number.";
      }
    });
  
    // Dodaj event listener za dugme za fetchovanje slučajnog broja
    fetchRandomNumButton.addEventListener("click", function() {
      fetchNumberFact("random");
    });
  
    // Funkcija za fetchovanje činjenica o brojevima
    function fetchNumberFact(number) {
      const url = `http://numbersapi.com/${number}`;
      fetch(url)
        .then(checkStatus)
        .then(responseText => {
          output.textContent = responseText;
        })
        .catch(error => {
          output.textContent = `Error: ${error.message}`;
        });
    }
  
    // Funkcija za proveru statusa odgovora
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response.text();
      } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
      }
    }
  });
  