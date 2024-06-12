import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
	const [isOpen] = useState(false);
	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link to='/'>
					<a className="text-2xl font-bold" href="#">
						<span className="text-[#F16006]"><b>influ</b></span>
						<span className="text-[#CD11F4]"><b>real</b></span>
					</a>
				</Link>
				<div className="flex-1 flex justify-end items-center">
					<div className={`flex justify-end ${isOpen ? 'show' : ''}`} id="navbarNav">
						<ul className="flex space-x-0 justify-end">
							<li className="nav-item">
								<Link to='/empresa'>
									<a className="nav-link flex justify-end" href="#">
										<svg className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<svg className="h-8 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
									</svg>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<svg className="h-8 w-8 text-slate-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
