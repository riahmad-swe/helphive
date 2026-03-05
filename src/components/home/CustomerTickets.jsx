import { use } from "react";
import { TicketCard } from "../shared/TicketCard";

export const CustomerTickets = ({
	ticketsPromise,
	inProgressCount,
	setInProgressCount,
	inProgressTasks,
	setInProgressTasks,
}) => {
	const tickets = use(ticketsPromise);

	return (
		<section className="lg:col-span-3">
			{/* Header */}
			<h3 className="text-[27px] font-semibold text-neutral-700 mb-6">
				Customer Tickets
			</h3>
			{/* Tickets Grid */}
			<div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
				{tickets.map((ticket) => (
					<TicketCard
						key={ticket.id}
						ticket={ticket}
						inProgressCount={inProgressCount}
						setInProgressCount={setInProgressCount}
						inProgressTasks={inProgressTasks}
						setInProgressTasks={setInProgressTasks}
					/>
				))}
			</div>
		</section>
	);
};
