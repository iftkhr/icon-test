import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const HorizontalLineIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "2",
	width = "35",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 35 2"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path d="M35 1L0 1" stroke="#4050A6" stroke-width="1.3" />
	</svg>
);
