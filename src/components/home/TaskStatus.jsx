import { InProgressTaskCard } from "../shared/InProgressTaskCard";

export const TaskStatus = ({
	inProgressCount,
	setInProgressCount,
	resolvedCount,
	setResolvedCount,
	inProgressTasks,
	setInProgressTasks,
	resolvedTasks,
	setResolvedTasks,
}) => {
	return (
		<section>
			{/* Header */}
			<h3 className="text-[27px] font-semibold text-neutral-700 mb-6">Task Status</h3>
			{inProgressTasks.length > 0 ? (
				// Tasks List
				<div className="flex flex-col gap-y-5">
					{inProgressTasks.map((task) => (
						<InProgressTaskCard
							task={task}
							inProgressCount={inProgressCount}
							setInProgressCount={setInProgressCount}
							resolvedCount={resolvedCount}
							setResolvedCount={setResolvedCount}
							inProgressTasks={inProgressTasks}
							setInProgressTasks={setInProgressTasks}
							resolvedTasks={resolvedTasks}
							setResolvedTasks={setResolvedTasks}
						/>
					))}
				</div>
			) : (
				<p className="text-neutral-500">Click on a ticket to add it to Task Status.</p>
			)}
		</section>
	);
};
