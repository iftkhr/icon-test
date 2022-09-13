import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DragIcon: React.FC<Props> = ({
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
		<circle cx="12" cy="12" r="1" fill="#272932" />
		<path
			d="M10.5 6.5L11.8586 5.14142C11.9367 5.06332 12.0633 5.06332 12.1414 5.14142L13.5 6.5"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
		<path
			d="M6.5 13.5L5.14142 12.1414C5.06332 12.0633 5.06332 11.9367 5.14142 11.8586L6.5 10.5"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
		<path
			d="M13.5 17.5L12.1414 18.8586C12.0633 18.9367 11.9367 18.9367 11.8586 18.8586L10.5 17.5"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
		<path
			d="M17.5 10.5L18.8586 11.8586C18.9367 11.9367 18.9367 12.0633 18.8586 12.1414L17.5 13.5"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
	</svg>
);
