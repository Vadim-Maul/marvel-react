import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Button } from "@mui/material";

const CharList = () => {
  return (
    <div className="char__list">
      <div className="char__grid">
        <Card sx={{ background: "rgb(26, 32, 39)", maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={abyss}
              alt="green iguana"
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
                Abyss
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ background: "rgb(26, 32, 39)", maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={abyss}
              alt="green iguana"
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
                Abyss
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ background: "rgb(26, 32, 39)", maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={abyss}
              alt="green iguana"
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
                Abyss
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ background: "rgb(26, 32, 39)", maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={abyss}
              alt="green iguana"
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
                Abyss
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ background: "rgb(26, 32, 39)", maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={abyss}
              alt="green iguana"
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
                Abyss
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ background: "rgb(26, 32, 39)", maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={abyss}
              alt="green iguana"
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
                Abyss
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Grid container justifyContent="center">
        <Button sx={{ marginTop: "20px" }} variant="outlined">
          load more
        </Button>
      </Grid>
    </div>
  );
};
export default CharList;
