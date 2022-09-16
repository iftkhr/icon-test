import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DefinedIcon: React.FC<Props> = ({
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
		<path
			d="M16.7173 0.462891H2.93604C1.77293 0.462891 0.82666 1.40916 0.82666 2.57227V12.0645C0.82666 13.2276 1.77293 14.1738 2.93604 14.1738H6.83187L6.32932 16.3349C6.28073 16.5438 6.33016 16.7634 6.46354 16.9314C6.59693 17.0994 6.79967 17.1973 7.01416 17.1973H12.6392C12.8536 17.1973 13.0564 17.0994 13.1898 16.9314C13.3232 16.7634 13.3726 16.5438 13.324 16.3348L12.8214 14.1738H16.7173C17.8804 14.1738 18.8267 13.2276 18.8267 12.0645V2.57227C18.8267 1.40916 17.8804 0.462891 16.7173 0.462891ZM7.89957 15.791L8.27564 14.1738H11.3776L11.7537 15.791H7.89957ZM17.4204 12.0645C17.4204 12.4522 17.105 12.7676 16.7173 12.7676C16.1867 12.7676 3.47016 12.7676 2.93604 12.7676C2.54833 12.7676 2.23291 12.4522 2.23291 12.0645V2.57227C2.23291 2.18456 2.54833 1.86914 2.93604 1.86914H16.7173C17.105 1.86914 17.4204 2.18456 17.4204 2.57227V12.0645Z"
			fill="#15466B"
		/>
	</svg>
);