import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LayoutIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "17",
	width = "21",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 21 17"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M19.7725 0.753906H1.33496C0.903477 0.753906 0.553711 1.10367 0.553711 1.53516V15.5977C0.553711 16.0291 0.903477 16.3789 1.33496 16.3789H19.7725C20.2039 16.3789 20.5537 16.0291 20.5537 15.5977V1.53516C20.5537 1.10367 20.2039 0.753906 19.7725 0.753906ZM6.25684 14.8164H2.11621V5.83203H6.25684V14.8164ZM18.9912 14.8164H7.81934V5.83203H18.9912V14.8164ZM18.9912 4.26953H2.11621V2.31641H18.9912V4.26953Z"
			fill="#677C95"
		/>
	</svg>
);
