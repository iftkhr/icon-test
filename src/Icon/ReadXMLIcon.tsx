import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ReadXMLIcon: React.FC<Props> = ({
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
		<path
			d="M4.04285 7.33309L6.87611 6.56575C7.61767 6.36491 8.29932 7.04059 8.10501 7.78389L7.36049 10.632L3.85546 14.1933C3.15257 14.8962 1.51262 14.8493 0.669046 14.0059C-0.277552 13.0594 -0.118424 11.4754 0.518912 10.8382L4.04285 7.33309Z"
			fill="#FFADAD"
		/>
		<path
			d="M6.39773 16.6364H5.20881L6.5277 18.8182L5.17472 21H6.37642L7.1946 19.6065H7.22869L8.04688 21H9.2571L7.89773 18.8182L9.21449 16.6364H8.03409L7.22869 18.0149H7.1946L6.39773 16.6364ZM10.3599 16.6364V21H11.3869V18.3047H11.4232L12.4714 20.9723H13.1277L14.176 18.3196H14.2122V21H15.2392V16.6364H13.9331L12.8251 19.3381H12.774L11.6661 16.6364H10.3599ZM16.4971 21H19.3671V20.1435H17.5517V16.6364H16.4971V21Z"
			fill="#272932"
		/>
		<path
			d="M6.82083 13.3138C6.51094 13.6237 6.09063 13.7978 5.65238 13.7978C5.21413 13.7978 4.79383 13.6237 4.48394 13.3138C4.17404 13.0039 3.99995 12.5836 3.99995 12.1453C3.99995 11.7071 4.17404 11.2868 4.48394 10.9769L7.68297 7.77896L10.4754 7.08084C10.6219 7.04422 10.7546 7.1769 10.718 7.32338L10.0199 10.1159L6.82083 13.3138Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="3.75"
			y1="3.25"
			x2="20.25"
			y2="3.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="14.75"
			y1="7.25"
			x2="20.25"
			y2="7.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
