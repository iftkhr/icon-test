import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const StepDescriptionIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "8",
	width = "10",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 10 8"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.3" clip-path="url(#clip0)">
			<path
				d="M4.68056 6.5H3V1.5H4.69444C5.1713 1.5 5.58179 1.6001 5.92593 1.80029C6.27006 1.99886 6.53472 2.2845 6.71991 2.65723C6.90664 3.02995 7 3.47591 7 3.99512C7 4.51595 6.90664 4.96354 6.71991 5.33789C6.53472 5.71224 6.26852 5.99951 5.9213 6.19971C5.57562 6.3999 5.16204 6.5 4.68056 6.5ZM4.00231 5.59424H4.63889C4.93519 5.59424 5.18441 5.5389 5.38657 5.42822C5.59028 5.31592 5.74306 5.14258 5.84491 4.9082C5.9483 4.6722 6 4.36784 6 3.99512C6 3.62565 5.9483 3.32373 5.84491 3.08936C5.74306 2.85498 5.59105 2.68245 5.38889 2.57178C5.18673 2.4611 4.9375 2.40576 4.6412 2.40576H4.00231V5.59424Z"
				fill="#272932"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="10" height="8" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
