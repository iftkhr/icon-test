import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const BranchIcon: React.FC<Props> = ({
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
		<g opacity="0.7">
			<path
				d="M7 8L5 8"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
			<rect
				x="7.5"
				y="4.5"
				width="3"
				height="7"
				rx="0.5"
				stroke="#272932"
			/>
		</g>
	</svg>
);
