import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DeleteWhiteIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "14",
	width = "13",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 13 14"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0.820156 2.8834C0.820156 3.17046 1.05285 3.40315 1.3399 3.40315H1.8979L2.64078 13.1101C2.66152 13.381 2.88735 13.5902 3.15902 13.5902H9.70783C9.9795 13.5902 10.2053 13.381 10.2261 13.1101L10.9689 3.40315H11.5269C11.814 3.40315 12.0467 3.17046 12.0467 2.8834C12.0467 2.59635 11.814 2.36366 11.5269 2.36366H8.98018V1.81792C8.98018 0.972475 8.29238 0.284668 7.44693 0.284668H5.41992C4.57447 0.284668 3.88666 0.972475 3.88666 1.81792V2.36366H1.3399C1.05285 2.36366 0.820156 2.59635 0.820156 2.8834ZM7.94069 2.36366H4.92616V1.81792C4.92616 1.54565 5.14765 1.32416 5.41992 1.32416H7.44693C7.7192 1.32416 7.94069 1.54565 7.94069 1.81792V2.36366ZM2.94044 3.40315H9.92641L9.22634 12.5507H3.64051L2.94044 3.40315Z"
			fill="white"
		/>
	</svg>
);
