import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CreateContentIcon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<path
				d="M8.63202 14H3C1.89543 14 1 13.1046 1 12V4C1 2.89543 1.89543 2 3 2H11.1407C12.2453 2 13.1407 2.89543 13.1407 4V6.91359"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
			<path
				d="M6.21897 4.90541C6.3589 4.71689 6.6411 4.71689 6.78103 4.90541L8.69044 7.47766C8.86187 7.70861 8.69703 8.03628 8.40941 8.03628H4.59059C4.30297 8.03628 4.13812 7.70861 4.30956 7.47767L6.21897 4.90541Z"
				stroke="#272932"
				stroke-width="1.3"
			/>
			<path
				d="M4.34058 10.8975L8.61989 10.8975"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
			<path
				d="M10.9688 11.8604L15.2481 11.8604"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
			<path
				d="M13.1084 9.7207L13.1084 14"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
		</g>
	</svg>
);
