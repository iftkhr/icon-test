import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ErrorBranchIcon: React.FC<Props> = ({
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
			<path
				d="M4 3.5C3.72386 3.5 3.5 3.72386 3.5 4C3.5 4.27614 3.72386 4.5 4 4.5V3.5ZM4 4.5C5.10427 4.5 5.87938 5.17839 6.61499 6.43944C6.9813 7.0674 7.31884 7.80882 7.67168 8.62757C8.02071 9.43746 8.38637 10.3272 8.7965 11.2106C9.61808 12.9801 10.6541 14.8078 12.2508 16.1905C13.8622 17.5859 16.0114 18.5 19 18.5V17.5C16.2386 17.5 14.3253 16.6641 12.9054 15.4345C11.4709 14.1922 10.5069 12.5199 9.7035 10.7894C9.30113 9.92279 8.94804 9.06254 8.59003 8.2318C8.23585 7.40993 7.87808 6.6201 7.47876 5.93556C6.68312 4.57161 5.64573 3.5 4 3.5V4.5ZM4 4.5C5.24503 4.5 6.03808 4.88761 6.72148 5.47338C7.07428 5.77578 7.40174 6.13475 7.75212 6.54128C8.09572 6.93992 8.46901 7.39374 8.8836 7.84023C9.72662 8.74809 10.7812 9.67307 12.3795 10.3651C13.9725 11.0549 16.0748 11.5 19 11.5V10.5C16.1752 10.5 14.215 10.0701 12.7768 9.44741C11.3438 8.82693 10.3984 8.00191 9.6164 7.15977C9.21849 6.73126 8.87303 6.31008 8.50959 5.88841C8.15295 5.47462 7.78509 5.06797 7.37227 4.71412C6.52442 3.98739 5.50497 3.5 4 3.5V4.5Z"
				fill="#272932"
			/>
			<path
				d="M17 9L19 11L17 13M17 16L19 18L17 20"
				stroke="#272932"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8 19L4 15"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
			<path
				d="M4 19L8 15"
				stroke="#272932"
				stroke-width="1.3"
				stroke-linecap="round"
			/>
		</g>
	</svg>
);
