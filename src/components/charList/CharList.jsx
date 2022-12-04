import "./charList.scss";

import { Component } from "react";
import { Grid, Button } from "@mui/material";
import { MarvelService } from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }
  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };
  onCharListLoaded = (newCharList) => {
    let ended = false;

    if (newCharList.length < 9) {
      ended = true;
    }

    this.setState(({ offset, charList }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  renderItems(arr) {
    const items = arr.map((item) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }
      return (
        <Card
          onClick={() => this.props.onCharSelected(item.id)}
          key={item.id}
          sx={{
            background: "rgb(26, 32, 39)",
            maxWidth: 200,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item.thumbnail}
              alt={item.name}
              sx={imgStyle}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="#fff"
                component="div"
                align="center"
                sx={{ textTransform: "uppercase" }}
              >
                {item.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>;
  }
  render() {
    const { charList, loading, error, newItemLoading, offset, charEnded } =
      this.state;
    const cards = this.renderItems(charList);
    const errorMesage = error ? <ErrorMessage /> : null;
    const skeleton = loading ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <CircularProgress size={150} color="secondary" />
      </Box>
    ) : null;
    const content = !(loading || error) ? cards : null;
    return (
      <div className="char__list">
        <div className="char_grid">
          {errorMesage}
          {skeleton}
          {content}
        </div>
        <Grid container justifyContent="center">
          <Button
            sx={{ marginTop: "20px" }}
            variant="outlined"
            disabled={charEnded || newItemLoading}
            onClick={() => this.onRequest(offset)}
          >
            load more
          </Button>
        </Grid>
      </div>
    );
  }
}
export default CharList;
