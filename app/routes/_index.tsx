import { RiCss3Fill, RiFigmaFill, RiHtml5Fill, RiMapPinFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiRemixRunFill, RiSupabaseFill, RiTailwindCssFill, type RemixiconComponentType } from "@remixicon/react";
import type { ReactNode } from "react";
import { Link } from "react-router";

function Tag({ text }: { text: string }) {
    return (
        <div className="p-1 hover:bg-secondary/20 transition-colors border border-primary/20">
            {text}
        </div>
    );
}

function TechnologyBox({ text, Icon, children }: { text: string, children?: ReactNode, Icon?: RemixiconComponentType }) {
    return (
        <div className="group flex flex-col justify-center items-center p-4 border border-transparent hover:border-primary hover:text-primary transition-colors w-full">
            <div className="lg:group-hover:-translate-y-1 lg:translate-y-1 transition-transform">
                {Icon ? (
                    <Icon />) : (<></>)
                }
                {children ?? children}
            </div>
            <p className="text-sm lg:text-base lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">{text}</p>
        </div>
    );
}

export default function _index() {
    return (
        <main className="grid grid-cols-4 lg:grid-cols-6 h-screen">
            <div className="hidden lg:block stripes mask-radial-from-0% mask-radial-at-right mask-radial-farthest-side" />
            <div className="flex flex-col gap-2 col-span-4 w-full border-x border-secondary/40">
                <div className="flex flex-col gap-2 px-10 py-5 group">
                    <h1 className="text-6xl lg:text-8xl motion-preset-blur-down-lg text-shadow-lg text-shadow-primary/25 group-hover:text-primary transition-colors">
                        Alan J Bibins
                    </h1>
                    <h1 className="text-xl lg:text-2xl motion-preset-blur-down-lg text-shadow-lg text-shadow-primary/25">
                        Full Stack Developer
                    </h1>
                    <p
                        className="flex items-center gap-2 text-lg text-primary hover:-translate-y-1 transition-transform"
                    ><RiMapPinFill size={20} /> Thiruvananthapuram, Kerala
                    </p>
                </div>
                <div className="flex flex-col gap-2 px-10 py-5 border-y border-secondary/40 stripes opacity-60 bg-fixed bg-[size:10px_10px]" />
                <div className="flex flex-col gap-2 px-10 py-5 border-b border-secondary/40">
                    <h3 className="text-5xl">
                        Technologies
                    </h3>
                    <div className="grid grid-cols-4 justify-items-center-safe">
                        <TechnologyBox text="Remix" Icon={RiRemixRunFill} />
                        <TechnologyBox text="NextJs" Icon={RiNextjsFill} />
                        <TechnologyBox text="React" Icon={RiReactjsFill} />
                        <TechnologyBox text="HTML" Icon={RiHtml5Fill} />
                        <TechnologyBox text="CSS" Icon={RiCss3Fill} />
                        <TechnologyBox text="TailwindCSS" Icon={RiTailwindCssFill} />
                        <TechnologyBox text="Motion" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" id="Brand-Framer-Motion--Streamline-Tabler" height={24} width={24} ><desc>{"Brand Framer Motion Streamline Icon: https://streamlinehq.com"}</desc><path d="M11.25 11.25 3.75 3.75v15L18.75 3.75v15l-3.75 -3.75" strokeWidth={1.5} /><path d="m18.75 11.25 -7.5 7.5 -3.75 -3.75" strokeWidth={1.5} /></svg>
                        </TechnologyBox>
                        <TechnologyBox text="Figma" Icon={RiFigmaFill} />
                        <TechnologyBox text="NodeJs" Icon={RiNodejsFill} />
                        <TechnologyBox text="Supabase" Icon={RiSupabaseFill} />
                        <TechnologyBox text="Prisma ORM">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Prisma--Streamline-Simple-Icons" height="24" width="24"><desc>Prisma Streamline Icon: https://streamlinehq.com</desc><title>Prisma</title><path d="M21.8068 18.2848 13.5528 0.7565c-0.207 -0.4382 -0.639 -0.7273 -1.1286 -0.7541 -0.5023 -0.0293 -0.9523 0.213 -1.2062 0.6253L2.266 15.1271c-0.2773 0.4518 -0.2718 1.0091 0.0158 1.4555l4.3759 6.7786c0.2608 0.4046 0.7127 0.6388 1.1823 0.6388 0.1332 0 0.267 -0.0188 0.3987 -0.0577l12.7019 -3.7568c0.3891 -0.1151 0.7072 -0.3904 0.8737 -0.7553s0.1633 -0.7828 -0.0075 -1.1454zm-1.8481 0.7519L9.1814 22.2242c-0.3292 0.0975 -0.6448 -0.1873 -0.5756 -0.5194l3.8501 -18.4386c0.072 -0.3448 0.5486 -0.3996 0.699 -0.0803l7.1288 15.138c0.1344 0.2856 -0.019 0.6224 -0.325 0.7128z" fill="currentColor" stroke-width="1"></path></svg>
                        </TechnologyBox>
                        <TechnologyBox text="PostgreSQL" >
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Postgresql--Streamline-Simple-Icons" height={24} width={24} ><desc>{"Postgresql Streamline Icon: https://streamlinehq.com"}</desc><title>{"PostgreSQL"}</title><path d="M23.5594 14.7228a0.5269 0.5269 0 0 0 -0.0563 -0.1191c-0.139 -0.2632 -0.4768 -0.3418 -1.0074 -0.2321 -1.6533 0.3411 -2.2935 0.1312 -2.5256 -0.0191 1.342 -2.0482 2.445 -4.522 3.0411 -6.8297 0.2714 -1.0507 0.7982 -3.5237 0.1222 -4.7316a1.5641 1.5641 0 0 0 -0.1509 -0.235C21.6931 0.9086 19.8007 0.0248 17.5099 0.0005c-1.4947 -0.0158 -2.7705 0.3461 -3.1161 0.4794a9.449 9.449 0 0 0 -0.5159 -0.0816 8.044 8.044 0 0 0 -1.3114 -0.1278c-1.1822 -0.0184 -2.2038 0.2642 -3.0498 0.8406 -0.8573 -0.3211 -4.7888 -1.645 -7.2219 0.0788C0.9359 2.1526 0.3086 3.8733 0.4302 6.3043c0.0409 0.818 0.5069 3.334 1.2423 5.7436 0.4598 1.5065 0.9387 2.7019 1.4334 3.582 0.553 0.9942 1.1259 1.5933 1.7143 1.7895 0.4474 0.1491 1.1327 0.1441 1.8581 -0.7279 0.8012 -0.9635 1.5903 -1.8258 1.9446 -2.2069 0.4351 0.2355 0.9064 0.3625 1.39 0.3772a0.0569 0.0569 0 0 0 0.0004 0.0041 11.0312 11.0312 0 0 0 -0.2472 0.3054c-0.3389 0.4302 -0.4094 0.5197 -1.5002 0.7443 -0.3102 0.064 -1.1344 0.2339 -1.1464 0.8115 -0.0025 0.1224 0.0329 0.2309 0.0919 0.3268 0.2269 0.4231 0.9216 0.6097 1.015 0.6331 1.3345 0.3335 2.5044 0.092 3.3714 -0.6787 -0.017 2.231 0.0775 4.4174 0.3454 5.0874 0.2212 0.5529 0.7618 1.9045 2.4692 1.9043 0.2505 0 0.5263 -0.0291 0.8296 -0.0941 1.7819 -0.3821 2.5557 -1.1696 2.855 -2.9059 0.1503 -0.8707 0.4016 -2.8753 0.5388 -4.1012 0.0169 -0.0703 0.0357 -0.1207 0.057 -0.1362 0.0007 -0.0005 0.0697 -0.0471 0.4272 0.0307a0.3673 0.3673 0 0 0 0.0443 0.0068l0.2539 0.0223 0.0149 0.001c0.8468 0.0384 1.9114 -0.1426 2.5312 -0.4308 0.6438 -0.2988 1.8057 -1.0323 1.5951 -1.6698zM2.371 11.8765c-0.7435 -2.4358 -1.1779 -4.8851 -1.2123 -5.5719 -0.1086 -2.1714 0.4171 -3.6829 1.5623 -4.4927 1.8367 -1.2986 4.8398 -0.5408 6.108 -0.13 -0.0032 0.0032 -0.0066 0.0061 -0.0098 0.0094 -2.0238 2.044 -1.9758 5.536 -1.9708 5.7495 -0.0002 0.0823 0.0066 0.1989 0.0162 0.3593 0.0348 0.5873 0.0996 1.6804 -0.0735 2.9184 -0.1609 1.1504 0.1937 2.2764 0.9728 3.0892 0.0806 0.0841 0.1648 0.1631 0.2518 0.2374 -0.3468 0.3714 -1.1004 1.1926 -1.9025 2.1576 -0.5677 0.6825 -0.9597 0.5517 -1.0886 0.5087 -0.3919 -0.1307 -0.813 -0.5871 -1.2381 -1.3223 -0.4796 -0.839 -0.9635 -2.0317 -1.4155 -3.5126zm6.0072 5.0871c-0.1711 -0.0428 -0.3271 -0.1132 -0.4322 -0.1772 0.0889 -0.0394 0.2374 -0.0902 0.4833 -0.1409 1.2833 -0.2641 1.4815 -0.4506 1.9143 -1.0002 0.0992 -0.126 0.2116 -0.2687 0.3673 -0.4426a0.3549 0.3549 0 0 0 0.0737 -0.1298c0.1708 -0.1513 0.2724 -0.1099 0.4369 -0.0417 0.156 0.0646 0.3078 0.26 0.3695 0.4752 0.0291 0.1016 0.0619 0.2945 -0.0452 0.4444 -0.9043 1.2658 -2.2216 1.2494 -3.1676 1.0128zm2.094 -3.988 -0.0525 0.141c-0.133 0.3566 -0.2567 0.6881 -0.3334 1.003 -0.6674 -0.0021 -1.3168 -0.2872 -1.8105 -0.8024 -0.6279 -0.6551 -0.9131 -1.5664 -0.7825 -2.5004 0.1828 -1.3079 0.1153 -2.4468 0.079 -3.0586 -0.005 -0.0857 -0.0095 -0.1607 -0.0122 -0.2199 0.2957 -0.2621 1.6659 -0.9962 2.6429 -0.7724 0.4459 0.1022 0.7176 0.4057 0.8305 0.928 0.5846 2.7038 0.0774 3.8307 -0.3302 4.7363 -0.084 0.1866 -0.1633 0.3629 -0.2311 0.5454zm7.3637 4.5725c-0.0169 0.1768 -0.0358 0.376 -0.0618 0.5959l-0.146 0.4383a0.3547 0.3547 0 0 0 -0.0182 0.1077c-0.0059 0.4747 -0.054 0.6489 -0.115 0.8693 -0.0634 0.2292 -0.1353 0.4891 -0.1794 1.0575 -0.11 1.4143 -0.8782 2.2267 -2.4172 2.5565 -1.5155 0.3251 -1.7843 -0.4968 -2.0212 -1.2217a6.5824 6.5824 0 0 0 -0.0769 -0.2266c-0.2154 -0.5858 -0.1911 -1.4119 -0.1574 -2.5551 0.0165 -0.5612 -0.0249 -1.9013 -0.3302 -2.6462 0.0044 -0.2932 0.0106 -0.5909 0.019 -0.8918a0.3529 0.3529 0 0 0 -0.0153 -0.1126 1.4927 1.4927 0 0 0 -0.0439 -0.208c-0.1226 -0.4283 -0.4213 -0.7866 -0.7797 -0.9351 -0.1424 -0.059 -0.4038 -0.1672 -0.7178 -0.0869 0.067 -0.276 0.1831 -0.5875 0.309 -0.9249l0.0529 -0.142c0.0595 -0.16 0.134 -0.3257 0.213 -0.5012 0.4265 -0.9476 1.0106 -2.2453 0.3766 -5.1772 -0.2374 -1.0981 -1.0304 -1.6343 -2.2324 -1.5098 -0.7207 0.0746 -1.3799 0.3654 -1.7088 0.5321a5.6716 5.6716 0 0 0 -0.1958 0.1041c0.0918 -1.1064 0.4386 -3.1741 1.7357 -4.4823a4.0306 4.0306 0 0 1 0.3033 -0.276 0.3532 0.3532 0 0 0 0.1447 -0.0644c0.7524 -0.5706 1.6945 -0.8506 2.802 -0.8325 0.4091 0.0067 0.8017 0.0339 1.1742 0.081 1.939 0.3544 3.2439 1.4468 4.0359 2.3827 0.8143 0.9623 1.2552 1.9315 1.4312 2.4543 -1.3232 -0.1346 -2.2234 0.1268 -2.6797 0.779 -0.9926 1.4189 0.543 4.1729 1.2811 5.4964 0.1353 0.2426 0.2522 0.4522 0.2889 0.5413 0.2403 0.5825 0.5515 0.9713 0.7787 1.2552 0.0696 0.087 0.1372 0.1714 0.1885 0.245 -0.4008 0.1155 -1.1208 0.3825 -1.0552 1.717 -0.0123 0.1563 -0.0423 0.4469 -0.0834 0.8148 -0.0461 0.2077 -0.0702 0.4603 -0.0994 0.7662zm0.8905 -1.6211c-0.0405 -0.8316 0.2691 -0.9185 0.5967 -1.0105a2.8566 2.8566 0 0 0 0.135 -0.0406 1.202 1.202 0 0 0 0.1342 0.103c0.5703 0.3765 1.5823 0.4213 3.0068 0.1344 -0.2016 0.1769 -0.5189 0.3994 -0.9533 0.6011 -0.4098 0.1903 -1.0957 0.333 -1.7473 0.3636 -0.7197 0.0336 -1.0859 -0.0807 -1.1721 -0.151zm0.5695 -9.2712c-0.0059 0.3508 -0.0542 0.6692 -0.1054 1.0017 -0.055 0.3576 -0.112 0.7274 -0.1264 1.1762 -0.0142 0.4368 0.0404 0.8909 0.0932 1.3301 0.1066 0.887 0.216 1.8003 -0.2075 2.7014a3.5272 3.5272 0 0 1 -0.1876 -0.3856c-0.0527 -0.1276 -0.1669 -0.3326 -0.3251 -0.6162 -0.6156 -1.1041 -2.0574 -3.6896 -1.3193 -4.7446 0.3795 -0.5427 1.3408 -0.5661 2.1781 -0.463zm0.2284 7.0137a12.3762 12.3762 0 0 0 -0.0853 -0.1074l-0.0355 -0.0444c0.7262 -1.1995 0.5842 -2.3862 0.4578 -3.4385 -0.0519 -0.4318 -0.1009 -0.8396 -0.0885 -1.2226 0.0129 -0.4061 0.0666 -0.7543 0.1185 -1.0911 0.0639 -0.415 0.1288 -0.8443 0.1109 -1.3505 0.0134 -0.0531 0.0188 -0.1158 0.0118 -0.1902 -0.0457 -0.4855 -0.5999 -1.938 -1.7294 -3.253 -0.6076 -0.7073 -1.4896 -1.4972 -2.6889 -2.0395 0.5251 -0.1066 1.2328 -0.2035 2.0244 -0.1859 2.0515 0.0456 3.6746 0.8135 4.8242 2.2824a0.908 0.908 0 0 1 0.0667 0.1002c0.7231 1.3556 -0.2762 6.2751 -2.9867 10.5405zm-8.8166 -6.1162c-0.025 0.1794 -0.3089 0.4225 -0.6211 0.4225a0.5821 0.5821 0 0 1 -0.0809 -0.0056c-0.1873 -0.026 -0.3765 -0.144 -0.5059 -0.3156 -0.0458 -0.0605 -0.1203 -0.178 -0.1055 -0.2844 0.0055 -0.0401 0.0261 -0.0985 0.0925 -0.1488 0.1182 -0.0894 0.3518 -0.1226 0.6096 -0.0867 0.3163 0.0441 0.6426 0.1938 0.6113 0.4186zm7.9305 -0.4114c0.0111 0.0792 -0.049 0.201 -0.1531 0.3102 -0.0683 0.0717 -0.212 0.1961 -0.4079 0.2232a0.5456 0.5456 0 0 1 -0.075 0.0052c-0.2935 0 -0.5414 -0.2344 -0.5607 -0.3717 -0.024 -0.1765 0.2641 -0.3106 0.5611 -0.352 0.297 -0.0414 0.6111 0.0088 0.6356 0.1851z" fill="currentColor" strokeWidth={1} /></svg>
                        </TechnologyBox>
                    </div>
                </div>
                <div className="flex flex-col gap-2  py-5 border-b border-secondary/40">
                    <h3 className="text-5xl px-10">
                        Projects
                    </h3>
                    <div className="grid grid-cols-1 justify-items-center-safe">
                        <Link to={'https://examcooker.acmvit.in/'} target="_blank" className="w-full border-y border-y-secondary/40 grid grid-cols-1 lg:grid-cols-2 hover:bg-secondary/20 transition-colors group gap-2">
                            <div className="lg:mask-radial-at-right lg:mask-radial-to-95% lg:mask-radial-farthest-corner">
                                <img src="ec.jpg" />
                            </div>
                            <div>
                                <h1 className="text-xl">ExamCooker</h1>
                                <br />
                                <div className="flex flex-wrap gap-2">
                                    <Tag text="NextJs" />
                                    <Tag text="React" />
                                    <Tag text="Tailwind" />
                                </div>
                            </div>
                        </Link>
                        <Link to={'https://styq.ai/'} target="_blank" className="w-full border-y border-y-secondary/40 grid grid-cols-1 lg:grid-cols-2 hover:bg-secondary/20 transition-colors group gap-2">
                            <div className="lg:mask-radial-at-right lg:mask-radial-to-95% lg:mask-radial-farthest-corner">
                                <img src="styq.png" />
                            </div>
                            <div>
                                <h1 className="text-xl">StyQ</h1>
                                <br />
                                <div className="flex flex-wrap gap-2">
                                    <Tag text="NextJs" />
                                    <Tag text="React" />
                                    <Tag text="Tailwind" />
                                    <Tag text="Prisma ORM" />
                                    <Tag text="PostgreSQL" />
                                    <Tag text="FastAPI" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block stripes mask-radial-from-0% mask-radial-at-left mask-radial-farthest-side" />
        </main>
    )
}
