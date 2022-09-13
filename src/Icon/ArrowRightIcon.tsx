import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ArrowRightIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "8",
	width = "5",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 5 8"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M1 7L4 4L1 1"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
