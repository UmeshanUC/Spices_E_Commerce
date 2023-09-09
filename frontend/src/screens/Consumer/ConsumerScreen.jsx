import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Button, Alert } from 'react-bootstrap';
import ConsumerProducts from './../../components/ConsumerProducts/ConsumerProducts';
import { listConsumerProducts } from './../../actions/consumerProductAction.js';
import Message from './../../components/Message/Message';
import Loader from './../../components/Loader/Loader';
import './ConsumerStyles.css';
import Meta from '../../components/Helmet/Meta';

const ConsumerScreen = () => {
	const dispatch = useDispatch();
	const consumerProductList = useSelector((state) => state.consumerProductList);
	const { loading, consumerProducts, error } = consumerProductList;
	const [numberOfItems, setNumberOfItems] = useState(3);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		dispatch(listConsumerProducts());
	}, [dispatch]);

	const filteredProducts = consumerProducts.filter((product) =>
		product.prod_name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const showMore = () => {
		if (numberOfItems + 3 <= filteredProducts.length) {
			setNumberOfItems(numberOfItems + 3);
		} else {
			setNumberOfItems(filteredProducts.length);
		}
	};

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		setNumberOfItems(3); // Reset number of items to show
	};

	return (
		<div className='consumerProductScreen'>
			<Meta title='Spices | HOME' />
			<header className='header'>
				<input type='text' value={searchQuery} onChange={handleSearch} placeholder='Search by product name...' />
			</header>
			<Container className='consumerContainer'>
				<br />
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Row>
						{filteredProducts.slice(0, numberOfItems).map((consumer) => (
							<ConsumerProducts
								key={consumer._id}
								_id={consumer._id}
								prod_name={consumer.prod_name}
								seller_name={consumer.seller_name}
								image={consumer.image}
								price={consumer.price}
								prod_size={consumer.prod_size}
								avalaible_location={consumer.avalaible_location}
								quantity={consumer.quantity}
								className={searchQuery ? 'searchedProductCard' : ''}
							/>
						))}
						{/* {numberOfItems >= filteredProducts.length ? (
							<Alert style={{ backgroundColor: 'red' }} className='col-md-12 text-center'>
								Finished
							</Alert>
						) : null} */}
						<div className='col-md-12 text-center'>
							<Button variant='success outline-dark' onClick={showMore}>
								Show more
							</Button>
						</div>
					</Row>
				)}
			</Container>
		</div>
	);
};

export default ConsumerScreen;
