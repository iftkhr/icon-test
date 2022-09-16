import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExpressionIcon: React.FC<Props> = ({
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
		<g>
			<path
				d="M4.41351 12L8 12"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M14 13L20.9072 19.9072"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M14 19.9072L20.9072 13"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M11.3291 20.0513C9.38575 20.0513 7.44059 20.0513 6.05077 20.0513C4.9462 20.0513 4.05132 19.1571 4.05132 18.0525C4.05132 16.5647 4.05132 14.317 4.05131 11.5513C4.05131 9.25003 4.05132 7.32766 4.05133 5.99849C4.05135 4.89394 4.94541 4.00008 6.04996 4.00008C7.38675 4.00007 9.27303 4.00006 11.3291 4.00006"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
