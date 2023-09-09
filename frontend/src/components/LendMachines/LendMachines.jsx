import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Col, Button } from 'react-bootstrap';
import './LendMachines.css';

const LendMachines = ({ _id, name, image, targetPlant, price }) => {
	return (
		<Col sm={12} md={6} lg={4}>
			<Card style={{ minWidth: 250 }} className='my-3 p-1'>
				<Card.Img className='image card-image mx-auto' src={image} variant='top' />
				<Card.Body>
					<LinkContainer to={`/farmers/lendMachines/${_id}`}>
						<Card.Title className='title'>
							<strong>{name}</strong>
						</Card.Title>
					</LinkContainer>
					<Card.Text className='text-center mb-1'>{targetPlant}</Card.Text>
					<Card.Text className='text-center'>
						<h6>Rs.{price}</h6>
					</Card.Text>
					<LinkContainer style={{ minWidth: '50%' }} to={`/farmers/lendMachines/${_id}`}>
						<Button className='btn-preview' varient='success'>
							Preview
						</Button>
					</LinkContainer>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default LendMachines;
