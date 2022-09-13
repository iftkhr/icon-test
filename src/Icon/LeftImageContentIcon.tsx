import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LeftImageContentIcon: React.FC<Props> = ({
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
			d="M13.658 8.13715V16.5705L5.13748 16.5705V8.13717L13.658 8.13715ZM13.658 6.63715L5.13748 6.63717C4.31248 6.63717 3.63748 7.31217 3.63748 8.13717L3.63748 16.5705C3.63748 17.3955 4.31248 18.0705 5.13748 18.0705L13.658 18.0705C14.483 18.0705 15.158 17.3955 15.158 16.5705V8.13715C15.158 7.31215 14.483 6.63715 13.658 6.63715ZM10.048 12.1698L8.77759 13.9201L7.98709 13.1579L6.07076 15.5711H12.7583L10.048 12.1698Z"
			fill="#272932"
		/>
		<path
			d="M18.7432 2.92636L3.63748 2.92636V4.48192L18.7432 4.48192V2.92636ZM3.63748 21.042H18.7432V19.4865H3.63748V21.042Z"
			fill="#272932"
		/>
		<path
			d="M20.6003 6.26355H16.6127V7.81911H20.6003V6.26355ZM16.6127 10.9429H18.7432V9.38736H16.6127V10.9429Z"
			fill="#272932"
		/>
		<path
			d="M20.6003 12.7117H16.6127V14.2672H20.6003V12.7117ZM16.6127 17.7162H19.6853V16.1607H16.6127V17.7162Z"
			fill="#272932"
		/>
	</svg>
);
