class CryptoAPI {
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
