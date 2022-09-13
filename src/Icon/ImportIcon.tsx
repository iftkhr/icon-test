import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ImportIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "17",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 17"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M5 6.5L8 9.5L11 6.5"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M8 3.5L8 8.5M4 10.5L4 12C4 12.2761 4.22386 12.5 4.5 12.5L8 12.5L11.5 12.5C11.7761 12.5 12 12.2761 12 12L12 10.5"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
	</svg>
);
