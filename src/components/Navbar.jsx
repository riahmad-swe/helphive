import { PlusIcon } from "lucide-react";
import Logo from "../assets/logo.png";

export const Navbar = () => {
	return (
		<nav className="bg-neutral-50 px-4 lg:px-48 py-3 flex items-center justify-between border-b border-b-neutral-200 sticky top-0 z-50">
			{/* Logo */}
			<a href="/">
				<div className="flex items-center gap-x-2">
					<img
						src={Logo}
						alt="Logo"
						className="size-10"
					/>
					<h5 className="text-[27px] font-semibold">HelpHive</h5>
				</div>
			</a>
			{/* Links */}
			<ul class="hidden md:flex gap-6">
				<li>
					<a
						href="#"
						class="hover:text-orange-600 transition-colors duration-200"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-orange-600 transition-colors duration-200"
					>
						FAQ
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-orange-600 transition-colors duration-200"
					>
						Blog
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-orange-600 transition-colors duration-200"
					>
						Changelog
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-orange-600 transition-colors duration-200"
					>
						Download
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:text-orange-600 transition-colors duration-200"
					>
						Contact
					</a>
				</li>
			</ul>
			{/* CTA Buttons */}
			<div>
				<button className="px-5 py-3 rounded-lg flex items-center gap-x-2 bg-linear-to-br from-orange-700 to-orange-400 text-light hover:from-orange-600 active:scale-[97.5%] transition-all duration-250">
					<PlusIcon size={16} />
					<span className="font-medium">New Ticket</span>
				</button>
			</div>
		</nav>
	);
};
