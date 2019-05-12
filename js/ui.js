class UI {
  constructor() {
    this.init();
  }
  init() {
    this.printCryptoCurrencies();
  }
  // Prints the <options> for the form
  printCryptoCurrencies() {
    cryptoAPI.getCryptoCurrenciesList().then(data => {
      const cryptoCurrencies = data.cryptoCurrencies;

      // Build the <select> from the REST API
      const select = document.getElementById("cryptocurrency");

      cryptoCurrencies.forEach(currency => {
        // Add the <option>
        const option = document.createElement("option");
        option.value = currency.id;
        option.appendChild(document.createTextNode(currency.name));
        select.appendChild(option);
      });
    });
  }

  // Prints a message 2 parametres, method and classes

  printMessage(message, className) {
    const div = document.createElement("div");

    // add the classes
    div.className = className;
    // add the message
    div.appendChild(document.createTextNode(message));

    const messageDiv = document.querySelector(".messages");
    messageDiv.appendChild(div);

    // Remove the message
    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 3000);
  }

  // Prints the result of the valuation / rate
  displayResult(result) {
    console.log(result);
  }
}
