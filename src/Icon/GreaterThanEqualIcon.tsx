import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const GreaterThanEqualIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M14.9543 9.392V10.532L9.05034 12.488V11.36L13.4303 9.968L9.05034 8.576V7.46L14.9543 9.392ZM9.05034 12.944H14.9543V14H9.05034V12.944Z"
			fill="#1D6295"
		/>
	</svg>
);
