import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const BoldIcon: React.FC<Props> = ({
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
				d="M15.0001 11.9918C15.8084 11.4334 16.3751 10.5168 16.3751 9.66677C16.3751 7.78343 14.9168 6.33344 13.0418 6.33344H7.83344V18.0001H13.7001C15.4418 18.0001 16.7918 16.5834 16.7918 14.8418C16.7918 13.5751 16.0751 12.4918 15.0001 11.9918ZM10.3334 8.41677H12.8334C13.5251 8.41677 14.0834 8.9751 14.0834 9.66677C14.0834 10.3584 13.5251 10.9168 12.8334 10.9168H10.3334V8.41677ZM13.2501 15.9168H10.3334V13.4168H13.2501C13.9418 13.4168 14.5001 13.9751 14.5001 14.6668C14.5001 15.3584 13.9418 15.9168 13.2501 15.9168Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
