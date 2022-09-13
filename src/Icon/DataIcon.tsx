import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DataIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "24",
	width = "25",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 25 24"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M22.4984 6.11047C22.4322 3.61184 17.9603 2 12.5 2C7.03969 2 2.56781 3.61184 2.50156 6.11047C2.50059 6.12891 2.5 6.14758 2.5 6.16668V12V17.8333C2.5 20.3641 6.99879 22 12.5 22C18.0012 22 22.5 20.3641 22.5 17.8333V12V6.16668C22.5 6.14758 22.4994 6.12891 22.4984 6.11047ZM20.8333 17.8333C20.8333 18.9843 17.1236 20.3333 12.5 20.3333C7.87641 20.3333 4.16668 18.9843 4.16668 17.8333V14.4016C4.17316 14.4057 4.18008 14.4096 4.1866 14.4136C4.22828 14.4393 4.2707 14.4646 4.31375 14.4898C4.32398 14.4958 4.33387 14.5019 4.34418 14.5079C4.39754 14.5387 4.45199 14.5691 4.50738 14.5992C4.52246 14.6074 4.53797 14.6155 4.5532 14.6236C4.59445 14.6456 4.63609 14.6675 4.6784 14.6891C4.69812 14.6992 4.71805 14.7092 4.73801 14.7192C4.77844 14.7394 4.81938 14.7595 4.86074 14.7793C4.87992 14.7885 4.89898 14.7978 4.91832 14.8069C4.97125 14.8318 5.02488 14.8564 5.07926 14.8807C5.08668 14.8841 5.09391 14.8875 5.10137 14.8908C5.16324 14.9182 5.22625 14.9452 5.28996 14.9719C5.30867 14.9797 5.32773 14.9874 5.3466 14.9952C5.39273 15.0141 5.43922 15.0329 5.48625 15.0515C5.50891 15.0604 5.53168 15.0693 5.55453 15.0781C5.60109 15.0961 5.64812 15.1139 5.69555 15.1315C5.71648 15.1393 5.73723 15.1471 5.75832 15.1548C5.82605 15.1794 5.89437 15.2038 5.96379 15.2276C5.96402 15.2277 5.96422 15.2278 5.96445 15.2279C6.0341 15.2518 6.10484 15.2752 6.17613 15.2982C6.1982 15.3054 6.22059 15.3123 6.24277 15.3194C6.29336 15.3354 6.34426 15.3513 6.39559 15.367C6.42074 15.3746 6.44598 15.3822 6.47133 15.3898C6.52391 15.4055 6.57695 15.4209 6.63031 15.4361C6.65234 15.4424 6.67418 15.4488 6.69637 15.455C6.77125 15.476 6.84676 15.4967 6.92316 15.5168C6.93234 15.5192 6.94172 15.5215 6.9509 15.5239C7.01852 15.5416 7.08672 15.5589 7.15547 15.5759C7.18078 15.5821 7.20629 15.5882 7.23176 15.5944C7.28629 15.6076 7.34109 15.6206 7.39633 15.6334C7.42355 15.6396 7.45082 15.6459 7.4782 15.6521C7.53719 15.6654 7.5966 15.6784 7.65637 15.6913C7.67828 15.696 7.7 15.7008 7.72203 15.7055C7.80316 15.7226 7.88492 15.7393 7.96738 15.7555C7.98336 15.7586 7.99961 15.7616 8.01562 15.7647C8.08285 15.7777 8.15043 15.7905 8.21848 15.8029C8.24637 15.808 8.27441 15.8129 8.30242 15.8179C8.36086 15.8283 8.41957 15.8385 8.47859 15.8484C8.50738 15.8532 8.53617 15.8581 8.56512 15.8629C8.63082 15.8736 8.69691 15.8841 8.76332 15.8943C8.78406 15.8975 8.80461 15.9008 8.82543 15.904C8.91211 15.9171 8.99937 15.9297 9.08723 15.9418C9.10816 15.9447 9.1293 15.9474 9.15031 15.9502C9.21805 15.9594 9.28602 15.9683 9.35437 15.9769C9.38473 15.9807 9.4152 15.9844 9.44566 15.9881C9.50738 15.9956 9.56938 16.0029 9.6316 16.0099C9.6618 16.0133 9.69191 16.0168 9.72223 16.0201C9.7957 16.0281 9.86957 16.0357 9.94371 16.0431C9.96125 16.0449 9.97863 16.0468 9.99621 16.0485C10.0877 16.0573 10.1796 16.0657 10.2721 16.0736C10.2973 16.0757 10.3227 16.0777 10.3479 16.0798C10.4163 16.0854 10.4848 16.0908 10.5537 16.0959C10.5859 16.0983 10.6181 16.1005 10.6504 16.1028C10.7156 16.1074 10.781 16.1117 10.8466 16.1157C10.8773 16.1177 10.9078 16.1196 10.9386 16.1214C11.0219 16.1263 11.1055 16.1308 11.1895 16.1349C11.2012 16.1355 11.2129 16.1362 11.2246 16.1367C11.3201 16.1412 11.4161 16.1452 11.5123 16.1487C11.5406 16.1497 11.569 16.1505 11.5973 16.1514C11.6667 16.1538 11.7362 16.1558 11.806 16.1576C11.8395 16.1585 11.8731 16.1593 11.9067 16.16C11.9754 16.1614 12.0443 16.1627 12.1132 16.1636C12.1436 16.164 12.1738 16.1645 12.2042 16.1649C12.3025 16.1659 12.401 16.1666 12.4999 16.1666C12.5988 16.1666 12.6974 16.1659 12.7956 16.1649C12.826 16.1646 12.8562 16.164 12.8866 16.1636C12.9556 16.1626 13.0245 16.1614 13.0931 16.16C13.1267 16.1592 13.1603 16.1585 13.1938 16.1576C13.2636 16.1559 13.3331 16.1538 13.4025 16.1514C13.4308 16.1505 13.4593 16.1497 13.4875 16.1487C13.5838 16.1452 13.6798 16.1412 13.7752 16.1367C13.787 16.1362 13.7986 16.1355 13.8104 16.1349C13.8943 16.1308 13.978 16.1263 14.0613 16.1214C14.092 16.1196 14.1226 16.1177 14.1532 16.1157C14.2189 16.1117 14.2843 16.1073 14.3495 16.1028C14.3818 16.1005 14.414 16.0983 14.4461 16.0959C14.515 16.0908 14.5836 16.0854 14.652 16.0798C14.6772 16.0777 14.7026 16.0757 14.7277 16.0736C14.8202 16.0657 14.9121 16.0573 15.0036 16.0485C15.0212 16.0468 15.0386 16.0449 15.0561 16.0431C15.1303 16.0357 15.2041 16.0281 15.2776 16.0201C15.3079 16.0168 15.338 16.0133 15.3682 16.0099C15.4305 16.0029 15.4925 15.9956 15.5542 15.9881C15.5846 15.9844 15.6151 15.9807 15.6455 15.9769C15.7138 15.9683 15.7818 15.9594 15.8495 15.9502C15.8705 15.9474 15.8917 15.9447 15.9126 15.9418C16.0005 15.9296 16.0877 15.9171 16.1744 15.904C16.1952 15.9009 16.2157 15.8975 16.2365 15.8943C16.3029 15.8841 16.3691 15.8737 16.4348 15.8629C16.4637 15.8582 16.4925 15.8533 16.5212 15.8484C16.5803 15.8385 16.639 15.8283 16.6975 15.8179C16.7255 15.8129 16.7536 15.808 16.7814 15.8029C16.8495 15.7905 16.9171 15.7777 16.9844 15.7647C17.0004 15.7616 17.0165 15.7587 17.0325 15.7555C17.115 15.7393 17.1967 15.7227 17.2779 15.7055C17.2999 15.7009 17.3216 15.6961 17.3435 15.6914C17.4032 15.6786 17.4627 15.6655 17.5216 15.6522C17.549 15.646 17.5763 15.6397 17.6036 15.6334C17.6588 15.6206 17.7136 15.6076 17.7682 15.5945C17.7936 15.5883 17.8191 15.5822 17.8443 15.576C17.9131 15.559 17.9814 15.5416 18.049 15.524C18.0582 15.5216 18.0675 15.5193 18.0767 15.5169C18.1531 15.4968 18.2286 15.4761 18.3035 15.4551C18.3256 15.4489 18.3474 15.4425 18.3694 15.4363C18.4228 15.4211 18.4759 15.4056 18.5285 15.3899C18.5539 15.3824 18.5791 15.3747 18.6043 15.3671C18.6556 15.3514 18.7065 15.3355 18.7571 15.3195C18.7793 15.3124 18.8016 15.3055 18.8237 15.2983C18.895 15.2752 18.9657 15.2519 19.0354 15.228C19.0356 15.2279 19.0358 15.2278 19.0361 15.2277C19.1054 15.2039 19.1737 15.1795 19.2415 15.1549C19.2626 15.1472 19.2834 15.1393 19.3044 15.1316C19.3518 15.114 19.3988 15.0962 19.4452 15.0783C19.4681 15.0694 19.4909 15.0605 19.5136 15.0516C19.5606 15.0331 19.6071 15.0143 19.6532 14.9953C19.672 14.9875 19.6911 14.9799 19.7099 14.972C19.7736 14.9454 19.8366 14.9184 19.8984 14.8909C19.906 14.8876 19.9133 14.8841 19.9209 14.8807C19.9751 14.8565 20.0287 14.8319 20.0815 14.807C20.1009 14.7979 20.12 14.7886 20.1392 14.7794C20.1805 14.7596 20.2214 14.7395 20.2619 14.7193C20.2818 14.7093 20.3018 14.6993 20.3215 14.6892C20.3638 14.6676 20.4054 14.6457 20.4466 14.6237C20.4619 14.6156 20.4774 14.6075 20.4925 14.5993C20.5479 14.5692 20.6023 14.5388 20.6557 14.508C20.6661 14.502 20.676 14.4958 20.6863 14.4898C20.7293 14.4647 20.7716 14.4393 20.8132 14.4137C20.8198 14.4097 20.8267 14.4058 20.8332 14.4017V17.8333H20.8333ZM12.5 14.5C7.87637 14.5 4.16668 13.151 4.16668 12V8.56832C4.17316 8.57234 4.18 8.57621 4.18652 8.5802C4.22824 8.6059 4.27074 8.63133 4.31383 8.65652C4.32402 8.6625 4.33391 8.66855 4.34418 8.67449C4.39758 8.70535 4.45207 8.73582 4.50746 8.7659C4.52242 8.77402 4.53781 8.78199 4.55293 8.79008C4.5943 8.81219 4.63605 8.8341 4.67848 8.85578C4.69816 8.86582 4.71805 8.87582 4.73793 8.88578C4.7784 8.90602 4.81934 8.92605 4.86074 8.94594C4.87992 8.95516 4.89898 8.96441 4.91832 8.97352C4.97125 8.99844 5.02488 9.02305 5.07926 9.04738C5.08668 9.0507 5.09391 9.05414 5.10137 9.05742C5.16328 9.08488 5.22625 9.11187 5.28996 9.13855C5.30859 9.14637 5.32762 9.15402 5.34645 9.16176C5.3927 9.18078 5.43926 9.19961 5.48645 9.2182C5.50895 9.22707 5.5316 9.2359 5.55434 9.24469C5.60102 9.26273 5.6482 9.28055 5.69574 9.29816C5.7166 9.3059 5.7373 9.31371 5.75832 9.32137C5.82605 9.34602 5.89441 9.37039 5.96379 9.39426C5.96402 9.39434 5.96422 9.39441 5.96445 9.39449C6.0341 9.4184 6.10484 9.4418 6.17613 9.46484C6.1982 9.47199 6.22059 9.47898 6.24277 9.48602C6.29336 9.50207 6.34426 9.51797 6.39559 9.53359C6.42074 9.54125 6.44598 9.54887 6.47133 9.55645C6.52391 9.57211 6.57695 9.58754 6.63031 9.60277C6.65234 9.60906 6.67418 9.61547 6.69637 9.62168C6.77125 9.64266 6.84676 9.66332 6.92316 9.68344C6.9323 9.68586 6.9416 9.68813 6.95074 9.69051C7.01848 9.7082 7.08676 9.72555 7.15562 9.74258C7.18082 9.74879 7.20621 9.75488 7.23156 9.76098C7.28613 9.77418 7.34102 9.78719 7.39629 9.79996C7.42352 9.80625 7.45078 9.81254 7.47816 9.81871C7.53715 9.83203 7.59656 9.84508 7.65633 9.85789C7.67824 9.86262 7.69996 9.86742 7.72199 9.87207C7.80312 9.88918 7.88488 9.9059 7.96734 9.92207C7.98332 9.9252 7.99957 9.92816 8.01559 9.93129C8.08281 9.9443 8.15039 9.95707 8.21844 9.96949C8.24633 9.97457 8.27437 9.97953 8.30238 9.98449C8.36082 9.99488 8.41953 10.0051 8.47855 10.015C8.50734 10.0198 8.53613 10.0247 8.56508 10.0295C8.63078 10.0402 8.69687 10.0507 8.76328 10.0609C8.78402 10.0641 8.80457 10.0674 8.82539 10.0706C8.91207 10.0837 8.99934 10.0963 9.08719 10.1084C9.10801 10.1113 9.12906 10.1139 9.14996 10.1168C9.21785 10.126 9.28602 10.1349 9.35457 10.1435C9.3848 10.1473 9.41512 10.151 9.44547 10.1547C9.5073 10.1622 9.56941 10.1695 9.63176 10.1765C9.6618 10.1799 9.6918 10.1834 9.72195 10.1866C9.79559 10.1947 9.86965 10.2023 9.94398 10.2097C9.96141 10.2114 9.97871 10.2134 9.99617 10.215C10.0876 10.2239 10.1796 10.2323 10.2721 10.2402C10.2972 10.2423 10.3226 10.2443 10.3479 10.2463C10.4162 10.252 10.4848 10.2574 10.5537 10.2625C10.5858 10.2648 10.6181 10.2671 10.6504 10.2694C10.7155 10.2739 10.7809 10.2782 10.8466 10.2823C10.8772 10.2842 10.9078 10.2862 10.9385 10.288C11.0218 10.2929 11.1055 10.2973 11.1895 10.3014C11.2012 10.302 11.2128 10.3027 11.2246 10.3033C11.32 10.3078 11.416 10.3117 11.5123 10.3152C11.5406 10.3162 11.569 10.3171 11.5973 10.318C11.6667 10.3203 11.7362 10.3224 11.806 10.3242C11.8395 10.325 11.8731 10.3258 11.9067 10.3265C11.9754 10.328 12.0442 10.3292 12.1132 10.3302C12.1435 10.3306 12.1738 10.3311 12.2042 10.3314C12.3025 10.3325 12.401 10.3332 12.4999 10.3332C12.5988 10.3332 12.6973 10.3325 12.7956 10.3314C12.826 10.3311 12.8562 10.3306 12.8866 10.3302C12.9556 10.3292 13.0245 10.328 13.0931 10.3265C13.1267 10.3258 13.1603 10.325 13.1938 10.3242C13.2636 10.3224 13.3331 10.3203 13.4025 10.318C13.4308 10.3171 13.4592 10.3162 13.4875 10.3152C13.5837 10.3117 13.6797 10.3078 13.7752 10.3033C13.787 10.3027 13.7986 10.302 13.8103 10.3014C13.8943 10.2973 13.9779 10.2929 14.0612 10.288C14.092 10.2862 14.1225 10.2842 14.1532 10.2823C14.2188 10.2782 14.2843 10.2739 14.3495 10.2694C14.3817 10.2671 14.4139 10.2648 14.4461 10.2625C14.515 10.2574 14.5836 10.252 14.652 10.2463C14.6772 10.2443 14.7025 10.2423 14.7277 10.2402C14.8201 10.2323 14.9121 10.2239 15.0036 10.215C15.0211 10.2133 15.0384 10.2114 15.0558 10.2097C15.1301 10.2023 15.2041 10.1946 15.2778 10.1866C15.308 10.1833 15.338 10.1799 15.368 10.1765C15.4304 10.1695 15.4925 10.1621 15.5543 10.1546C15.5846 10.151 15.615 10.1473 15.6452 10.1435C15.7137 10.1349 15.7819 10.1259 15.8498 10.1168C15.8707 10.1139 15.8918 10.1112 15.9126 10.1084C16.0004 10.0962 16.0877 10.0836 16.1744 10.0705C16.1952 10.0674 16.2157 10.0641 16.2364 10.0609C16.3029 10.0507 16.369 10.0402 16.4347 10.0295C16.4636 10.0247 16.4924 10.0198 16.5212 10.015C16.5802 10.005 16.639 9.99488 16.6974 9.98449C16.7254 9.97949 16.7535 9.97457 16.7814 9.96949C16.8495 9.95707 16.9171 9.9443 16.9843 9.93129C17.0003 9.9282 17.0165 9.92523 17.0324 9.92211C17.1149 9.9059 17.1967 9.88922 17.2778 9.87211C17.2998 9.86746 17.3216 9.86262 17.3435 9.85793C17.4032 9.84512 17.4626 9.83207 17.5216 9.81875C17.549 9.81254 17.5763 9.80629 17.6035 9.79996C17.6588 9.78719 17.7137 9.77418 17.7683 9.76098C17.7936 9.75484 17.819 9.74879 17.8441 9.74258C17.913 9.72555 17.9814 9.7082 18.0491 9.69051C18.0583 9.68813 18.0676 9.68586 18.0767 9.68344C18.1531 9.66332 18.2286 9.64266 18.3035 9.62168C18.3256 9.61547 18.3474 9.6091 18.3694 9.60285C18.4228 9.58762 18.4759 9.57219 18.5285 9.55648C18.5539 9.54895 18.5791 9.54129 18.6043 9.53363C18.6556 9.51801 18.7065 9.50211 18.7571 9.48605C18.7793 9.47898 18.8016 9.47203 18.8237 9.46488C18.895 9.4418 18.9657 9.41844 19.0354 9.39453C19.0356 9.39445 19.0358 9.39438 19.0361 9.3943C19.1055 9.37047 19.1738 9.34609 19.2415 9.32145C19.2626 9.31375 19.2833 9.30594 19.3042 9.29816C19.3517 9.28055 19.3988 9.26277 19.4454 9.24477C19.4682 9.23598 19.4909 9.22711 19.5135 9.2182C19.5606 9.19961 19.6071 9.18078 19.6533 9.1618C19.6721 9.15406 19.6912 9.14641 19.7098 9.13859C19.7736 9.11195 19.8365 9.08496 19.8984 9.05746C19.906 9.0541 19.9133 9.05063 19.9208 9.04727C19.9751 9.02301 20.0286 8.99844 20.0814 8.97355C20.1009 8.96441 20.1199 8.95516 20.1391 8.94594C20.1805 8.92609 20.2214 8.90605 20.2619 8.88578C20.2818 8.87582 20.3017 8.86582 20.3214 8.85578C20.3638 8.8341 20.4055 8.81219 20.4468 8.79012C20.462 8.78203 20.4774 8.77402 20.4924 8.76586C20.5478 8.73578 20.6023 8.70535 20.6556 8.67449C20.666 8.66852 20.6759 8.66238 20.6862 8.65637C20.7292 8.63121 20.7716 8.60582 20.8133 8.58016C20.8198 8.57613 20.8267 8.57227 20.8332 8.56824V12C20.8333 13.151 17.1236 14.5 12.5 14.5ZM12.5 8.66668C7.87637 8.66668 4.16668 7.31766 4.16668 6.16668C4.16668 5.0157 7.87641 3.66668 12.5 3.66668C17.1236 3.66668 20.8333 5.0157 20.8333 6.16668C20.8333 7.31766 17.1236 8.66668 12.5 8.66668Z"
			fill="white"
		/>
	</svg>
);
