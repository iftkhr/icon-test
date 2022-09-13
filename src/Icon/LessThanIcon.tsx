import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LessThanIcon: React.FC<Props> = ({
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
			d="M14.9543 8.612L10.3703 10.532L14.9543 12.464V13.616L9.05034 11.108V9.956L14.9543 7.46V8.612Z"
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
