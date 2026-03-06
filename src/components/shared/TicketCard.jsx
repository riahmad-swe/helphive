import { CalendarIcon } from "lucide-react";
import { CircleIcon } from "lucide-react";
import { toast } from "react-toastify";

export const TicketCard = ({
	ticket,
	inProgressCount,
	setInProgressCount,
	inProgressTasks,
	setInProgressTasks,
}) => {
	const priorityColor =
		ticket.priority === "LOW"
			? "text-green-600"
			: ticket.priority === "MEDIUM"
				? "text-yellow-600"
				: ticket.priority === "HIGH"
					? "text-red-600"
					: "";

	return (
		<div
			className="p-4 lg:p-5 bg-neutral-50 shadow-md shadow-dark/10 rounded-xl text-neutral-500 hover:shadow-lg hover:shadow-dark/15 active:shadow-md transition-shadow duration-300 cursor-pointer"
			onClick={() => {
				if (!inProgressTasks.includes(ticket)) {
					setInProgressCount(inProgressCount + 1);
					setInProgressTasks([...inProgressTasks, ticket]);
					toast.success("Task status updated to In-Progress");
				} else {
					toast.error("Task is already marked as In-Progress");
				}
			}}
		>
			<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-x-1 gap-y-2 mb-2">
				{/* Title */}
				<h6 className="text-lg font-semibold text-dark line-clamp-1">
					{ticket.title}
				</h6>
				{/* Status */}
				<span
					className={`
                        flex items-center gap-x-1 px-2 py-1.75 rounded-full
                        ${ticket.status === "OPEN" && "bg-green-200"}
                        ${ticket.status === "IN-PROGRESS" && "bg-yellow-200/75"}`}
				>
					<CircleIcon
						size={20}
						fill={
							ticket.status === "OPEN"
								? "#00a000"
								: ticket.status === "IN-PROGRESS"
									? "#c0b000"
									: "gray"
						}
						strokeWidth={0}
						className="max-lg:scale-90"
					/>
					<span
						className={`
                            max-lg:text-[15px] font-medium capitalize
                            ${ticket.status === "OPEN" && "text-green-800"}
                            ${ticket.status === "IN-PROGRESS" && "text-yellow-800"}`}
					>
						{ticket.status.toLowerCase()}
					</span>
				</span>
			</div>
			{/* Description */}
			<p className="text-[15px] lg:text-base line-clamp-2 mb-2 lg:mb-4">
				{ticket.description}
			</p>
			<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-[15px] gap-y-2">
				<div className="max-lg:w-full flex items-center justify-between lg:justify-normal gap-x-4">
					{/* ID */}
					<span className="font-medium">#{ticket.id}</span>
					{/* Priority */}
					<span className={`uppercase ${priorityColor} font-medium`}>
						{ticket.priority} Priority
					</span>
				</div>
				<div className="max-lg:w-full flex items-center justify-between lg:justify-normal gap-x-4">
					{/* Customer Name */}
					<span>{ticket.customer}</span>
					{/* Ticket Creation Date */}
					<div className="flex items-center gap-x-1.5">
						<CalendarIcon size={20} />
						<span>
							{new Date(ticket.createdAt).toLocaleDateString()}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
