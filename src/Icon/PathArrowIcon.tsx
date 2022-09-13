import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const PathArrowIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "5",
	width = "8",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 8 5"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M1 1L4 4L7 1"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
