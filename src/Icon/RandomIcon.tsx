import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RandomIcon: React.FC<Props> = ({
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
			d="M15.7431 14H14.1111L13.0191 11.156C12.9231 10.892 12.7751 10.708 12.5751 10.604C12.3751 10.5 12.1151 10.448 11.7951 10.448H10.2471V14H8.71111V5.456H12.3711C13.3391 5.456 14.0751 5.668 14.5791 6.092C15.0831 6.516 15.3351 7.124 15.3351 7.916C15.3351 8.484 15.1831 8.968 14.8791 9.368C14.5831 9.76 14.1591 10.04 13.6071 10.208C14.1111 10.312 14.4751 10.664 14.6991 11.264L15.7431 14ZM12.1551 9.248C12.7391 9.248 13.1711 9.14 13.4511 8.924C13.7311 8.708 13.8711 8.38 13.8711 7.94C13.8711 7.508 13.7311 7.188 13.4511 6.98C13.1791 6.764 12.7471 6.656 12.1551 6.656H10.2231V9.248H12.1551Z"
			fill="#1D6295"
		/>
	</svg>
);
