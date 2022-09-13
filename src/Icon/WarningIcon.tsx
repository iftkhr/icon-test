import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const WarningIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "18",
	width = "18",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 18 18"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M17.8061 15.3632L10.6295 1.00723C10.319 0.385945 9.6946 0 9.00009 0C8.30558 0 7.6812 0.385945 7.3706 1.00723L0.194081 15.3632C-0.0903686 15.9322 -0.060521 16.5949 0.273885 17.136C0.608256 17.677 1.18756 18 1.8235 18H16.1767C16.8126 18 17.3919 17.677 17.7263 17.136C18.0607 16.5949 18.0905 15.9322 17.8061 15.3632ZM16.5301 16.3967C16.4935 16.4559 16.3857 16.5938 16.1766 16.5938H1.8235C1.61446 16.5938 1.50671 16.4559 1.47008 16.3967C1.43344 16.3374 1.35828 16.1792 1.45187 15.992L8.62842 1.63603C8.73209 1.42864 8.92288 1.40625 9.00009 1.40625C9.07729 1.40625 9.26808 1.42864 9.37176 1.63603L16.5483 15.9921C16.6419 16.1792 16.5667 16.3374 16.5301 16.3967Z"
			fill="white"
		/>
		<path
			d="M9 6.33008C8.61166 6.33008 8.29688 6.64487 8.29688 7.0332V11.4671C8.29688 11.8555 8.61166 12.1702 9 12.1702C9.38834 12.1702 9.70309 11.8555 9.70312 11.4672V7.0332C9.70312 6.64487 9.38834 6.33008 9 6.33008Z"
			fill="white"
		/>
		<path
			d="M8.99967 14.877C9.52391 14.877 9.94888 14.452 9.94888 13.9277C9.94888 13.4035 9.52391 12.9785 8.99967 12.9785C8.47544 12.9785 8.05046 13.4035 8.05046 13.9277C8.05046 14.452 8.47544 14.877 8.99967 14.877Z"
			fill="white"
		/>
	</svg>
);
