import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MultiplyIcon: React.FC<Props> = ({
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
			d="M8.99502 12.911L10.8259 10.5445L8 9.72775L8.55721 7.96859L11.2637 9.05759L11.1244 6H12.8756L12.7363 9.03665L15.4627 7.96859L16 9.72775L13.194 10.5236L15.0249 12.911L13.592 14L12 11.445L10.408 14L8.99502 12.911Z"
			fill="#1D6295"
		/>
	</svg>
);
