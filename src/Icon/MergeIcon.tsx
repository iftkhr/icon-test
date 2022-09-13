import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MergeIcon: React.FC<Props> = ({
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
		<path d="M16 14V18" stroke="#272932" stroke-linecap="round" />
		<path d="M14 16L18 16" stroke="#272932" stroke-linecap="round" />
		<rect x="13.5" y="4.5" width="6" height="6" rx="1.5" stroke="#272932" />
		<rect x="4.5" y="13.5" width="6" height="6" rx="1.5" stroke="#272932" />
		<path
			d="M6.12935 9.91282L7.69253 9.09643L8.70867 10.4891"
			stroke="#272932"
			stroke-linecap="round"
		/>
		<path
			d="M10.0651 8.71233L8.39907 8.1341L8.71624 6.43954"
			stroke="#272932"
			stroke-linecap="round"
		/>
		<path
			d="M11.2721 7.41568C11.2721 7.41568 10.0582 7.11684 8.47998 8.02972"
			stroke="#272932"
			stroke-linecap="round"
		/>
		<path
			d="M7.33919 11.92C7.33919 11.92 6.91623 10.6655 7.78648 9.29043"
			stroke="#272932"
			stroke-linecap="round"
		/>
	</svg>
);
