import { Component } from "react";

import mjolnir from "../../resources/img/mjolnir.png";
import Stack from "@mui/material/Stack";
import { Skeleton, Button } from "@mui/material";
import { MarvelService } from "../../services/MarvelService";
import ErrorMesage from "../errorMesage/ErrorMessage";

import "./randomChar.scss";

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
    //this.timerId = setInterval(this.updateChar, 15000);
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };
  onError = () => {
    this.setState({ loading: false, error: true });
  };
  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const errorMesage = error ? <ErrorMesage /> : null;
    const skeleton = loading ? (
      <Skeleton
        sx={{ bgcolor: "grey.900", margin: "0 auto", width: "50%" }}
        variant="rectangular"
        width={"100%"}
        height={"100%"}
      />
    ) : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="randomchar">
        {errorMesage}
        {skeleton}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <Button variant="outlined" onClick={this.updateChar}>
            true it
          </Button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  const shortDescription = !description
    ? "Description is under development"
    : description.slice(0, 100) + "...";
  const imgStyle =
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ? { "object-fit": "contain" }
      : { "object-fit": "cover" };
  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        style={imgStyle}
        alt="Random character"
        className="randomchar__img"
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{shortDescription}</p>
        <div className="randomchar__btns">
          <Stack spacing={3} direction="row">
            <Button variant="outlined">
              <a href={homepage}>Homepage</a>
            </Button>
            <Button variant="outlined">
              <a href={wiki}>Wiki</a>
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
