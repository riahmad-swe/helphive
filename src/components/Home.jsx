import { Suspense } from "react";
import { CustomerTickets } from "./home/CustomerTickets";
import { Overview } from "./home/Overview";
import { useState } from "react";
import { TaskStatus } from "./home/TaskStatus";
import { ResolvedTask } from "./home/ResolvedTasks";

const fetchTickets = async () => {
	const res = await fetch("/tickets.json");
	const data = await res.json();
	return data;
};

const ticketsPromise = fetchTickets();

export const Home = () => {
	const [inProgressCount, setInProgressCount] = useState(0);
	const [resolvedCount, setResolvedCount] = useState(0);
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const [resolvedTasks, setResolvedTasks] = useState([]);

	return (
		<main className="px-4 lg:px-48 py-8 lg:py-20 space-y-16 lg:space-y-20">
			<Overview
				inProgressCount={inProgressCount}
				resolvedCount={resolvedCount}
			/>
			<div className="grid lg:grid-cols-4 gap-8">
				<Suspense>
					<CustomerTickets
						ticketsPromise={ticketsPromise}
						inProgressCount={inProgressCount}
						setInProgressCount={setInProgressCount}
						inProgressTasks={inProgressTasks}
						setInProgressTasks={setInProgressTasks}
					/>
				</Suspense>
				<div className="space-y-10">
					<TaskStatus
						inProgressCount={inProgressCount}
						setInProgressCount={setInProgressCount}
						resolvedCount={resolvedCount}
						setResolvedCount={setResolvedCount}
						inProgressTasks={inProgressTasks}
						setInProgressTasks={setInProgressTasks}
						resolvedTasks={resolvedTasks}
						setResolvedTasks={setResolvedTasks}
					/>
					<ResolvedTask resolvedTasks={resolvedTasks} />
				</div>
			</div>
		</main>
	);
};
