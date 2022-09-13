import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const QuoteIcon: React.FC<Props> = ({
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
				d="M17.1489 16.3333H13.0733L14.6289 13.2222H12.7778V7H19V12.6311L17.1489 16.3333ZM15.5933 14.7778H16.1844L17.4444 12.2578V8.55556H14.3333V11.6667H17.1489L15.5933 14.7778ZM9.37111 16.3333H5.29556L6.85111 13.2222H5V7H11.2222V12.6311L9.37111 16.3333ZM7.81556 14.7778H8.40667L9.66667 12.2578V8.55556H6.55556V11.6667H9.37111L7.81556 14.7778Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
