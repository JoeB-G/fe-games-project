import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ErrorCard = ({ errorMessage }) => {
  return (
    <Card sx={{ width: 416 }}>
      <CardMedia
        component="img"
        height="300px"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8d/Computer_crash.svg"
        alt={`Computer on fire`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Oops an error!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {errorMessage}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ErrorCard;
