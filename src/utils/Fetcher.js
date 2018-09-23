class Fetcher {
  /**
   * Fetches data from the given url
   * @param {string} url
   * @param {*} options Same as Fetch API options
   * @return {Promise} A promise with the data
   */
  static async fetch(url, options = { mode: 'cors' }) {
    let response, data = [];

    try {
      response = await fetch(url, options);
      if (!response.ok) throw Error('Request Error');
      data = await response.json();
    } catch (e) {
      data = []
    }

    return data;
  }
}

export default Fetcher;
