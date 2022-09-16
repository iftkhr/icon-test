import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const AsCurrencyIcon: React.FC<Props> = ({
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
			d="M15.2303 11.588C15.2303 12.236 15.0023 12.784 14.5463 13.232C14.0983 13.672 13.4943 13.948 12.7343 14.06V15.392H11.5103V14.084C10.9743 14.044 10.4743 13.94 10.0103 13.772C9.55434 13.604 9.15434 13.376 8.81034 13.088L9.33834 11.96C10.0343 12.504 10.7863 12.804 11.5943 12.86V10.364C11.0583 10.228 10.6063 10.08 10.2383 9.92C9.87034 9.752 9.56234 9.508 9.31434 9.188C9.06634 8.86 8.94234 8.436 8.94234 7.916C8.94234 7.484 9.05034 7.092 9.26634 6.74C9.48234 6.38 9.78234 6.084 10.1663 5.852C10.5583 5.612 11.0063 5.46 11.5103 5.396V4.064H12.7343V5.384C13.1983 5.44 13.6343 5.552 14.0423 5.72C14.4503 5.888 14.7943 6.1 15.0743 6.356L14.5463 7.484C13.9623 7.004 13.3303 6.716 12.6503 6.62V9.224C13.1863 9.36 13.6303 9.508 13.9823 9.668C14.3343 9.82 14.6303 10.052 14.8703 10.364C15.1103 10.676 15.2303 11.084 15.2303 11.588ZM10.4903 7.832C10.4903 8.112 10.5863 8.34 10.7783 8.516C10.9703 8.684 11.2423 8.828 11.5943 8.948V6.632C11.2503 6.704 10.9783 6.844 10.7783 7.052C10.5863 7.26 10.4903 7.52 10.4903 7.832ZM12.6503 12.8C12.9863 12.728 13.2423 12.596 13.4183 12.404C13.5943 12.204 13.6823 11.948 13.6823 11.636C13.6823 11.388 13.5943 11.188 13.4183 11.036C13.2423 10.884 12.9863 10.756 12.6503 10.652V12.8Z"
			fill="#1D6295"
		/>
	</svg>
);