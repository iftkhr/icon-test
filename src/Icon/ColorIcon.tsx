import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ColorIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.5" clip-path="url(#clip0)">
			<path
				d="M15.4001 13.6667C15.4001 14.5856 14.5891 15.4 13.5001 15.4C12.4111 15.4 11.6001 14.5856 11.6001 13.6667C11.6001 13.4902 11.7007 13.1443 11.9336 12.6494C12.154 12.1812 12.453 11.6602 12.7597 11.1668C13.022 10.7448 13.2851 10.3506 13.5001 10.0379C13.7152 10.3506 13.9782 10.7448 14.2405 11.1668C14.5472 11.6602 14.8463 12.1812 15.0666 12.6494C15.2996 13.1443 15.4001 13.4902 15.4001 13.6667Z"
				stroke="#272932"
				stroke-width="1.2"
			/>
			<path
				d="M6.87927 1.13137C7.03548 0.975161 7.28874 0.975161 7.44495 1.13137L12.8767 6.56309L11.5558 6.56309C11.1315 6.56309 10.7245 6.73166 10.4244 7.03172L5.85315 11.603C5.69695 11.7592 5.44368 11.7592 5.28747 11.603L1.13039 7.44593C0.974184 7.28972 0.974184 7.03645 1.13039 6.88024L6.87927 1.13137Z"
				stroke="#272932"
				stroke-width="1.2"
			/>
			<path
				d="M2.86841 9L4.70704 9L8.38431 9"
				stroke="#272932"
				stroke-width="1.2"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="16" height="16" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
