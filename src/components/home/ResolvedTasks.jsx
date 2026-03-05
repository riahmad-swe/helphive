import { ResolvedTaskCard } from "../shared/ResolvedTaskCard";

export const ResolvedTask = ({ resolvedTasks }) => {
	return (
		<section>
			{/* Header */}
			<h3 className="text-[27px] font-semibold text-neutral-700 mb-6">Resolved Task</h3>
			{resolvedTasks.length > 0 ? (
				// Tasks List
				<div className="flex flex-col gap-y-5">
					{resolvedTasks.map((task) => (
						<ResolvedTaskCard
							key={task.id}
							task={task}
						/>
					))}
				</div>
			) : (
				<p className="text-neutral-500">No tasks resolved yet.</p>
			)}
		</section>
	);
};
