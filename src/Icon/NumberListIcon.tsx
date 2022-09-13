import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NumberListIcon: React.FC<Props> = ({
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
				d="M3.66666 16.1667H5.33332V16.5833H4.49999V17.4167H5.33332V17.8333H3.66666V18.6667H6.16666V15.3333H3.66666V16.1667ZM4.49999 8.66668H5.33332V5.33334H3.66666V6.16668H4.49999V8.66668ZM3.66666 11.1667H5.16666L3.66666 12.9167V13.6667H6.16666V12.8333H4.66666L6.16666 11.0833V10.3333H3.66666V11.1667ZM7.83332 6.16668V7.83334H19.5V6.16668H7.83332ZM7.83332 17.8333H19.5V16.1667H7.83332V17.8333ZM7.83332 12.8333H19.5V11.1667H7.83332V12.8333Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
