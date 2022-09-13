import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CloudUploadIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M11 12H11.5H11.5033C13.4348 11.9983 15 10.5215 15 8.69997C15 6.87781 13.4336 5.40058 11.5012 5.39999C10.8778 3.99062 9.40251 3 7.68182 3C5.49889 3 3.71091 4.59434 3.5563 6.61535C2.11928 6.75992 1 7.90671 1 9.29997C1 10.7911 2.2821 12 3.86364 12C3.87405 12 3.88445 12.0001 3.89483 12H4.79467"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M10.5 9.5L8 7L5.5 9.5"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M8 8L8 13"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
	</svg>
);
