import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EndFlowIcon: React.FC<Props> = ({
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
		<g clip-path="url(#clip0)">
			<path
				d="M23 8L4 8"
				stroke="#4050A6"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
		</g>
		<path
			d="M23 15L23 8"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M23 15L20 12"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M26 12L23 15"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<defs>
			<clipPath id="clip0">
				<rect
					width="16"
					height="27"
					fill="white"
					transform="translate(0 16) rotate(-90)"
				/>
			</clipPath>
		</defs>
	</svg>
);
