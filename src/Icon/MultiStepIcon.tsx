import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MultiStepIcon: React.FC<Props> = ({
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
		<circle cx="13" cy="6.05389" r="5.94598" fill="#87DDB4" />
		<path
			d="M5 4C5 4 4 4.5 4 6C4 7.12265 4 14.4069 4 18.0009C4 19.1055 4.89543 20 6 20H8C9.10457 20 10 19.1046 10 18V17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M10 11.5703V11.5"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M10 6.6592V6.58887"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 7L20.25 7"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 12L20.25 12"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 17L20.25 17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 12C13 10.3431 11.6569 9 10 9C8.34315 9 7 10.3431 7 12"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M13 17C13 15.3431 11.6569 14 10 14C8.34315 14 7 15.3431 7 17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
