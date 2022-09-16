import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ErrorFlowIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "27",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 27 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M25.8282 10.8287L20.1714 5.17188"
			stroke="#EE3E54"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M20.1718 10.8287L25.8286 5.17188"
			stroke="#EE3E54"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<g>
			<path
				d="M19 8L4 8"
				stroke="#EE3E54"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="16"
					height="23"
					fill="white"
					transform="translate(0 16) rotate(-90)"
				/>
			</clipPath>
		</defs>
	</svg>
);
