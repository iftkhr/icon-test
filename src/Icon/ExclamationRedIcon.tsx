import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExclamationRedIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "12",
	width = "12",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 12 12"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M6 0C2.68352 0 0 2.68376 0 6C0 9.31648 2.68376 12 6 12C9.31648 12 12 9.31624 12 6C12 2.68352 9.31624 0 6 0ZM6 11.0625C3.20173 11.0625 0.9375 8.79809 0.9375 6C0.9375 3.20173 3.20191 0.9375 6 0.9375C8.79827 0.9375 11.0625 3.20191 11.0625 6C11.0625 8.79827 8.79809 11.0625 6 11.0625Z"
			fill="#F65C66"
		/>
		<path
			d="M6 3.02148C5.74111 3.02148 5.53125 3.23134 5.53125 3.49023V6.50881C5.53125 6.7677 5.74111 6.97756 6 6.97756C6.25889 6.97756 6.46875 6.7677 6.46875 6.50881V3.49023C6.46875 3.23134 6.25889 3.02148 6 3.02148Z"
			fill="#F65C66"
		/>
		<path
			d="M6 8.81641C6.34949 8.81641 6.63281 8.53309 6.63281 8.18359C6.63281 7.8341 6.34949 7.55078 6 7.55078C5.65051 7.55078 5.36719 7.8341 5.36719 8.18359C5.36719 8.53309 5.65051 8.81641 6 8.81641Z"
			fill="#F65C66"
		/>
	</svg>
);
