import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DataIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "20",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 20 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.6">
			<path
				d="M19.9984 4.11047C19.9322 1.61184 15.4603 0 10 0C4.53969 0 0.0678125 1.61184 0.0015625 4.11047C0.000585938 4.12891 0 4.14758 0 4.16668V10V15.8333C0 18.3641 4.49879 20 10 20C15.5012 20 20 18.3641 20 15.8333V10V4.16668C20 4.14758 19.9994 4.12891 19.9984 4.11047ZM18.3333 15.8333C18.3333 16.9843 14.6236 18.3333 10 18.3333C5.37641 18.3333 1.66668 16.9843 1.66668 15.8333V12.4016C1.67316 12.4057 1.68008 12.4096 1.6866 12.4136C1.72828 12.4393 1.7707 12.4646 1.81375 12.4898C1.82398 12.4958 1.83387 12.5019 1.84418 12.5079C1.89754 12.5387 1.95199 12.5691 2.00738 12.5992C2.02246 12.6074 2.03797 12.6155 2.0532 12.6236C2.09445 12.6456 2.13609 12.6675 2.1784 12.6891C2.19812 12.6992 2.21805 12.7092 2.23801 12.7192C2.27844 12.7394 2.31938 12.7595 2.36074 12.7793C2.37992 12.7885 2.39898 12.7978 2.41832 12.8069C2.47125 12.8318 2.52488 12.8564 2.57926 12.8807C2.58668 12.8841 2.59391 12.8875 2.60137 12.8908C2.66324 12.9182 2.72625 12.9452 2.78996 12.9719C2.80867 12.9797 2.82773 12.9874 2.8466 12.9952C2.89273 13.0141 2.93922 13.0329 2.98625 13.0515C3.00891 13.0604 3.03168 13.0693 3.05453 13.0781C3.10109 13.0961 3.14812 13.1139 3.19555 13.1315C3.21648 13.1393 3.23723 13.1471 3.25832 13.1548C3.32605 13.1794 3.39437 13.2038 3.46379 13.2276C3.46402 13.2277 3.46422 13.2278 3.46445 13.2279C3.5341 13.2518 3.60484 13.2752 3.67613 13.2982C3.6982 13.3054 3.72059 13.3123 3.74277 13.3194C3.79336 13.3354 3.84426 13.3513 3.89559 13.367C3.92074 13.3746 3.94598 13.3822 3.97133 13.3898C4.02391 13.4055 4.07695 13.4209 4.13031 13.4361C4.15234 13.4424 4.17418 13.4488 4.19637 13.455C4.27125 13.476 4.34676 13.4967 4.42316 13.5168C4.43234 13.5192 4.44172 13.5215 4.4509 13.5239C4.51852 13.5416 4.58672 13.5589 4.65547 13.5759C4.68078 13.5821 4.70629 13.5882 4.73176 13.5944C4.78629 13.6076 4.84109 13.6206 4.89633 13.6334C4.92355 13.6396 4.95082 13.6459 4.9782 13.6521C5.03719 13.6654 5.0966 13.6784 5.15637 13.6913C5.17828 13.696 5.2 13.7008 5.22203 13.7055C5.30316 13.7226 5.38492 13.7393 5.46738 13.7555C5.48336 13.7586 5.49961 13.7616 5.51562 13.7647C5.58285 13.7777 5.65043 13.7905 5.71848 13.8029C5.74637 13.808 5.77441 13.8129 5.80242 13.8179C5.86086 13.8283 5.91957 13.8385 5.97859 13.8484C6.00738 13.8532 6.03617 13.8581 6.06512 13.8629C6.13082 13.8736 6.19691 13.8841 6.26332 13.8943C6.28406 13.8975 6.30461 13.9008 6.32543 13.904C6.41211 13.9171 6.49937 13.9297 6.58723 13.9418C6.60816 13.9447 6.6293 13.9474 6.65031 13.9502C6.71805 13.9594 6.78602 13.9683 6.85437 13.9769C6.88473 13.9807 6.9152 13.9844 6.94566 13.9881C7.00738 13.9956 7.06938 14.0029 7.1316 14.0099C7.1618 14.0133 7.19191 14.0168 7.22223 14.0201C7.2957 14.0281 7.36957 14.0357 7.44371 14.0431C7.46125 14.0449 7.47863 14.0468 7.49621 14.0485C7.58766 14.0573 7.67965 14.0657 7.77211 14.0736C7.79727 14.0757 7.82266 14.0777 7.84789 14.0798C7.91625 14.0854 7.9848 14.0908 8.05371 14.0959C8.08586 14.0983 8.11812 14.1005 8.15039 14.1028C8.21559 14.1074 8.28098 14.1117 8.3466 14.1157C8.37727 14.1177 8.40781 14.1196 8.43855 14.1214C8.52187 14.1263 8.60551 14.1308 8.68949 14.1349C8.70121 14.1355 8.71285 14.1362 8.72461 14.1367C8.82008 14.1412 8.91605 14.1452 9.01234 14.1487C9.04063 14.1497 9.06902 14.1505 9.09734 14.1514C9.16672 14.1538 9.23625 14.1558 9.30602 14.1576C9.33953 14.1585 9.37313 14.1593 9.40672 14.16C9.47539 14.1614 9.54426 14.1627 9.61324 14.1636C9.64355 14.164 9.67383 14.1645 9.70422 14.1649C9.8025 14.1659 9.90102 14.1666 9.99992 14.1666C10.0988 14.1666 10.1974 14.1659 10.2956 14.1649C10.326 14.1646 10.3562 14.164 10.3866 14.1636C10.4556 14.1626 10.5245 14.1614 10.5931 14.16C10.6267 14.1592 10.6603 14.1585 10.6938 14.1576C10.7636 14.1559 10.8331 14.1538 10.9025 14.1514C10.9308 14.1505 10.9593 14.1497 10.9875 14.1487C11.0838 14.1452 11.1798 14.1412 11.2752 14.1367C11.287 14.1362 11.2986 14.1355 11.3104 14.1349C11.3943 14.1308 11.478 14.1263 11.5613 14.1214C11.592 14.1196 11.6226 14.1177 11.6532 14.1157C11.7189 14.1117 11.7843 14.1073 11.8495 14.1028C11.8818 14.1005 11.914 14.0983 11.9461 14.0959C12.015 14.0908 12.0836 14.0854 12.152 14.0798C12.1772 14.0777 12.2026 14.0757 12.2277 14.0736C12.3202 14.0657 12.4121 14.0573 12.5036 14.0485C12.5212 14.0468 12.5386 14.0449 12.5561 14.0431C12.6303 14.0357 12.7041 14.0281 12.7776 14.0201C12.8079 14.0168 12.838 14.0133 12.8682 14.0099C12.9305 14.0029 12.9925 13.9956 13.0542 13.9881C13.0846 13.9844 13.1151 13.9807 13.1455 13.9769C13.2138 13.9683 13.2818 13.9594 13.3495 13.9502C13.3705 13.9474 13.3917 13.9447 13.4126 13.9418C13.5005 13.9296 13.5877 13.9171 13.6744 13.904C13.6952 13.9009 13.7157 13.8975 13.7365 13.8943C13.8029 13.8841 13.8691 13.8737 13.9348 13.8629C13.9637 13.8582 13.9925 13.8533 14.0212 13.8484C14.0803 13.8385 14.139 13.8283 14.1975 13.8179C14.2255 13.8129 14.2536 13.808 14.2814 13.8029C14.3495 13.7905 14.4171 13.7777 14.4844 13.7647C14.5004 13.7616 14.5165 13.7587 14.5325 13.7555C14.615 13.7393 14.6967 13.7227 14.7779 13.7055C14.7999 13.7009 14.8216 13.6961 14.8435 13.6914C14.9032 13.6786 14.9627 13.6655 15.0216 13.6522C15.049 13.646 15.0763 13.6397 15.1036 13.6334C15.1588 13.6206 15.2136 13.6076 15.2682 13.5945C15.2936 13.5883 15.3191 13.5822 15.3443 13.576C15.4131 13.559 15.4814 13.5416 15.549 13.524C15.5582 13.5216 15.5675 13.5193 15.5767 13.5169C15.6531 13.4968 15.7286 13.4761 15.8035 13.4551C15.8256 13.4489 15.8474 13.4425 15.8694 13.4363C15.9228 13.4211 15.9759 13.4056 16.0285 13.3899C16.0539 13.3824 16.0791 13.3747 16.1043 13.3671C16.1556 13.3514 16.2065 13.3355 16.2571 13.3195C16.2793 13.3124 16.3016 13.3055 16.3237 13.2983C16.395 13.2752 16.4657 13.2519 16.5354 13.228C16.5356 13.2279 16.5358 13.2278 16.5361 13.2277C16.6054 13.2039 16.6737 13.1795 16.7415 13.1549C16.7626 13.1472 16.7834 13.1393 16.8044 13.1316C16.8518 13.114 16.8988 13.0962 16.9452 13.0783C16.9681 13.0694 16.9909 13.0605 17.0136 13.0516C17.0606 13.0331 17.1071 13.0143 17.1532 12.9953C17.172 12.9875 17.1911 12.9799 17.2099 12.972C17.2736 12.9454 17.3366 12.9184 17.3984 12.8909C17.406 12.8876 17.4133 12.8841 17.4209 12.8807C17.4751 12.8565 17.5287 12.8319 17.5815 12.807C17.6009 12.7979 17.62 12.7886 17.6392 12.7794C17.6805 12.7596 17.7214 12.7395 17.7619 12.7193C17.7818 12.7093 17.8018 12.6993 17.8215 12.6892C17.8638 12.6676 17.9054 12.6457 17.9466 12.6237C17.9619 12.6156 17.9774 12.6075 17.9925 12.5993C18.0479 12.5692 18.1023 12.5388 18.1557 12.508C18.1661 12.502 18.176 12.4958 18.1863 12.4898C18.2293 12.4647 18.2716 12.4393 18.3132 12.4137C18.3198 12.4097 18.3267 12.4058 18.3332 12.4017V15.8333H18.3333ZM10 12.5C5.37637 12.5 1.66668 11.151 1.66668 10V6.56832C1.67316 6.57234 1.68 6.57621 1.68652 6.5802C1.72824 6.6059 1.77074 6.63133 1.81383 6.65652C1.82402 6.6625 1.83391 6.66855 1.84418 6.67449C1.89758 6.70535 1.95207 6.73582 2.00746 6.7659C2.02242 6.77402 2.03781 6.78199 2.05293 6.79008C2.0943 6.81219 2.13605 6.8341 2.17848 6.85578C2.19816 6.86582 2.21805 6.87582 2.23793 6.88578C2.2784 6.90602 2.31934 6.92605 2.36074 6.94594C2.37992 6.95516 2.39898 6.96441 2.41832 6.97352C2.47125 6.99844 2.52488 7.02305 2.57926 7.04738C2.58668 7.0507 2.59391 7.05414 2.60137 7.05742C2.66328 7.08488 2.72625 7.11187 2.78996 7.13855C2.80859 7.14637 2.82762 7.15402 2.84645 7.16176C2.8927 7.18078 2.93926 7.19961 2.98645 7.2182C3.00895 7.22707 3.0316 7.2359 3.05434 7.24469C3.10102 7.26273 3.1482 7.28055 3.19574 7.29816C3.2166 7.3059 3.2373 7.31371 3.25832 7.32137C3.32605 7.34602 3.39441 7.37039 3.46379 7.39426C3.46402 7.39434 3.46422 7.39441 3.46445 7.39449C3.5341 7.4184 3.60484 7.4418 3.67613 7.46484C3.6982 7.47199 3.72059 7.47898 3.74277 7.48602C3.79336 7.50207 3.84426 7.51797 3.89559 7.53359C3.92074 7.54125 3.94598 7.54887 3.97133 7.55645C4.02391 7.57211 4.07695 7.58754 4.13031 7.60277C4.15234 7.60906 4.17418 7.61547 4.19637 7.62168C4.27125 7.64266 4.34676 7.66332 4.42316 7.68344C4.4323 7.68586 4.4416 7.68813 4.45074 7.69051C4.51848 7.7082 4.58676 7.72555 4.65562 7.74258C4.68082 7.74879 4.70621 7.75488 4.73156 7.76098C4.78613 7.77418 4.84102 7.78719 4.89629 7.79996C4.92352 7.80625 4.95078 7.81254 4.97816 7.81871C5.03715 7.83203 5.09656 7.84508 5.15633 7.85789C5.17824 7.86262 5.19996 7.86742 5.22199 7.87207C5.30312 7.88918 5.38488 7.9059 5.46734 7.92207C5.48332 7.9252 5.49957 7.92816 5.51559 7.93129C5.58281 7.9443 5.65039 7.95707 5.71844 7.96949C5.74633 7.97457 5.77437 7.97953 5.80238 7.98449C5.86082 7.99488 5.91953 8.00508 5.97855 8.015C6.00734 8.01984 6.03613 8.02473 6.06508 8.02945C6.13078 8.04023 6.19687 8.05066 6.26328 8.0609C6.28402 8.0641 6.30457 8.06742 6.32539 8.07059C6.41207 8.08367 6.49934 8.09629 6.58719 8.1084C6.60801 8.11129 6.62906 8.11395 6.64996 8.1168C6.71785 8.12598 6.78602 8.13492 6.85457 8.14352C6.8848 8.1473 6.91512 8.15098 6.94547 8.15469C7.0073 8.16219 7.06941 8.16945 7.13176 8.17652C7.1618 8.17992 7.1918 8.18336 7.22195 8.18664C7.29559 8.19469 7.36965 8.20234 7.44398 8.20973C7.46141 8.21145 7.47871 8.21336 7.49617 8.21504C7.58762 8.22391 7.67961 8.23227 7.77207 8.24016C7.79723 8.2423 7.82262 8.24426 7.84785 8.24633C7.91621 8.25195 7.98477 8.25738 8.05367 8.26246C8.08582 8.26484 8.11809 8.26711 8.15035 8.26937C8.21555 8.27394 8.28094 8.27824 8.34656 8.2823C8.37723 8.28422 8.40777 8.28617 8.43852 8.28797C8.52184 8.29285 8.60547 8.29734 8.68945 8.30145C8.70117 8.30203 8.71281 8.30273 8.72457 8.30328C8.82004 8.30781 8.91602 8.31172 9.0123 8.31523C9.04059 8.31625 9.06898 8.31707 9.09731 8.31801C9.16668 8.32031 9.23621 8.32238 9.30598 8.32418C9.33949 8.32504 9.37309 8.32582 9.40668 8.32652C9.47535 8.32801 9.54422 8.32922 9.6132 8.33016C9.64352 8.33059 9.67379 8.33109 9.70418 8.33145C9.80246 8.3325 9.90098 8.33316 9.99988 8.33316C10.0988 8.33316 10.1973 8.3325 10.2956 8.33145C10.326 8.33113 10.3562 8.33059 10.3866 8.33016C10.4556 8.32918 10.5245 8.32801 10.5931 8.32652C10.6267 8.32578 10.6603 8.32504 10.6938 8.32418C10.7636 8.32242 10.8331 8.32031 10.9025 8.31801C10.9308 8.31707 10.9592 8.31625 10.9875 8.31523C11.0837 8.31172 11.1797 8.30781 11.2752 8.30328C11.287 8.30273 11.2986 8.30203 11.3103 8.30145C11.3943 8.29734 11.4779 8.29285 11.5612 8.28797C11.592 8.28617 11.6225 8.28422 11.6532 8.2823C11.7188 8.27824 11.7843 8.27391 11.8495 8.26937C11.8817 8.26711 11.9139 8.26484 11.9461 8.26246C12.015 8.25738 12.0836 8.25195 12.152 8.24633C12.1772 8.24426 12.2025 8.2423 12.2277 8.24016C12.3201 8.23227 12.4121 8.22391 12.5036 8.215C12.5211 8.21332 12.5384 8.21141 12.5558 8.20969C12.6301 8.2023 12.7041 8.19465 12.7778 8.1866C12.808 8.18332 12.838 8.17988 12.868 8.17648C12.9304 8.16945 12.9925 8.16215 13.0543 8.15465C13.0846 8.15098 13.115 8.1473 13.1452 8.14348C13.2137 8.13488 13.2819 8.1259 13.3498 8.11676C13.3707 8.11395 13.3918 8.11125 13.4126 8.10836C13.5004 8.09621 13.5877 8.08363 13.6744 8.07055C13.6952 8.06742 13.7157 8.06406 13.7364 8.0609C13.8029 8.05066 13.869 8.04023 13.9347 8.02945C13.9636 8.02473 13.9924 8.01984 14.0212 8.015C14.0802 8.00504 14.139 7.99488 14.1974 7.98449C14.2254 7.97949 14.2535 7.97457 14.2814 7.96949C14.3495 7.95707 14.4171 7.9443 14.4843 7.93129C14.5003 7.9282 14.5165 7.92523 14.5324 7.92211C14.6149 7.9059 14.6967 7.88922 14.7778 7.87211C14.7998 7.86746 14.8216 7.86262 14.8435 7.85793C14.9032 7.84512 14.9626 7.83207 15.0216 7.81875C15.049 7.81254 15.0763 7.80629 15.1035 7.79996C15.1588 7.78719 15.2137 7.77418 15.2683 7.76098C15.2936 7.75484 15.319 7.74879 15.3441 7.74258C15.413 7.72555 15.4814 7.7082 15.5491 7.69051C15.5583 7.68813 15.5676 7.68586 15.5767 7.68344C15.6531 7.66332 15.7286 7.64266 15.8035 7.62168C15.8256 7.61547 15.8474 7.6091 15.8694 7.60285C15.9228 7.58762 15.9759 7.57219 16.0285 7.55648C16.0539 7.54895 16.0791 7.54129 16.1043 7.53363C16.1556 7.51801 16.2065 7.50211 16.2571 7.48605C16.2793 7.47898 16.3016 7.47203 16.3237 7.46488C16.395 7.4418 16.4657 7.41844 16.5354 7.39453C16.5356 7.39445 16.5358 7.39438 16.5361 7.3943C16.6055 7.37047 16.6738 7.34609 16.7415 7.32145C16.7626 7.31375 16.7833 7.30594 16.8042 7.29816C16.8517 7.28055 16.8988 7.26277 16.9454 7.24477C16.9682 7.23598 16.9909 7.22711 17.0135 7.2182C17.0606 7.19961 17.1071 7.18078 17.1533 7.1618C17.1721 7.15406 17.1912 7.14641 17.2098 7.13859C17.2736 7.11195 17.3365 7.08496 17.3984 7.05746C17.406 7.0541 17.4133 7.05063 17.4208 7.04727C17.4751 7.02301 17.5286 6.99844 17.5814 6.97355C17.6009 6.96441 17.6199 6.95516 17.6391 6.94594C17.6805 6.92609 17.7214 6.90605 17.7619 6.88578C17.7818 6.87582 17.8017 6.86582 17.8214 6.85578C17.8638 6.8341 17.9055 6.81219 17.9468 6.79012C17.962 6.78203 17.9774 6.77402 17.9924 6.76586C18.0478 6.73578 18.1023 6.70535 18.1556 6.67449C18.166 6.66852 18.1759 6.66238 18.1862 6.65637C18.2292 6.63121 18.2716 6.60582 18.3133 6.58016C18.3198 6.57613 18.3267 6.57227 18.3332 6.56824V10C18.3333 11.151 14.6236 12.5 10 12.5ZM10 6.66668C5.37637 6.66668 1.66668 5.31766 1.66668 4.16668C1.66668 3.0157 5.37641 1.66668 10 1.66668C14.6236 1.66668 18.3333 3.0157 18.3333 4.16668C18.3333 5.31766 14.6236 6.66668 10 6.66668Z"
				fill="#677C95"
			/>
		</g>
	</svg>
);