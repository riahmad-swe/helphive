export const ResolvedTaskCard = ({ task }) => {
	return (
		<div className="p-4 lg:p-5 bg-green-100 shadow-md shadow-dark/10 rounded-lg">
			{/* Title */}
			<h6 className="text-lg font-semibold line-clamp-2">{task.title}</h6>
		</div>
	);
};
