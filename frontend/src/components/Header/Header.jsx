import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/Logo.jpg';

import Search from '../Search/Search';
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';

import { logout } from './../../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<Navbar collapseOnSelect expand='lg' fixed='top'>
			<LinkContainer to='/'>
				<Navbar.Brand className='nav-cal'>
					<Image src={logo} width='80' alt='Logo' />
				</Navbar.Brand>
			</LinkContainer>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto '>
					{/* <LinkContainer to="/">
                        <Nav.Link className="nav-cal">HOME</Nav.Link>
                    </LinkContainer> */}
					{/* <LinkContainer to="/consumer">
                        <Nav.Link className="nav-cal">Spices</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/fish">
                        <Nav.Link className="nav-cal">Fish</Nav.Link>
                    </LinkContainer>
                    */}

					{/* <LinkContainer to="/consumer">
                        <Nav.Link className="nav-cal">CONSUMER</Nav.Link>
                    </LinkContainer>  
                     */}

					{/* <div>
                        <Route render = {({history}) => <Search history={history}/> } />
                    </div> */}

					<LinkContainer style={{ minWidth: 100 }} to='/cart'>
						<Nav.Link className={`${userInfo ? 'remove-space' : 'add-space cart nav-cal'} `}>
							<i className='fas fa-shopping-cart'></i>
							CART
						</Nav.Link>
					</LinkContainer>
					{userInfo ? (
						<NavDropdown title={userInfo.name.toUpperCase()} id='username'>
							{userInfo && userInfo.isAdmin && (
								<LinkContainer to='/admin/dashboard'>
									<NavDropdown.Item>DASHBOARD</NavDropdown.Item>
								</LinkContainer>
							)}
							<LinkContainer to='/profile'>
								<NavDropdown.Item>PROFILE</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/login'>
								<NavDropdown.Item onClick={logoutHandler}>LOGOUT</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					) : (
						<LinkContainer to='/login'>
							<Nav.Link className='login nav-cal'>SIGN IN</Nav.Link>
						</LinkContainer>
					)}
					{userInfo && userInfo.isAdmin && (
						<NavDropdown title='ADMIN' id='adminmenu'>
							<LinkContainer to='/admin/userlist'>
								<NavDropdown.Item>USERS</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/admin/productlist'>
								<NavDropdown.Item>PRODUCTS</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to='/admin/orderlist'>
								<NavDropdown.Item>ORDERS</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
