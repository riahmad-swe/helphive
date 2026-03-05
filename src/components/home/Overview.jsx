export const Overview = ({ inProgressCount, resolvedCount }) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-light">
			<div className="w-full h-48 lg:h-64 flex flex-col items-center justify-center gap-y-4 bg-linear-to-r from-orange-700 to-orange-400 rounded-2xl lg:rounded-3xl hover:scale-105 transition-transform duration-500">
				<h3 className="text-2xl">In-Progress</h3>
				<h1 className="text-6xl font-semibold leading-none!">
					{inProgressCount}
				</h1>
			</div>
			<div className="w-full h-48 lg:h-64 flex flex-col items-center justify-center gap-y-4 bg-linear-to-r from-green-500 to-green-700 rounded-2xl lg:rounded-3xl hover:scale-105 transition-transform duration-500">
				<h3 className="text-2xl">Resolved</h3>
				<h1 className="text-6xl font-semibold leading-none!">
					{resolvedCount}
				</h1>
			</div>
		</div>
	);
};
