import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DeviceIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M18.1743 0.336666H1.58057C1.1922 0.336666 0.877441 0.651424 0.877441 1.03979V12.2898C0.877441 12.6782 1.1922 12.9929 1.58057 12.9929H6.36182V14.2585H4.42822C4.03986 14.2585 3.7251 14.5733 3.7251 14.9617C3.7251 15.35 4.03986 15.6648 4.42822 15.6648H15.5024C15.8908 15.6648 16.2056 15.35 16.2056 14.9617C16.2056 14.5733 15.8908 14.2585 15.5024 14.2585H13.3931V12.9929H18.1743C18.5627 12.9929 18.8774 12.6782 18.8774 12.2898V1.03979C18.8774 0.651424 18.5627 0.336666 18.1743 0.336666ZM17.4712 1.74292V8.63354H2.28369V1.74292H17.4712ZM11.9868 14.2585H7.76807V12.9929H11.9868V14.2585ZM12.6899 11.5867H2.28369V10.0398H17.4712V11.5867H12.6899Z"
			fill="#677C95"
		/>
	</svg>
);
