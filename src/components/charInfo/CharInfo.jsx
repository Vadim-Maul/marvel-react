import "./charInfo.scss";

import Stack from "@mui/material/Stack";
import { Button, Skeleton } from "@mui/material";
import { Component } from "react";
import { MarvelService } from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import CircularProgress from "@mui/material/CircularProgress";

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar = () => {
    const { charId } = this.props;
    if (!charId) {
      return;
    }
    this.onCharLoading();
    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };
  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  };
  onError = () => {
    this.setState({ loading: false, error: true });
  };

  render() {
    const { char, loading, error } = this.state;
    const skeleton =
      char || loading || error ? null : (
        <Stack spacing={3}>
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton variant="rounded" width={"100%"} height={100} />
          <Skeleton variant="rounded" width={"100%"} height={100} />
          <Skeleton variant="rounded" width={"100%"} height={100} />
        </Stack>
      );
    const errorMesage = error ? <ErrorMessage /> : null;
    const spinner = loading ? (
      <CircularProgress size={80} color="secondary" />
    ) : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;
    return (
      <div className="char__info">
        {skeleton}
        {errorMesage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let imgStyle =
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ? { objectFit: "unset" }
      : { objectFit: "cover" };
  let newDescription = !description
    ? "Description is under development"
    : description;

  return (
    <>
      <div className="char__basics">
        <img style={imgStyle} src={thumbnail} alt={name} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <Stack spacing={3} direction="column">
              <Button variant="outlined">
                <a href={homepage}> Homepage</a>
              </Button>
              <Button variant="outlined">
                <a href={wiki}>Wiki</a>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div className="char__descr">{newDescription}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "There is no comics with this character"}
        {comics.map((item, i) => {
          if (i > 9) {
            // eslint-disable-next-line
            return;
          }
          return (
            <li key={i} className="char__comics-item">
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CharInfo;
