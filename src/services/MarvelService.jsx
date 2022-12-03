export class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      "https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=c11d58488ccc0dbcaedfcae626fd5e33"
    );
  };
}

// 23.12 10:00-11.30
