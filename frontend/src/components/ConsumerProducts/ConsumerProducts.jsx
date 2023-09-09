import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Col, Button } from 'react-bootstrap';
import './ConsumerProduts.css';

const ConsumerProducts = ({ _id, prod_name, image, price, avalaible_location, prod_size }) => {
	return (
		<Col sm={12} md={6} lg={4}>
			<Card className='mb-3'>
				<Card.Img className='image mx-auto' src={image} variant='top' />

				<Card.Body>
					<hr />
					<LinkContainer to={`/consumer/${_id}`}>
						<Card.Title className='prod-title' as='div'>
							{prod_name}
						</Card.Title>
					</LinkContainer>
					<Card.Text as='h6' className='text-center'>
						{prod_size} | Rs.{price}
					</Card.Text>
					<Card.Text as='p' className='text-center'>
						Location: <span style={{ fontWeight: 'bold' }}>{avalaible_location}</span>
					</Card.Text>
					<LinkContainer to={`/consumer/${_id}`}>
						<Button className='btn-preview' varient='success'>
							Preview
						</Button>
					</LinkContainer>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ConsumerProducts;
