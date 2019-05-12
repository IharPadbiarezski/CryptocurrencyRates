class CryptoAPI {
  // Query the REST API with a currency and cryptocurrency
  async queryAPI(currency, cryptocurrency) {
    // Query the URL
    const url = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/&convert=${currency}`
    );

    // Return as json
    const result = await url.json();

    // Return the object
    return {
      result
    };
  }

  // Get all the cryptocurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch("../coinmarketcap.json");

    // Return this as a json

    const cryptoCurrencies = await url.json();

    // Return the object
    return {
      cryptoCurrencies
    };
  }
}
