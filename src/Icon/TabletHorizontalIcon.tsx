import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TabletHorizontalIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "15",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 15"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M16.7295 0.798828H2.94824C1.78513 0.798828 0.838867 1.74509 0.838867 2.9082V12.752C0.838867 13.9151 1.78513 14.8613 2.94824 14.8613H16.7295C17.8926 14.8613 18.8389 13.9151 18.8389 12.752V2.9082C18.8389 1.74509 17.8926 0.798828 16.7295 0.798828ZM17.4326 12.752C17.4326 13.1397 17.1172 13.4551 16.7295 13.4551H2.94824C2.56054 13.4551 2.24512 13.1397 2.24512 12.752V2.9082C2.24512 2.5205 2.56054 2.20508 2.94824 2.20508H16.7295C17.1172 2.20508 17.4326 2.5205 17.4326 2.9082V12.752Z"
			fill="#677C95"
		/>
	</svg>
);
