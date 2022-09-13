import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const PasswordBoxIcon: React.FC<Props> = ({
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
			d="M11 6C11 3.23858 13.2386 1 16 1H17C19.7614 1 22 3.23858 22 6V13C22 14.1046 21.1046 15 20 15H13C11.8954 15 11 14.1046 11 13V6Z"
			fill="#FFADAD"
		/>
		<path
			d="M8.5 10V7.5C8.5 6.5 9.2 4 12 4C14.8 4 15.5 6.5 15.5 7.5V10"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<rect
			x="6.75"
			y="10.75"
			width="10.5"
			height="8.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M12 15L12.0002 15.01"
			stroke="#272932"
			stroke-width="2"
			stroke-linecap="round"
		/>
	</svg>
);
