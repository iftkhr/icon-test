import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const BranchingMergingIcon: React.FC<Props> = ({
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
			d="M16.4375 6.45918V1.54102C16.4375 0.988731 16.8852 0.541016 17.4375 0.541016H22.4232C22.9755 0.541016 23.4232 0.988731 23.4232 1.54102V6.45918C23.4232 7.01146 22.9755 7.45918 22.4232 7.45918H17.4375C16.8852 7.45918 16.4375 7.01146 16.4375 6.45918Z"
			fill="#ADE2FF"
		/>
		<path
			d="M10.0143 17.4592V12.541C10.0143 11.9887 10.462 11.541 11.0143 11.541H16C16.5523 11.541 17 11.9887 17 12.541V17.4592C17 18.0115 16.5523 18.4592 16 18.4592H11.0143C10.462 18.4592 10.0143 18.0115 10.0143 17.4592Z"
			fill="#ADE2FF"
		/>
		<g clip-path="url(#clip0)">
			<path
				d="M7 10L10 7L7 4"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10 7L4 7"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M7 20L10 17L7 14"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10 17L4 17"
				stroke="#272932"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</g>
		<rect
			x="13.75"
			y="3.75"
			width="6.5"
			height="6.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="13.75"
			y="13.75"
			width="6.5"
			height="6.5"
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
