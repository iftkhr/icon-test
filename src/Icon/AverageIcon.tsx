import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const AverageIcon: React.FC<Props> = ({
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
			d="M14.7618 6.94V13H13.2978V12.064C13.1058 12.4 12.8498 12.656 12.5298 12.832C12.2098 13.008 11.8418 13.096 11.4258 13.096C11.1618 13.096 10.9178 13.052 10.6938 12.964V15.592H9.20578V6.94H10.6938V10.612C10.6938 11.052 10.7818 11.376 10.9578 11.584C11.1418 11.792 11.4218 11.896 11.7978 11.896C12.2378 11.896 12.5898 11.752 12.8538 11.464C13.1178 11.176 13.2498 10.792 13.2498 10.312V6.94H14.7618Z"
			fill="#1D6295"
		/>
	</svg>
);
