import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Devback from '../assets/images/devback.jpg';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Devback}
        title="Developer"
      />
      <CardContent>
        <h4>Desarrollo de Software</h4>
        <p>Enfoque en el desarrollo de programas informaticos para cubrir una necesidad</p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
