import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TagIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "19",
}) => (
	<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		x="0px"
		y="0px"
		width={width}
		height={height}
		viewBox="0 0 19 19"
		fill={fill}
		stroke={stroke}
		enable-background="new 0 0 19 19"
	>
		<title>{tooltip}</title>
		<image
			id="image0"
			width="19"
			height="19"
			x="0"
			y="0"
			href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
cwAAA3YAAAN2AX3VgswAAAAHdElNRQflAxENBDRoWMhZAAABaElEQVQoz23SzUuUYRTG4Ws+8jNl
CKeJBA1y46avxZAErVIXRmAiuOgPcCEEBS0jqVUIw0CoIK7FRSshIQWlENwkKEWLCHMhNgSJ8CqV
Y9PCGedtnPtsDuf8uLmfwxMBtR6545eSCs64btsPLy2eTPWbdkmDxmLVuWpWu15TaiEObnrtm7Di
2jzUpFnc7xJWI/C/AkvmReQclN0qdU7KqpyvjkrmlYroM2TXvgE5WdvlVcbtk77bjBtiYs4aMakZ
ohVe9YaMW3PZsMCEQE81rFXEmisG3dOvwbJr1bCYv45c0CahQ70/x+krn/BdjQ5v7bhvTEHal2pu
exaMSPksgz6d3lQ/yKyEjA92dUoZs3MaS7pr3itL0pq8s+Ln6fO2eKpV2jMfBbrMlVelbAUJo7Y8
8MkLSS1uhXNHi1DSqE1ZByZteO6iQjhNtPhDHtuUdYi8CeueqAuDx9ny3ht3WJzlTTkvFXb7B8Uz
WVBi50TDAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTE3VDEzOjA0OjUyKzAwOjAwNOyFIgAA
ACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0xN1QxMzowNDo1MiswMDowMEWxPZ4AAAAZdEVYdFNv
ZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"
		/>
	</svg>
);
