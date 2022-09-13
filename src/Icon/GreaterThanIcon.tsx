import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const GreaterThanIcon: React.FC<Props> = ({
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
		<path
			d="M14.9543 9.956V11.108L9.05034 13.616V12.464L13.6343 10.532L9.05034 8.612V7.46L14.9543 9.956Z"
			fill="#1D6295"
		/>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
	</svg>
);
