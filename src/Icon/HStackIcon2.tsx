import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const HStackIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "9",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 9"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M15.9055 0.512054H2.12427C0.961163 0.512054 0.0148959 1.45832 0.0148959 2.62143L0.0148926 6.38688C0.0148926 7.54999 0.961158 8.49625 2.12427 8.49625H15.9055C17.0686 8.49625 18.0149 7.54999 18.0149 6.38688V2.62143C18.0149 1.45832 17.0686 0.512054 15.9055 0.512054ZM16.6086 6.38688C16.6086 6.77458 16.2932 7.09 15.9055 7.09H2.12427C1.73656 7.09 1.42114 6.77458 1.42114 6.38688L1.42115 2.62143C1.42115 2.23373 1.73657 1.9183 2.12427 1.9183H15.9055C16.2932 1.9183 16.6086 2.23373 16.6086 2.62143V6.38688Z"
			fill="#677C95"
		/>
	</svg>
);
