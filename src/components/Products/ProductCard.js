import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
//router 
import { Link } from 'react-router-dom'
import { public_request } from '../../util/requestMethods'
//message  
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function ProductCard({ name, img, description, id }) {
    const DeleteProduct = async (id) => {

        await public_request.get(`/product/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    MySwal.fire({
                        title: <p>loading...</p>,
                        didOpen: () => {
                            MySwal.showLoading()
                        },
                    }).then(() => {
                        return MySwal.fire(<p>Shorthand works too</p>)
                    })
                }
            }).catch(err => console.log(err))
        setTimeout(() => window.location.reload(), 1400)
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`${process.env.REACT_APP_API}/assets/uploads/${img}`}
                    style={{ objectFit: 'contain' }}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">
                    <Link to={`/update-product/${id}`} className='link'>
                        Update
                    </Link>
                </Button>
                <Button size="small" onClick={() => DeleteProduct(id)}>Delete</Button>
            </CardActions>
        </Card>
    );
}
