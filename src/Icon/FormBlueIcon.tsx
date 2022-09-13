import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const FormBlueIcon: React.FC<Props> = ({
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
			x="3.75"
			y="3.75"
			width="16.5"
			height="3.5"
			rx="1.25"
			stroke="#3E9BDE"
			stroke-width="1.5"
		/>
		<rect
			x="3.75"
			y="16.75"
			width="16.5"
			height="3.5"
			rx="1.25"
			stroke="#3E9BDE"
			stroke-width="1.5"
		/>
		<rect
			x="3.75"
			y="10.25"
			width="16.5"
			height="3.5"
			rx="1.25"
			stroke="#3E9BDE"
			stroke-width="1.5"
		/>
		<path d="M17 10.5V12V13.5" stroke="#3E9BDE" stroke-width="1.5" />
		<path d="M17 4V5.5V7" stroke="#3E9BDE" stroke-width="1.5" />
		<path d="M17 17L17 18.5L17 20" stroke="#3E9BDE" stroke-width="1.5" />
	</svg>
);
