// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the varibales

const form = document.getElementById("form");

// Add Event Listener
form.addEventListener("submit", e => {
  e.preventDefault();

  // read currency
  const currencySelect = document.getElementById("currency").value;
  // read cryptocurrency
  const cryptoCurrencySelect = document.getElementById("cryptocurrency").value;

  // Validate that the selects have something
  if (currencySelect === "" || cryptoCurrencySelect === "") {
    // display an error
    console.log("error");
  } else {
    console.log(currencySelect + ": " + cryptoCurrencySelect);
  }
});
