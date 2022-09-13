import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const H1Icon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<path
				d="M5.86084 16H7.44181V12.2926H11.4858V16H13.0711V7.27271H11.4858V10.9673H7.44181V7.27271H5.86084V16Z"
				fill="#272932"
			/>
			<path
				d="M18.255 7.27271H16.7508L14.5817 8.66617V10.115L16.6229 8.81106H16.6741V16H18.255V7.27271Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
