import { LinkedinIcon } from "lucide-react";
import Logo from "../assets/logo.png";
import { GithubIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { YoutubeIcon } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="bg-neutral-950 text-neutral-400 pt-8 lg:pt-16 pb-8 px-4 lg:px-48">
			<div className="flex flex-row flex-wrap items-start justify-between gap-y-4">
				{/* Brand-related metadata */}
				<div className="lg:max-w-md">
					<div className="flex items-center gap-x-2 mb-2 lg:mb-4">
						<img
							src={Logo}
							alt="Logo"
							className="size-10"
						/>
						<h5 className="text-[27px] font-semibold text-light">
							HelpHive
						</h5>
					</div>
					<p className="leading-normal!">
						Support your customers without the chaos. Organize
						tickets, monitor conversations, and resolve problems
						efficiently. Everything you need to keep your customers
						happy, all in one place.
					</p>
				</div>
				{/* Company Links */}
				<div>
					<h5 className="text-xl font-medium text-light mb-2 lg:mb-4">
						Company
					</h5>
					<div className="flex flex-col gap-y-2 lg:gap-y-3 text-[17px]">
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							About Us
						</a>
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Our Mission
						</a>
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Contact Us
						</a>
					</div>
				</div>
				{/* Services Links */}
				<div>
					<h5 className="text-xl font-medium text-light mb-2 lg:mb-4">
						Services
					</h5>
					<div className="flex flex-col gap-y-2 lg:gap-y-3 text-[17px]">
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Products & Services
						</a>
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Customer Stories
						</a>
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Download App
						</a>
					</div>
				</div>
				{/* Policy Links */}
				<div>
					<h5 className="text-xl font-medium text-light mb-2 lg:mb-4">
						Policy
					</h5>
					<div className="flex flex-col gap-y-2 lg:gap-y-3 text-[17px]">
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Terms & Conditions
						</a>
						<a
							href="#"
							className="hover:text-light transition-colors duration-150"
						>
							Join Us
						</a>
					</div>
				</div>
				{/* Social Links */}
				<div>
					<h5 class="text-xl font-semibold text-light mb-2 lg:mb-4">
						Social
					</h5>
					<div class="flex flex-col gap-y-2 lg:gap-y-3 text-[17px]">
						<a
							href="https://www.linkedin.com/in/mahnafdev"
							className="flex items-center gap-x-2 hover:text-light transition-colors duration-150"
						>
							<LinkedinIcon size={20} />
							<span>@mahnafdev</span>
						</a>
						<a
							href="https://github.com/mahnafdev"
							className="flex items-center gap-x-2 hover:text-light transition-colors duration-150"
						>
							<GithubIcon size={20} />
							<span>@mahnafdev</span>
						</a>
						<a
							href="https://x.com/mahnaf_swe"
							className="flex items-center gap-x-2 hover:text-light transition-colors duration-150"
						>
							<TwitterIcon size={20} />
							<span>@mahnaf_swe</span>
						</a>
						<a
							href="https://www.facebook.com/mahnafdev"
							className="flex items-center gap-x-2 hover:text-light transition-colors duration-150"
						>
							<FacebookIcon size={20} />
							<span>@mahnafdev</span>
						</a>
						<a
							href="https://www.youtube.com/mahnaf-dev"
							className="flex items-center gap-x-2 hover:text-light transition-colors duration-150"
						>
							<YoutubeIcon size={20} />
							<span>@mahnaf-dev</span>
						</a>
					</div>
				</div>
			</div>
			{/* Divider */}
			<div className="w-full h-px bg-neutral-700/75 mt-8 lg:mt-16 mb-8" />
			<p className="text-center text-neutral-200">
				&copy; 2026 HelpHive. All rights reserved.
			</p>
		</footer>
	);
};
