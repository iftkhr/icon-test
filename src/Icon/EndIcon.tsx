import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EndIcon: React.FC<Props> = ({
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
			d="M10.882 5.99983L6.5 8.19096L6.5 3.80899L10.882 5.99983Z"
			stroke="#4050A6"
		/>
		<line
			x1="6.5"
			y1="4.5"
			x2="6.5"
			y2="11.5"
			stroke="#4050A6"
			stroke-linecap="round"
		/>
		<line
			x1="4.5"
			y1="11.5"
			x2="11.5"
			y2="11.5"
			stroke="#4050A6"
			stroke-linecap="round"
		/>
	</svg>
);
