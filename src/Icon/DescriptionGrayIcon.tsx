import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DescriptionGrayIcon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<rect x="12" y="5" width="6" height="1.2" rx="0.6" fill="#272932" />
			<rect x="12" y="9" width="6" height="1.2" rx="0.6" fill="#272932" />
			<rect
				x="6"
				y="13"
				width="12"
				height="1.2"
				rx="0.6"
				fill="#272932"
			/>
			<rect x="6" y="17" width="9" height="1.2" rx="0.6" fill="#272932" />
			<path
				d="M7.68056 10H6V5H7.69444C8.1713 5 8.58179 5.1001 8.92593 5.30029C9.27006 5.49886 9.53472 5.7845 9.71991 6.15723C9.90664 6.52995 10 6.97591 10 7.49512C10 8.01595 9.90664 8.46354 9.71991 8.83789C9.53472 9.21224 9.26852 9.49951 8.9213 9.69971C8.57562 9.8999 8.16204 10 7.68056 10ZM7.00231 9.09424H7.63889C7.93519 9.09424 8.18441 9.0389 8.38657 8.92822C8.59028 8.81592 8.74306 8.64258 8.84491 8.4082C8.9483 8.1722 9 7.86784 9 7.49512C9 7.12565 8.9483 6.82373 8.84491 6.58936C8.74306 6.35498 8.59105 6.18245 8.38889 6.07178C8.18673 5.9611 7.9375 5.90576 7.6412 5.90576H7.00231V9.09424Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
