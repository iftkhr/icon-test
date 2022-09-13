import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const OpenBlueIcon: React.FC<Props> = ({
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
			d="M11.0323 8.11427C11.2748 8.31427 11.2748 8.68574 11.0323 8.88573L7.06814 12.1553C6.74202 12.4243 6.25 12.1923 6.25 11.7696L6.25 5.23039C6.25 4.80766 6.74202 4.57569 7.06814 4.84467L11.0323 8.11427Z"
			fill="#4050A6"
		/>
	</svg>
);
