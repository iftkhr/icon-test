import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExpandAllIcon: React.FC<Props> = ({
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
		<path
			d="M20.0268 16.4865L19.9999 11.4865L15 11.5134"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M11.5063 15L11.4936 20L16.4936 20.0127"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="3"
			y="3"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="3"
			y="9"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="9"
			y="3"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="9"
			y="9"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
