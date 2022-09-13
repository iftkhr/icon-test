import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NotEqualIcon: React.FC<Props> = ({
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
			d="M12.7823 9.86L12.2183 11.216H14.9543V12.284H11.7743L11.1143 13.88L10.1303 13.472L10.6223 12.284H9.05034V11.216H11.0663L11.6303 9.86H9.05034V8.792H12.0743L12.7463 7.184L13.7183 7.604L13.2263 8.792H14.9543V9.86H12.7823Z"
			fill="#1D6295"
		/>
	</svg>
);
