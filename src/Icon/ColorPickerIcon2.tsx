import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ColorPickerIcon2: React.FC<Props> = ({
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
		<g opacity="0.5" clip-path="url(#clip0)">
			<path
				d="M19.2501 17.6667C19.2501 18.4932 18.5162 19.25 17.5001 19.25C16.484 19.25 15.7501 18.4932 15.7501 17.6667C15.7501 17.5266 15.8367 17.2074 16.0693 16.7133C16.2862 16.2526 16.5819 15.7371 16.8871 15.246C17.0996 14.9041 17.3127 14.5805 17.5001 14.3039C17.6876 14.5805 17.9006 14.9041 18.1131 15.246C18.4184 15.7371 18.7141 16.2526 18.9309 16.7133C19.1635 17.2074 19.2501 17.5266 19.2501 17.6667Z"
				stroke="#272932"
				stroke-width="1.5"
			/>
			<path
				d="M10.9853 5.23744C11.083 5.13981 11.2413 5.13981 11.3389 5.23744L16.5145 10.4131L15.5558 10.4131C15.0917 10.4131 14.6466 10.5975 14.3184 10.9256L9.74709 15.4969C9.64946 15.5946 9.49117 15.5946 9.39354 15.4969L5.23646 11.3399C5.13883 11.2422 5.13883 11.0839 5.23646 10.9863L10.9853 5.23744Z"
				stroke="#272932"
				stroke-width="1.5"
			/>
			<path
				d="M6.86851 13L8.70714 13L12.3844 13"
				stroke="#272932"
				stroke-width="1.5"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="16"
					height="16"
					fill="white"
					transform="translate(4 4)"
				/>
			</clipPath>
		</defs>
	</svg>
);
