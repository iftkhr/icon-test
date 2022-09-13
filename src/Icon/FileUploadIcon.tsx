import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const FileUploadIcon: React.FC<Props> = ({
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
		<rect x="2" y="7" width="12" height="15" rx="2" fill="#87DDB4" />
		<path
			d="M6 14V15.5C6 16.3284 6.67157 17 7.5 17H16.5C17.3284 17 18 16.3284 18 15.5V14"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 9L12 6L9 9"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12 6L12 14"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
