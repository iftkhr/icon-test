import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const WhiteLogoIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "36",
	width = "49",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 49 36"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M7.66123 22.3612L6.95501 20.7012H4.60484L3.87213 22.3612H2.52344L5.27478 15.9396H6.23995L9.00993 22.3612H7.66123ZM5.75835 17.6168L5.05212 19.563H6.46359L5.75835 17.6168Z"
			fill="white"
		/>
		<path
			d="M12.2625 22.4747C11.6553 22.4747 11.1904 22.3011 10.7441 21.9099V23.9697H9.55627V17.548H10.646V18.1128C11.0305 17.6787 11.6024 17.4355 12.2723 17.4355C13.7014 17.4355 14.7382 18.4868 14.7382 19.9379C14.7372 21.3966 13.6916 22.4747 12.2625 22.4747ZM12.1193 18.4945C11.2973 18.4945 10.6715 19.1203 10.6715 19.9455C10.6715 20.7889 11.2973 21.4138 12.1369 21.4138C12.9236 21.4138 13.5396 20.7794 13.5396 19.9627C13.5396 19.1289 12.9236 18.4945 12.1193 18.4945Z"
			fill="white"
		/>
		<path
			d="M18.1595 22.4747C17.5523 22.4747 17.0874 22.3011 16.6411 21.9099V23.9697H15.4523V17.548H16.542V18.1128C16.9265 17.6787 17.4984 17.4355 18.1683 17.4355C19.5974 17.4355 20.6342 18.4868 20.6342 19.9379C20.6342 21.3966 19.5886 22.4747 18.1595 22.4747ZM18.0163 18.4945C17.1943 18.4945 16.5685 19.1203 16.5685 19.9455C16.5685 20.7889 17.1943 21.4138 18.0339 21.4138C18.8206 21.4138 19.4366 20.7794 19.4366 19.9627C19.4366 19.1289 18.8206 18.4945 18.0163 18.4945Z"
			fill="white"
		/>
		<path
			d="M24.7254 22.4747C22.697 22.4747 21.1335 21.015 21.1335 19.1375C21.1335 17.2952 22.6793 15.827 24.6087 15.827C26.0476 15.827 27.4052 16.6703 27.8338 17.8257H26.3949C25.9839 17.2695 25.3493 16.9737 24.5812 16.9737C23.2767 16.9737 22.3655 17.9468 22.3655 19.1546C22.3655 20.3796 23.3571 21.327 24.6528 21.327C25.5199 21.327 26.234 20.9101 26.592 20.1974H23.8583V19.085H28.1742V19.2414C28.1742 20.9883 26.6734 22.4747 24.7254 22.4747Z"
			fill="white"
		/>
		<path
			d="M28.8539 22.3612V15.9396H30.0417V22.3612H28.8539Z"
			fill="white"
		/>
		<path
			d="M34.3036 22.3611V21.9003C33.8573 22.3258 33.4816 22.4737 32.8833 22.4737C31.7308 22.4737 30.998 21.8221 30.998 20.1277V17.547H32.1859V19.9016C32.1859 21.1791 32.5517 21.4138 33.1236 21.4138C33.5257 21.4138 33.8475 21.2487 34.026 20.9701C34.1604 20.7526 34.2133 20.4578 34.2133 19.8148V17.547H35.4012V22.3611H34.3036Z"
			fill="white"
		/>
		<path
			d="M41.2639 20.4674H37.4306C37.5738 21.0494 38.0917 21.4148 38.798 21.4148C39.2894 21.4148 39.5846 21.2841 39.8877 20.9368H41.1834C40.8529 21.9271 39.8249 22.4747 38.8245 22.4747C37.3149 22.4747 36.1437 21.3795 36.1437 19.9723C36.1437 18.5555 37.2963 17.4345 38.7529 17.4345C40.2271 17.4345 41.308 18.5298 41.308 20.0238C41.308 20.1974 41.2992 20.3024 41.2639 20.4674ZM38.7705 18.4945C38.0643 18.4945 37.5827 18.8331 37.3943 19.4504H40.1369C39.9858 18.8331 39.5032 18.4945 38.7705 18.4945Z"
			fill="white"
		/>
		<path
			d="M28.8519 23.6405V23.8762C28.8519 27.7934 25.5749 30.9809 21.5474 30.9809H5.67008C3.59358 30.9809 1.90452 29.338 1.90452 27.3183V11.8763C1.90452 7.959 5.1816 4.77156 9.20905 4.77156H25.0864C27.1629 4.77156 28.8519 6.41442 28.8519 8.43411V14.6344H30.0555V8.43411C30.0555 5.76853 27.826 3.60001 25.0854 3.60001H9.20905C4.51756 3.60001 0.700012 7.31216 0.700012 11.8763V27.3193C0.700012 29.9849 2.92953 32.1534 5.67008 32.1534H21.5474C26.2389 32.1534 30.0565 28.4412 30.0565 23.8771V23.6415H28.8519V23.6405Z"
			fill="white"
		/>
		<path
			d="M32.6753 28.2038C34.0713 28.2038 34.917 27.3403 34.917 25.9084C34.917 24.4811 34.0713 23.622 32.6887 23.622H31.0511V28.2038H32.6753ZM32.0198 27.3738V24.452H32.6373C33.4963 24.452 33.9505 24.8905 33.9505 25.9084C33.9505 26.9309 33.4963 27.3738 32.635 27.3738H32.0198Z"
			fill="white"
		/>
		<path
			d="M37.2727 28.2709C38.1229 28.2709 38.6956 27.8571 38.8298 27.2195L37.9484 27.1613C37.8522 27.423 37.6061 27.5595 37.2884 27.5595C36.8118 27.5595 36.5098 27.2441 36.5098 26.7317V26.7295H38.85V26.4677C38.85 25.2999 38.143 24.7227 37.2347 24.7227C36.2235 24.7227 35.568 25.4409 35.568 26.5013C35.568 27.5908 36.2145 28.2709 37.2727 28.2709ZM36.5098 26.1389C36.53 25.7474 36.8275 25.4342 37.2503 25.4342C37.6642 25.4342 37.9506 25.7295 37.9528 26.1389H36.5098Z"
			fill="white"
		/>
		<path
			d="M39.5619 28.2038H40.515V26.1411C40.515 25.7608 40.7566 25.508 41.0743 25.508C41.3875 25.508 41.5978 25.7228 41.5978 26.0606V28.2038H42.5217V26.1053C42.5217 25.7496 42.7253 25.508 43.0721 25.508C43.3764 25.508 43.6045 25.6981 43.6045 26.0807V28.2038H44.5554V25.8928C44.5554 25.1478 44.1124 24.7227 43.4726 24.7227C42.9692 24.7227 42.5777 24.98 42.4367 25.3737H42.4009C42.2913 24.9755 41.9401 24.7227 41.468 24.7227C41.0049 24.7227 40.6537 24.9688 40.5105 25.3737H40.4702V24.7675H39.5619V28.2038Z"
			fill="white"
		/>
		<path
			d="M46.9508 28.2709C47.9934 28.2709 48.6422 27.5573 48.6422 26.4991C48.6422 25.4342 47.9934 24.7227 46.9508 24.7227C45.9083 24.7227 45.2595 25.4342 45.2595 26.4991C45.2595 27.5573 45.9083 28.2709 46.9508 28.2709ZM46.9553 27.5327C46.4743 27.5327 46.2282 27.0919 46.2282 26.4924C46.2282 25.8928 46.4743 25.4498 46.9553 25.4498C47.4273 25.4498 47.6734 25.8928 47.6734 26.4924C47.6734 27.0919 47.4273 27.5327 46.9553 27.5327Z"
			fill="white"
		/>
		<path
			d="M31.8408 33.6038L32.1809 32.559H33.8342L34.1742 33.6038H35.2123L33.6328 29.022H32.3844L30.8027 33.6038H31.8408ZM32.427 31.8029L32.9907 30.069H33.0265L33.5903 31.8029H32.427Z"
			fill="white"
		/>
		<path
			d="M35.8359 34.8925H36.7889V33.0535H36.818C36.95 33.3398 37.2386 33.6598 37.7934 33.6598C38.5765 33.6598 39.1872 33.04 39.1872 31.8901C39.1872 30.7089 38.5496 30.1227 37.7957 30.1227C37.2207 30.1227 36.9455 30.465 36.818 30.7447H36.7755V30.1675H35.8359V34.8925ZM36.7688 31.8856C36.7688 31.2726 37.0283 30.8811 37.4914 30.8811C37.9635 30.8811 38.214 31.2905 38.214 31.8856C38.214 32.4852 37.959 32.9013 37.4914 32.9013C37.0328 32.9013 36.7688 32.4986 36.7688 31.8856Z"
			fill="white"
		/>
		<path
			d="M39.9126 34.8925H40.8656V33.0535H40.8947C41.0267 33.3398 41.3153 33.6598 41.8701 33.6598C42.6532 33.6598 43.2639 33.04 43.2639 31.8901C43.2639 30.7089 42.6263 30.1227 41.8724 30.1227C41.2974 30.1227 41.0222 30.465 40.8947 30.7447H40.8522V30.1675H39.9126V34.8925ZM40.8455 31.8856C40.8455 31.2726 41.105 30.8811 41.5681 30.8811C42.0402 30.8811 42.2907 31.2905 42.2907 31.8856C42.2907 32.4852 42.0357 32.9013 41.5681 32.9013C41.1095 32.9013 40.8455 32.4986 40.8455 31.8856Z"
			fill="white"
		/>
	</svg>
);