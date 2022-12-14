import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EditIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "15",
	width = "15",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 15 15"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M13.8544 3.33289L11.2732 0.751724C11.0597 0.538142 10.7134 0.538142 10.4999 0.751724L0.94855 10.303C0.877101 10.3745 0.825066 10.4687 0.80237 10.5669L0.0289799 13.9214C-0.0615279 14.3143 0.290906 14.668 0.68471 14.5772L4.03927 13.8038C4.13533 13.7816 4.22966 13.731 4.30311 13.6576L13.8544 4.10626C14.0679 3.89281 14.0679 3.54642 13.8544 3.33289ZM1.29122 13.3149L1.741 11.3642C2.39066 11.6291 2.9771 12.2155 3.24201 12.8652L1.29122 13.3149ZM4.16464 12.2493C3.7917 11.4788 3.12741 10.8145 2.35684 10.4415L8.30539 4.49295L10.1132 6.30076L4.16464 12.2493ZM10.8866 5.52739L9.07878 3.71956L10.8866 1.91178L12.6944 3.71959L10.8866 5.52739Z"
			fill="white"
		/>
	</svg>
);
