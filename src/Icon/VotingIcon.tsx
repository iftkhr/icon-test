import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const VotingIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "24",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="5.28955"
			y="18.4995"
			width="6.48166"
			height="5.50052"
			rx="1.5"
			fill="#F7E691"
		/>
		<rect
			x="0.759155"
			y="10.771"
			width="6.48166"
			height="5.50052"
			rx="1.5"
			fill="#F7E691"
		/>
		<rect
			x="5.28955"
			y="3.79834"
			width="6.48166"
			height="5.50052"
			rx="1.5"
			fill="#F7E691"
		/>
		<line
			x1="17.25"
			y1="18.75"
			x2="17.25"
			y2="11.75"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="20.75"
			y1="15.25"
			x2="13.75"
			y2="15.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="4"
			y="3"
			width="5"
			height="4"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="12"
			y="3"
			width="5"
			height="4"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="4"
			y="10"
			width="5"
			height="4"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="4"
			y="17"
			width="5"
			height="4"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
