export const InProgressTaskCard = ({
	task,
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
		<div className="p-4 lg:p-5 bg-neutral-50 shadow-md shadow-dark/10 rounded-lg">
			{/* Title */}
			<h6 className="text-lg font-semibold line-clamp-2 mb-4">
				{task.title}
			</h6>
			{/* Complete Button */}
			<button
				className="w-full py-2.5 text-light font-medium bg-green-600 rounded-lg hover:bg-green-700 active:scale-[97.5%] transition-all duration-300"
				onClick={() => {
					setInProgressCount(inProgressCount - 1);
					setResolvedCount(resolvedCount + 1);
					setInProgressTasks(
						inProgressTasks.filter(
							(ipTask) => ipTask.id !== task.id,
						),
					);
					setResolvedTasks([...resolvedTasks, task]);
					alert("Task status updated to Resolved");
				}}
			>
				Complete
			</button>
		</div>
	);
};
