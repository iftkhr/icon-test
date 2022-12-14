import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CombineIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M9.23242 5L9.66821 4.75487L9.52485 4.5H9.23242V5ZM9.23242 15V15.5H9.52485L9.66821 15.2451L9.23242 15ZM12.0449 10.5H18.2949V9.5H12.0449V10.5ZM5.16992 5.5H9.23242V4.5H5.16992V5.5ZM8.79663 5.24513L11.6091 10.2451L12.4807 9.75487L9.66821 4.75487L8.79663 5.24513ZM11.6091 9.75487L8.79663 14.7549L9.66821 15.2451L12.4807 10.2451L11.6091 9.75487ZM9.23242 14.5H5.16992V15.5H9.23242V14.5Z"
			fill="#1D6295"
		/>
		<path
			d="M15.1694 6.7002L18.4693 10L15.1694 13.2999"
			stroke="#1D6295"
			stroke-linecap="round"
		/>
	</svg>
);
