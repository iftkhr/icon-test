import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExpressionBlueIcon: React.FC<Props> = ({
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
		<g clip-path="url(#clip0_13763_618780)">
			<path
				d="M4.41352 12L8.00001 12"
				stroke="#4050A6"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M14 13L20.9072 19.9072"
				stroke="#4050A6"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M14 19.9072L20.9072 13"
				stroke="#4050A6"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M11.3291 20.0513C9.38576 20.0513 7.4406 20.0513 6.05078 20.0513C4.94621 20.0513 4.05132 19.1571 4.05132 18.0525C4.05133 16.5647 4.05132 14.317 4.05132 11.5513C4.05132 9.25003 4.05133 7.32766 4.05134 5.99849C4.05136 4.89394 4.94542 4.00008 6.04996 4.00008C7.38676 4.00007 9.27304 4.00006 11.3291 4.00006"
				stroke="#4050A6"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_13763_618780">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
