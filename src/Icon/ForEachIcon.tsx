import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ForEachIcon: React.FC<Props> = ({
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
			d="M6.71832 22.5001V8.55273C6.71832 7.72431 7.3899 7.05273 8.21832 7.05273H12.5C13.3284 7.05273 14 7.72431 14 8.55273V22.5001C14 23.3285 13.3284 24.0001 12.5 24.0001H8.21832C7.3899 24.0001 6.71832 23.3285 6.71832 22.5001Z"
			fill="#F7E691"
		/>
		<g>
			<g clip-path="url(#clip1)">
				<path
					d="M17 5L14 8L17 11"
					stroke="#272932"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M14 8L17 8"
					stroke="#272932"
					stroke-width="1.3"
					stroke-linecap="round"
				/>
			</g>
			<path
				d="M14 17L16.5 17C18.9853 17 21 14.9853 21 12.5V12.5C21 10.0147 18.9853 8 16.5 8L14 8"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</g>
		<rect
			x="3.75"
			y="3.75"
			width="6.5"
			height="16.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<defs>
			<clipPath id="clip0">
				<rect width="24" height="24" fill="white" />
			</clipPath>
			<clipPath id="clip1">
				<rect
					width="16"
					height="11"
					fill="white"
					transform="translate(21) rotate(90)"
				/>
			</clipPath>
		</defs>
	</svg>
);
