import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CheckboxIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "18",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 18"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.6">
			<path
				d="M16.3979 0.765625H2.6167C1.45359 0.765625 0.507324 1.71189 0.507324 2.875V15.125C0.507324 16.2881 1.45359 17.2344 2.6167 17.2344H16.3979C17.5611 17.2344 18.5073 16.2881 18.5073 15.125V2.875C18.5073 1.71189 17.5611 0.765625 16.3979 0.765625ZM17.1011 15.125C17.1011 15.5127 16.7857 15.8281 16.3979 15.8281H2.6167C2.229 15.8281 1.91357 15.5127 1.91357 15.125V2.875C1.91357 2.4873 2.229 2.17188 2.6167 2.17188H16.3979C16.7857 2.17188 17.1011 2.4873 17.1011 2.875V15.125Z"
				fill="#677C95"
			/>
			<g clip-path="url(#clip1)">
				<path
					d="M13.273 7.45609L9.05267 11.6761C8.74015 11.9887 8.23319 11.9887 7.92037 11.6761L5.7418 9.4974C5.42916 9.18482 5.42916 8.6778 5.7418 8.36517C6.0545 8.05247 6.56142 8.05247 6.87398 8.36505L8.48669 9.97777L12.1406 6.32379C12.4533 6.01109 12.9603 6.01133 13.2729 6.32379C13.5855 6.63643 13.5855 7.14327 13.273 7.45609Z"
					fill="#677C95"
				/>
			</g>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="18"
					height="18"
					fill="white"
					transform="translate(0.507324)"
				/>
			</clipPath>
			<clipPath id="clip1">
				<rect
					width="8"
					height="8"
					fill="white"
					transform="translate(5.50732 5)"
				/>
			</clipPath>
		</defs>
	</svg>
);
