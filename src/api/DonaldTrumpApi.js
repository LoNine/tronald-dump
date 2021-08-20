export default class DonaldTrumpApi {
  async find(query) {
    const response = await fetch(`https://api.tronalddump.io/search/quote?query=${query}`);

    const result = await response.json();

    return result._embedded
      ? result._embedded.quotes.map((quote) => {
        const info = {id: quote.quote_id, value: quote.value};
        return info;
      })
      : [];
  }
}
