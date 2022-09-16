import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CheckListIcon: React.FC<Props> = ({
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
				d="M6.25122 1.95996H17.7692C18.1575 1.95996 18.4723 2.27476 18.4723 2.66309C18.4723 3.05141 18.1575 3.36621 17.7692 3.36621H6.25122C5.8629 3.36621 5.5481 3.05141 5.5481 2.66309C5.5481 2.27476 5.8629 1.95996 6.25122 1.95996Z"
				fill="#677C95"
			/>
			<path
				d="M1.93417 3.91358C1.78325 3.9091 1.63367 3.84926 1.51847 3.73407L0.919614 3.13521C0.679912 2.89551 0.679912 2.50688 0.919613 2.26718C1.15931 2.02747 1.54795 2.02747 1.78765 2.26718L1.95417 2.4337L3.22925 1.15863C3.46895 0.918925 3.85758 0.918926 4.09728 1.15863C4.33698 1.39833 4.33698 1.78696 4.09728 2.02666L2.38977 3.73418C2.26443 3.85952 2.09837 3.91932 1.93417 3.91358Z"
				fill="#677C95"
			/>
			<path
				d="M6.25122 7.45239H17.7692C18.1575 7.45239 18.4723 7.76719 18.4723 8.15552C18.4723 8.54384 18.1575 8.85864 17.7692 8.85864H6.25122C5.8629 8.85864 5.5481 8.54384 5.5481 8.15552C5.5481 7.76719 5.8629 7.45239 6.25122 7.45239Z"
				fill="#677C95"
			/>
			<path
				d="M1.93417 9.40601C1.78325 9.40153 1.63367 9.3417 1.51847 9.2265L0.919614 8.62764C0.679912 8.38794 0.679912 7.99931 0.919613 7.75961C1.15931 7.51991 1.54795 7.51991 1.78765 7.75961L1.95417 7.92613L3.22925 6.65106C3.46895 6.41136 3.85758 6.41136 4.09728 6.65106C4.33698 6.89076 4.33698 7.27939 4.09728 7.51909L2.38977 9.22661C2.26443 9.35195 2.09837 9.41175 1.93417 9.40601Z"
				fill="#677C95"
			/>
			<path
				d="M6.27588 12.9448H17.7939C18.1822 12.9448 18.497 13.2596 18.497 13.6479C18.497 14.0363 18.1822 14.3511 17.7939 14.3511H6.27588C5.88755 14.3511 5.57275 14.0363 5.57275 13.6479C5.57275 13.2596 5.88755 12.9448 6.27588 12.9448Z"
				fill="#677C95"
			/>
			<path
				d="M1.95883 14.8984C1.80791 14.894 1.65832 14.8341 1.54313 14.7189L0.944272 14.1201C0.70457 13.8804 0.70457 13.4917 0.944272 13.252C1.18397 13.0123 1.57261 13.0123 1.81231 13.252L1.97883 13.4186L3.25391 12.1435C3.49361 11.9038 3.88224 11.9038 4.12194 12.1435C4.36164 12.3832 4.36164 12.7718 4.12194 13.0115L2.41442 14.719C2.28909 14.8444 2.12303 14.9042 1.95883 14.8984Z"
				fill="#677C95"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="18"
					height="18"
					fill="white"
					transform="translate(0.510254)"
				/>
			</clipPath>
		</defs>
	</svg>
);
