import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ServiceCallIcon: React.FC<Props> = ({
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
			d="M8.10132 10.1378V5.87693C8.10132 4.99093 9.16834 4.54258 9.80119 5.16266L11.985 7.30241C12.3864 7.69572 12.385 8.34245 11.9818 8.734L9.79806 10.8552C9.16402 11.471 8.10132 11.0217 8.10132 10.1378Z"
			fill="#87DDB4"
		/>
		<path
			d="M8.10132 19.1378V14.8769C8.10132 13.9909 9.16834 13.5426 9.80119 14.1627L11.985 16.3024C12.3864 16.6957 12.385 17.3425 11.9818 17.734L9.79806 19.8552C9.16402 20.471 8.10132 20.0217 8.10132 19.1378Z"
			fill="#87DDB4"
		/>
		<path
			d="M22.6156 6.93582L22.6156 17.0498C22.6156 17.9358 21.5486 18.3842 20.9157 17.7641L15.7321 12.685C15.3307 12.2917 15.3321 11.645 15.7353 11.2534L20.9189 6.2185C21.5529 5.60264 22.6156 6.05192 22.6156 6.93582Z"
			fill="#87DDB4"
		/>
		<line
			x1="12.25"
			y1="20.25"
			x2="12.25"
			y2="3.75"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M18 9L15 12L18 15"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 12H22"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M6 11L9 8L6 5"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9 8L2 8"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M6 20L9 17L6 14"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M9 17L2 17"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
	</svg>
);
