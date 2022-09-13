import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ForEachParallelIcon: React.FC<Props> = ({
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
			d="M9.35919 15.4737V1.52637C9.35919 0.69794 10.0308 0.0263672 10.8592 0.0263672H15.1409C15.9693 0.0263672 16.6409 0.697939 16.6409 1.52637V15.4737C16.6409 16.3022 15.9693 16.9737 15.1409 16.9737H10.8592C10.0308 16.9737 9.35919 16.3022 9.35919 15.4737Z"
			fill="#F7E691"
		/>
		<g clip-path="url(#clip0)">
			<path
				d="M7 10.5L10 7.5L7 4.5"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10 7.5L4 7.5"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M7 19.5L10 16.5L7 13.5"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10 16.5L4 16.5"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</g>
		<rect
			x="13.75"
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
		</defs>
	</svg>
);
