import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/features/basketSlice';


function Product({ product }) {

    const truncateTitle = (title, maxLength) => {
        return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
    };


    const { id, title, price, image, category } = product;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddBasket = () => {
        const payload = {
            id,
            title,
            price,
            image,
            count: 1
        }

        dispatch(addToBasket(payload));
    }


    return (
        <div className="col">
            <Card sx={{ width: 250, height: 350, maxWidth: '100%', boxShadow: 'xl' }}>
                <CardOverflow>
                    <AspectRatio sx={{ minWidth: 200 }}>
                        <img
                            src={image}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>

                <CardContent>
                    <Typography level="body-md">{category} </Typography>
                    <Link
                        href="#product-card"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutwardIcon />}
                        sx={{ fontWeight: 'xl' }}
                        onClick={() => {
                            navigate(`/product-details/${id}`);
                        }}
                    >
                        {truncateTitle(title, 36)}
                    </Link>

                    <Typography
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: 'xl' }}
                        endDecorator={
                            <Chip component="span" size="sm" variant="soft" color="primary">
                                Rating: {product.rating.rate}
                            </Chip>
                        }
                    >
                        {price} $
                    </Typography>

                </CardContent>

                <CardOverflow>
                    <Button variant="solid" color="success" size="lg" style={{ backgroundColor: '#1E3A8A', color: 'gold' }}
                        onClick={handleAddBasket}>
                        Add to basket
                    </Button>
                </CardOverflow>
            </Card>
        </div>
    )
}

export default Product
