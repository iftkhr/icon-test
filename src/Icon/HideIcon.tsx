import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const HideIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M13.0166 3.90271C13.2704 3.64887 13.2704 3.23731 13.0166 2.98347C12.7627 2.72963 12.3512 2.72963 12.0973 2.98347L8.87817 6.20261C8.61308 6.07284 8.31504 6 8 6C6.89543 6 6 6.89543 6 8C6 8.31504 6.07284 8.61306 6.2026 8.87815L2.99836 12.0824C2.74452 12.3362 2.74452 12.7478 2.99836 13.0016C3.2522 13.2554 3.66376 13.2554 3.9176 13.0016L7.12183 9.7974C7.38693 9.92716 7.68496 10 8 10C9.10457 10 10 9.10457 10 8C10 7.68496 9.92716 7.38694 9.7974 7.12185L13.0166 3.90271Z"
			fill="#272932"
		/>
		<path
			d="M9.33323 3.92356C9.61204 3.64475 9.49355 3.17283 9.10567 3.10202C8.74426 3.03605 8.37514 3 8 3C3.58173 3 0 8 0 8C0 8 0.845619 9.18046 2.22193 10.3942C2.41491 10.5644 2.70629 10.5505 2.88823 10.3686L3.01807 10.2387C3.157 10.0998 3.14539 9.8715 2.99667 9.7431V9.7431C2.31863 9.15767 1.76721 8.56963 1.3855 8.12764C1.36081 8.09904 1.33682 8.07108 1.31363 8.04382L1.27649 8C1.31104 7.95908 1.34741 7.91649 1.3855 7.87236C1.76721 7.43037 2.31863 6.84233 2.99667 6.2569C4.38379 5.05923 6.15302 4 8 4C8.28469 4 8.56752 4.02516 8.8474 4.07212C9.02416 4.10178 9.20649 4.0503 9.33323 3.92356V3.92356Z"
			fill="#272932"
		/>
		<path
			d="M8 13C7.62609 13 7.25816 12.9642 6.89789 12.8986C6.50983 12.828 6.39119 12.3559 6.67009 12.077V12.077C6.79677 11.9504 6.97898 11.8989 7.15567 11.9284C7.43455 11.975 7.71635 12 8 12C9.84698 12 11.6162 10.9408 13.0033 9.7431C13.6814 9.15767 14.2328 8.56963 14.6145 8.12764C14.6284 8.11156 14.642 8.0957 14.6554 8.08003C14.6788 8.0527 14.7015 8.02601 14.7235 8L14.6713 7.93847L14.6145 7.87236C14.2328 7.43037 13.6814 6.84233 13.0033 6.2569V6.2569C12.8557 6.12946 12.8442 5.90289 12.9821 5.76501L13.1139 5.63326C13.2958 5.4513 13.5873 5.43744 13.7802 5.60769C15.1553 6.82078 16 8 16 8C16 8 12.4183 13 8 13Z"
			fill="#272932"
		/>
	</svg>
);
