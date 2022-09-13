import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ListEntryIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "24",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M20.8571 4C14.8609 4 10 8.86091 10 14.8571L10 19.381C10 20.2751 10.7249 21 11.619 21L20 21C21.1046 21 22 20.1046 22 19L22 5.14286C22 4.51167 21.4883 4 20.8571 4Z"
			fill="#F7E691"
		/>
		<circle cx="5" cy="7" r="0.5" stroke="#272932" />
		<circle cx="5" cy="12" r="0.5" stroke="#272932" />
		<circle cx="5" cy="17" r="0.5" stroke="#272932" />
		<path
			d="M9 7L19 7"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M9 12L12 12"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M9 17L12 17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M12 17L17 17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M17 17L17 11"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M15 12L17 10"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M19 12L17 10"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
