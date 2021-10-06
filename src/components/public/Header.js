import React from 'react';
import Logo from '../app/Logo';
import { Link } from 'react-router-dom';
import MenuShopping from './MenuShopping';
import { LogoutIcon } from '@heroicons/react/outline';
import axios from 'axios';

const navigation = {
	categories: [
		{
			id: '273b7dbf-ce28-4b4c-a05c-109acc5e39d7',
			name: 'women'
		},
		{
			id: 'f4a858cc-d6ba-4ed6-b26d-28ab9b291d95',
			name: 'men'
		},
	],
	pages: [
		{ name: 'Company', url: '#' },
		{ name: 'Stores', url: '#' },
	],
}



export default function Header() {

	const data = JSON.parse(localStorage.getItem('user'))

	if (!data) {
		localStorage.setItem('user', JSON.stringify({}))
	}

	async function logout() {

		try {

			let config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': `Bearer ${data.token}`,
				}
			}

			await axios.post('http://localhost:8000/api/logout', null, config)

		} catch (error) {
			console.error(error);
		}

		localStorage.setItem('user', JSON.stringify({}))
		window.location.reload(true)

	}


	return (
		<React.Fragment>
			<header className="bg-white shadow">
				<div className="bg-gray-100 py-3 flex items-center justify-between px-10">
					<div className="">
						current country
					</div>
					{
						!data.token
							? <div className="flex gap-4">
								<Link to="/login" >Sing in</Link>
								<Link to="/register" >Register</Link>
							</div>
							: <div className="cursor-pointer flex items-center justify-center gap-2 text-gray-700" >
								<span>
									{`${data.user.first_name} ${data.user.last_name}`}
								</span>
								<span title="Logout" >
									<LogoutIcon className="w-5 h-5" onClick={() => logout()} />
								</span>
							</div>
					}
				</div>
				<div className="w-full mx-auto py-6 px-10 ">
					<div className="flex items-center justify-between cursor-pointer text-gray-700" >
						<Logo />
						<ul className="flex gap-6 capitalize" >
							{navigation.categories.map((category) => (
								<li key={category.id}>
									{category.name}
								</li>
							))}
							{navigation.pages.map((page) => (
								<li key={page.name} className="flow-root">
									<Link to={page.url} >
										{page.name}
									</Link>
								</li>
							))}
						</ul>

						<ul className="flex items-center gap-6 capitalize cursor-pointer text-gray-700" >
							<li><Link to="/products">search</Link></li>
							<li>help</li>
							<li className="w-10 items-center gap-2 flex" >
								<div className="flow-root">
									<MenuShopping />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</header >
		</React.Fragment>
	)

}
