import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const AbsoluteIcon: React.FC<Props> = ({
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
			d="M5.95861 5.456H7.36261V16.184H5.95861V5.456ZM14.0733 8.408L13.5693 10.94H14.8413V11.924H13.3773L12.9693 14H11.9253L12.3333 11.924H10.7973L10.3893 14H9.34533L9.75333 11.924H8.88933V10.94H9.94533L10.4493 8.408H9.15333V7.436H10.6413L11.0253 5.456H12.0693L11.6853 7.436H13.2213L13.6053 5.456H14.6493L14.2653 7.436H15.1173V8.408H14.0733ZM13.0293 8.408H11.4933L10.9893 10.94H12.5253L13.0293 8.408ZM16.6227 5.456H18.0267V16.184H16.6227V5.456Z"
			fill="#1D6295"
		/>
	</svg>
);
