export const Overview = () => {
	return (
		<div className="flex gap-6 text-light">
			<div className="w-full h-64 flex flex-col items-center justify-center gap-y-4 bg-linear-to-r from-orange-700 to-orange-400 rounded-3xl hover:scale-105 transition-transform duration-500">
				<h3 className="text-2xl">In-Progress</h3>
				<h1 className="text-6xl font-semibold leading-none!">0</h1>
			</div>
			<div className="w-full h-64 flex flex-col items-center justify-center gap-y-4 bg-linear-to-r from-green-500 to-green-700 rounded-3xl hover:scale-105 transition-transform duration-500">
				<h3 className="text-2xl">Resolved</h3>
				<h1 className="text-6xl font-semibold leading-none!">0</h1>
			</div>
		</div>
	);
};
