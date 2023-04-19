import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

export default function MultiActionAreaCard({ name, url }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '5px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { url }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/pokemon/${ name }`}>
         <Button 
         size="small" 
         color="primary">
          Link
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}