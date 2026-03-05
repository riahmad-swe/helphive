import { Suspense } from "react";
import { CustomerTickets } from "./home/CustomerTickets";
import { Overview } from "./home/Overview";

const fetchTickets = async () => {
	const res = await fetch("/tickets.json");
	const data = await res.json();
	return data;
};

const ticketsPromise = fetchTickets();

export const Home = () => {
	return (
		<main className="px-48 py-20 space-y-20">
			<Overview />
			<div className="grid grid-cols-4 gap-8">
				<Suspense>
					<CustomerTickets ticketsPromise={ticketsPromise} />
				</Suspense>
			</div>
		</main>
	);
};
