import React from 'react';
import Logo from '../app/Logo';
import { Link } from 'react-router-dom';
import MenuShopping from './MenuShopping';

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

	return (
		<React.Fragment>
			<header className="bg-white shadow">
				<div className="bg-gray-100 py-3 flex items-center justify-between px-10">
					<div className="">
						current country
					</div>
					<div className="flex gap-4">
						<Link to="/login" >Sing in</Link>
						<Link to="/register" >Register</Link>
					</div>
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
							<li>search</li>
							<li>help</li>
							<li className="w-10 items-center gap-2 flex" >
								<div className="flow-root">
									{/* <Link to="#" className="group -m-2 p-2 flex items-center">
									<ShoppingBagIcon
										className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
										aria-hidden="true"
									/>
									<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
									<span className="sr-only">items in the shopping car, view bag</span>
								</Link> */}
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
