import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MappingDarkIcon: React.FC<Props> = ({
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
		<ellipse
			cx="7.5"
			cy="4.5"
			rx="3.5"
			ry="1.5"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M11 11C11 12.1046 9.433 13 7.5 13C5.567 13 4 12.1046 4 11"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M11 7.5C11 8.60457 9.433 9.5 7.5 9.5C5.567 9.5 4 8.60457 4 7.5"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M11 11V5M4 11V5"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M21.25 13.8571C21.25 14.5702 20.8152 15.5042 20.1309 16.485C19.4689 17.434 18.6639 18.3009 18.1128 18.8533C18.0764 18.8898 18.0364 18.903 18 18.903C17.9636 18.903 17.9236 18.8898 17.8872 18.8533C17.3361 18.3009 16.5311 17.434 15.8691 16.485C15.1848 15.5042 14.75 14.5702 14.75 13.8571C14.75 12.1666 16.1791 10.75 18 10.75C19.8209 10.75 21.25 12.1666 21.25 13.8571Z"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<circle cx="18" cy="14" r="0.5" fill="#272932" stroke="#272932" />
		<path
			d="M7.54172 13C4.49993 13.5 2.48796 16.2291 3.49992 18C5.50001 21.5 8 16.5 11 17.5C13.1213 18.2071 12.5 20.5 15 20.5C17 20.5 17.6667 19.3333 18 19"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
