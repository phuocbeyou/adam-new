"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function Karma() {
    const lineControls = useAnimation()
    const dotControls = useAnimation()
    const textTagControls = useAnimation()

    // Refs for lines to get their total length
    const lineRefs = useRef<(SVGPathElement | null)[]>([])
    const dotRefs = useRef<(SVGPathElement | null)[]>([])

    const [lineLengths, setLineLengths] = useState<number[]>([])
    const [dotLengths, setDotLengths] = useState<number[]>([])

    useEffect(() => {
        // Calculate lengths for line drawing animation
        const calculatedLineLengths = lineRefs.current.map((ref) => ref?.getTotalLength() || 0)
        setLineLengths(calculatedLineLengths)

        // Calculate lengths for dot stroke animation
        const calculatedDotLengths = dotRefs.current.map((ref) => ref?.getTotalLength() || 0)
        setDotLengths(calculatedDotLengths)

        const animateSvg = async () => {
            // 1. Animate text tag sliding in from left
            await textTagControls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1.0,
                    ease: "easeOut",
                },
            })

            // 2. Animate lines drawing from dots (running up effect)
            if (calculatedLineLengths.every((l) => l > 0)) {
                await lineControls.start((i) => ({
                    strokeDashoffset: 0,
                    transition: {
                        duration: 1.5,
                        ease: "easeOut",
                        delay: i * 0.3, // Stagger lines
                    },
                }))
            }

            // 3. Animate dots stroke movement (continuous pulsing)
            if (calculatedDotLengths.every((l) => l > 0)) {
                dotControls.start((i) => ({
                    strokeDashoffset: [0, -calculatedDotLengths[i], 0],
                    transition: {
                        duration: 2.0,
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                    },
                }))
            }
        }

        animateSvg()
    }, [lineControls, dotControls, textTagControls])

    return (
        <div className="flex items-center justify-center w-full p-4">
            <div className="w-full max-w-6xl">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 922 407"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <g>
                        <g filter="url(#filter0_ddd_6254_673)">
                            <mask
                                id="mask0_6254_673"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="357"
                                y="127"
                                width="251"
                                height="227"
                            >
                                <path
                                    d="M607.685 194.809H607.674C607.71 193.95 607.741 193.09 607.741 192.226C607.741 157.455 578.411 127.312 542.237 127.312C515.786 127.312 493.013 144.339 482.674 166.034H482.658C472.314 144.339 449.545 127.312 423.095 127.312C386.915 127.312 357.591 157.455 357.591 192.226C357.591 193.09 357.622 193.95 357.657 194.809H357.647C357.647 194.809 353.95 236.115 399.919 281.215C420.821 302.158 444.195 322.058 482.668 353.33C521.142 322.058 544.515 302.158 565.418 281.215C611.387 236.115 607.69 194.809 607.69 194.809H607.685Z"
                                    fill="white"
                                />
                                <path
                                    d="M542.237 127.871C578.102 127.871 607.182 157.763 607.182 192.226C607.182 193.078 607.152 193.928 607.116 194.786L607.092 195.368H607.164C607.179 195.673 607.195 196.112 607.2 196.677C607.211 197.879 607.177 199.652 606.992 201.922C606.623 206.464 605.656 212.998 603.258 220.938C598.537 236.567 588.269 257.663 566.092 279.763L565.026 280.816L565.022 280.82C544.206 301.676 520.93 321.503 482.668 352.609C444.406 321.503 421.13 301.676 400.314 280.82L400.311 280.816C377.395 258.334 366.875 236.815 362.079 220.938C359.681 212.998 358.713 206.464 358.345 201.922C358.16 199.652 358.126 197.879 358.137 196.677C358.142 196.112 358.158 195.673 358.173 195.368H358.239L358.216 194.786C358.18 193.928 358.149 193.078 358.149 192.226C358.149 157.763 387.225 127.871 423.095 127.871C449.302 127.871 471.89 144.747 482.154 166.275L482.306 166.593H483.026L483.178 166.275C493.437 144.748 516.03 127.871 542.237 127.871Z"
                                    stroke="white"
                                    strokeWidth="1.11721"
                                />
                            </mask>
                            <g mask="url(#mask0_6254_673)">
                                <path d="M482.667 353.33V110.878L403.616 99.8003L482.667 353.33Z" fill="url(#paint0_linear_6254_673)" />
                                <path
                                    d="M482.108 111.363V349.662L404.411 100.475L482.108 111.363Z"
                                    stroke="white"
                                    strokeOpacity="0.16"
                                    strokeWidth="1.11721"
                                />
                                <path
                                    d="M482.668 353.33L311.082 74.1108L220.19 173.836L482.668 353.33Z"
                                    fill="url(#paint1_linear_6254_673)"
                                />
                                <path
                                    d="M480.818 351.388L221.036 173.737L310.994 75.0347L480.818 351.388Z"
                                    stroke="white"
                                    strokeOpacity="0.16"
                                    strokeWidth="1.11721"
                                />
                                <path d="M482.668 353.33V106.837L524.572 108.89L482.668 353.33Z" fill="url(#paint2_linear_6254_673)" />
                                <path
                                    d="M523.914 109.417L483.227 346.764V107.423L523.914 109.417Z"
                                    stroke="white"
                                    strokeOpacity="0.16"
                                    strokeWidth="1.11721"
                                />
                                <path
                                    d="M482.668 353.33L605.246 108.89L666.348 231.487L482.668 353.33Z"
                                    fill="url(#paint3_linear_6254_673)"
                                />
                                <path
                                    d="M665.627 231.294L484.107 351.705L605.244 110.14L665.627 231.294Z"
                                    stroke="white"
                                    strokeOpacity="0.16"
                                    strokeWidth="1.11721"
                                />
                                <path
                                    d="M481.926 357.161L521.041 123.558L595.467 129.534L481.926 357.161Z"
                                    fill="url(#paint4_linear_6254_673)"
                                    stroke="white"
                                    strokeOpacity="0.16"
                                    strokeWidth="1.11721"
                                />
                                <path
                                    d="M482.668 353.33L401.243 79.2271L327.702 101.64L482.668 353.33Z"
                                    fill="url(#paint5_linear_6254_673)"
                                />
                                <path
                                    d="M480.931 349.445L328.557 101.963L400.867 79.9253L480.931 349.445Z"
                                    stroke="white"
                                    strokeOpacity="0.16"
                                    strokeWidth="1.11721"
                                />
                            </g>
                        </g>

                        {/* Lines - animated to draw from dots with "running up" effect */}
                        <motion.path
                            ref={(el) => { lineRefs.current[0] = el; }}
                            d="M482.993 26.876L514.343 83.8349C516.903 88.4866 517.5 93.9682 516 99.0619L497.643 161.42"
                            stroke="url(#paint13_linear_6254_673)"
                            strokeWidth="0.995772"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: lineLengths[0] || 1000,
                                strokeDashoffset: lineLengths[0] || 1000,
                            }}
                            animate={lineControls}
                            custom={0}
                        />
                        <motion.path
                            ref={(el) => { lineRefs.current[1] = el; }}
                            d="M328.884 102.864L394.642 102.332C400.501 102.284 406.084 104.819 409.904 109.262L449.463 155.271"
                            stroke="url(#paint15_linear_6254_673)"
                            strokeWidth="0.995772"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: lineLengths[1] || 1000,
                                strokeDashoffset: lineLengths[1] || 1000,
                            }}
                            animate={lineControls}
                            custom={1}
                        />
                        <motion.path
                            ref={(el) => { lineRefs.current[2] = el; }}
                            d="M273.573 176.575L392.844 176.575"
                            stroke="url(#paint17_linear_6254_673)"
                            strokeWidth="0.995772"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: lineLengths[2] || 1000,
                                strokeDashoffset: lineLengths[2] || 1000,
                            }}
                            animate={lineControls}
                            custom={2}
                        />
                        <motion.path
                            ref={(el) => { lineRefs.current[3] = el; }}
                            d="M275.908 261.947L378.663 261.946C385.778 261.946 392.353 258.151 395.91 251.989L397.729 248.839"
                            stroke="url(#paint19_linear_6254_673)"
                            strokeWidth="0.995772"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: lineLengths[3] || 1000,
                                strokeDashoffset: lineLengths[3] || 1000,
                            }}
                            animate={lineControls}
                            custom={3}
                        />
                        <motion.path
                            ref={(el) => { lineRefs.current[4] = el; }}
                            d="M644.886 102.816L605.886 154.232C602.191 159.103 596.464 162.007 590.35 162.109L544.267 162.876"
                            stroke="url(#paint21_linear_6254_673)"
                            strokeWidth="0.995772"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: lineLengths[4] || 1000,
                                strokeDashoffset: lineLengths[4] || 1000,
                            }}
                            animate={lineControls}
                            custom={4}
                        />
                        <motion.path
                            ref={(el) => { lineRefs.current[5] = el; }}
                            d="M558.194 232.095L580.491 276.653C583.865 283.397 590.76 287.657 598.301 287.657L661.359 287.657"
                            stroke="url(#paint23_linear_6254_673)"
                            strokeWidth="0.995772"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: lineLengths[5] || 1000,
                                strokeDashoffset: lineLengths[5] || 1000,
                            }}
                            animate={lineControls}
                            custom={5}
                        />

                        {/* Dots with animated strokes */}
                        <motion.path
                            ref={(el) => { dotRefs.current[0] = el; }}
                            opacity="0.8"
                            d="M399.395 238.425C393.71 237.196 388.27 240.676 387.032 246.332C385.794 251.989 389.289 257.399 394.974 258.628C400.66 259.856 406.1 256.377 407.338 250.721C408.982 245.152 405.081 239.654 399.395 238.425Z"
                            stroke="url(#paint6_linear_6254_673)"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: dotLengths[0] || 100,
                                strokeDashoffset: 0,
                            }}
                            animate={dotControls}
                            custom={0}
                        />
                        <path
                            d="M397.934 245.253C395.903 244.814 393.961 246.057 393.519 248.077C393.076 250.097 394.325 252.029 396.355 252.468C398.386 252.907 400.328 251.665 400.771 249.644C401.358 247.655 399.965 245.692 397.934 245.253Z"
                            fill="white"
                        />

                        <motion.path
                            ref={(el) => { dotRefs.current[1] = el; }}
                            opacity="0.8"
                            d="M395.825 165.425C390.139 164.196 384.7 167.676 383.462 173.332C382.224 178.989 385.718 184.399 391.404 185.628C397.09 186.856 402.529 183.377 403.767 177.721C405.411 172.152 401.511 166.654 395.825 165.425Z"
                            stroke="url(#paint7_linear_6254_673)"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: dotLengths[1] || 100,
                                strokeDashoffset: 0,
                            }}
                            animate={dotControls}
                            custom={1}
                        />
                        <path
                            d="M394.364 172.253C392.333 171.814 390.39 173.057 389.948 175.077C389.506 177.097 390.754 179.029 392.785 179.468C394.815 179.907 396.758 178.665 397.2 176.644C397.787 174.655 396.394 172.692 394.364 172.253Z"
                            fill="white"
                        />

                        <motion.path
                            ref={(el) => { dotRefs.current[2] = el; }}
                            opacity="0.8"
                            d="M452.177 145.425C446.491 144.196 441.051 147.676 439.813 153.332C438.575 158.989 442.07 164.399 447.756 165.628C453.441 166.856 458.881 163.377 460.119 157.721C461.763 152.152 457.862 146.654 452.177 145.425Z"
                            stroke="url(#paint9_linear_6254_673)"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: dotLengths[2] || 100,
                                strokeDashoffset: 0,
                            }}
                            animate={dotControls}
                            custom={2}
                        />
                        <path
                            d="M450.715 152.253C448.685 151.814 446.742 153.057 446.3 155.077C445.858 157.097 447.106 159.029 449.136 159.468C451.167 159.907 453.11 158.665 453.552 156.644C454.139 154.655 452.746 152.692 450.715 152.253Z"
                            fill="white"
                        />

                        <motion.path
                            ref={(el) => { dotRefs.current[3] = el; }}
                            opacity="0.8"
                            d="M501.395 149.481C495.71 148.253 490.27 151.732 489.032 157.388C487.794 163.045 491.289 168.455 496.974 169.684C502.66 170.913 508.1 167.433 509.338 161.777C510.982 156.208 507.081 150.71 501.395 149.481Z"
                            stroke="url(#paint10_linear_6254_673)"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: dotLengths[3] || 100,
                                strokeDashoffset: 0,
                            }}
                            animate={dotControls}
                            custom={3}
                        />
                        <path
                            d="M499.934 156.309C497.903 155.87 495.961 157.113 495.519 159.133C495.076 161.153 496.325 163.086 498.355 163.524C500.386 163.963 502.328 162.721 502.771 160.7C503.358 158.712 501.965 156.748 499.934 156.309Z"
                            fill="white"
                        />

                        <motion.path
                            ref={(el) => { dotRefs.current[4] = el; }}
                            opacity="0.8"
                            d="M547.395 151.66C541.71 150.431 536.27 153.91 535.032 159.567C533.794 165.224 537.289 170.634 542.974 171.863C548.66 173.091 554.1 169.612 555.338 163.955C556.982 158.387 553.081 152.889 547.395 151.66Z"
                            stroke="url(#paint11_linear_6254_673)"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: dotLengths[4] || 100,
                                strokeDashoffset: 0,
                            }}
                            animate={dotControls}
                            custom={4}
                        />
                        <path
                            d="M545.934 158.488C543.903 158.049 541.961 159.292 541.519 161.312C541.076 163.332 542.325 165.264 544.355 165.703C546.386 166.142 548.328 164.899 548.771 162.879C549.358 160.89 547.965 158.927 545.934 158.488Z"
                            fill="white"
                        />

                        <motion.path
                            ref={(el) => { dotRefs.current[5] = el; }}
                            opacity="0.8"
                            d="M560.645 222.59C554.96 221.361 549.52 224.841 548.282 230.497C547.044 236.154 550.539 241.564 556.224 242.793C561.91 244.022 567.35 240.542 568.588 234.886C570.232 229.317 566.331 223.819 560.645 222.59Z"
                            stroke="url(#paint12_linear_6254_673)"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            fill="none"
                            initial={{
                                strokeDasharray: dotLengths[5] || 100,
                                strokeDashoffset: 0,
                            }}
                            animate={dotControls}
                            custom={5}
                        />
                        <path
                            d="M559.184 229.418C557.153 228.979 555.211 230.222 554.769 232.242C554.326 234.262 555.575 236.195 557.605 236.633C559.636 237.072 561.578 235.83 562.021 233.809C562.608 231.82 561.215 229.857 559.184 229.418Z"
                            fill="white"
                        />

                        {/* Text Tag sliding from left */}
                        <motion.g initial={{ x: -400, opacity: 0 }} animate={textTagControls}>
                            <g filter="url(#filter1_d_6254_673)">
                                <rect x="281.18" y="14.3086" width="331.55" height="46.8012" rx="23.4006" fill="#102644" />
                                <rect
                                    x="281.678"
                                    y="14.8065"
                                    width="330.554"
                                    height="45.8054"
                                    rx="22.9027"
                                    stroke="url(#paint14_linear_6254_673)"
                                    strokeWidth="0.995772"
                                />
                            </g>
                            <motion.text
                                x="295"
                                y="44"
                                fill="white"
                                fontSize="15"
                                fontWeight="bold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <tspan className="text-[17px]">SPIRITUAL CULTURE FUND</tspan>
                                <tspan className="text-[17px]" x="563">10%</tspan> {/* Điều chỉnh x theo chiều rộng tổng thể */}
                            </motion.text>

                        </motion.g>

                        {/* Static text groups */}
                        <g filter="url(#filter2_d_6254_673)">
                            <rect x="134.575" y="81.8672" width="246.923" height="46.8012" rx="23.4006" fill="#102644" />
                            <rect
                                x="135.073"
                                y="82.3651"
                                width="245.927"
                                height="45.8054"
                                rx="22.9027"
                                stroke="url(#paint16_linear_6254_673)"
                                strokeWidth="0.995772"
                            />
                        </g>
                        <motion.text
                            x="150"        // Tuỳ chỉnh để căn giữa theo chiều ngang
                            y="110"         // Tuỳ chỉnh để căn giữa theo chiều dọc
                            fill="white"
                            fontSize="15"  // Điều chỉnh size tùy ý
                            fontWeight="bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <tspan className="text-[17px]">EMPATHY FUND</tspan>
                            <tspan className="text-[17px]" x="322">10%</tspan>
                        </motion.text>

                        {/* Additional static elements */}
                        <g filter="url(#filter3_d_6254_673)">
                            <rect x="30.0459" y="152.624" width="297.88" height="46.8012" rx="23.4006" fill="#102644" />
                            <rect
                                x="30.5438"
                                y="153.121"
                                width="296.884"
                                height="45.8054"
                                rx="22.9027"
                                stroke="url(#paint18_linear_6254_673)"
                                strokeWidth="0.995772"
                            />
                        </g>
                        <motion.text
                            x="50"        // Tuỳ chỉnh để căn giữa theo chiều ngang
                            y="180"         // Tuỳ chỉnh để căn giữa theo chiều dọc
                            fill="white"
                            fontSize="15"  // Điều chỉnh size tùy ý
                            fontWeight="bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <tspan className="text-[17px]">TECH FOR GOOD FUN</tspan>
                            <tspan className="text-[17px]" x="272">15%</tspan>
                        </motion.text>

                        <g filter="url(#filter4_d_6254_673)">
                            <rect x="39.0576" y="236.049" width="295.624" height="46.8012" rx="23.4006" fill="#102644" />
                            <rect
                                x="39.5555"
                                y="236.547"
                                width="294.628"
                                height="45.8054"
                                rx="22.9027"
                                stroke="url(#paint20_linear_6254_673)"
                                strokeWidth="0.995772"
                            />
                        </g>
                        <motion.text
                            x="60"        // Tuỳ chỉnh để căn giữa theo chiều ngang
                            y="265"         // Tuỳ chỉnh để căn giữa theo chiều dọc
                            fill="white"
                            fontSize="15"  // Điều chỉnh size tùy ý
                            fontWeight="bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <tspan className="text-[17px]">HEALING HANDS FUND</tspan>
                            <tspan className="text-[17px]" x="272">20%</tspan>
                        </motion.text>

                        <g filter="url(#filter5_d_6254_673)">
                            <rect x="594.85" y="92.7451" width="289.09" height="46.8012" rx="23.4006" fill="#102644" />
                            <rect
                                x="595.347"
                                y="93.243"
                                width="288.094"
                                height="45.8054"
                                rx="22.9027"
                                stroke="url(#paint22_linear_6254_673)"
                                strokeWidth="0.995772"
                            />
                        </g>
                        <motion.text
                            x="610"        // Tuỳ chỉnh để căn giữa theo chiều ngang
                            y="120"         // Tuỳ chỉnh để căn giữa theo chiều dọc
                            fill="white"
                            fontSize="15"  // Điều chỉnh size tùy ý
                            fontWeight="bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <tspan className="text-[17px]">WEB3 EDU SEED FUN</tspan>
                            <tspan className="text-[17px]" x="825">25%</tspan>
                        </motion.text>

                        <g filter="url(#filter6_d_6254_673)">
                            <rect x="602.236" y="266.136" width="289.09" height="46.8012" rx="23.4006" fill="#102644" />
                            <rect
                                x="602.734"
                                y="266.634"
                                width="288.094"
                                height="45.8054"
                                rx="22.9027"
                                stroke="url(#paint24_linear_6254_673)"
                                strokeWidth="0.995772"
                            />
                        </g>
                        <motion.text
                            x="620"        // Tuỳ chỉnh để căn giữa theo chiều ngang
                            y="295"         // Tuỳ chỉnh để căn giữa theo chiều dọc
                            fill="white"
                            fontSize="15"  // Điều chỉnh size tùy ý
                            fontWeight="bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <tspan className="text-[17px]" >GREEN EARTH FUN</tspan>
                            <tspan className="text-[17px]" x="830">20%</tspan>
                        </motion.text>
                    </g>

                    {/* All the defs and gradients */}
                    <defs>
                        <filter
                            id="filter0_ddd_6254_673"
                            x="244.179"
                            y="15.0323"
                            width="476.979"
                            height="452.812"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset dy="5.13673" />
                            <feGaussianBlur stdDeviation="18.825" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.754808 0 0 0 0 0.754808 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_6254_673" result="effect2_dropShadow_6254_673" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1.11721" />
                            <feGaussianBlur stdDeviation="56.6985" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.501961 0 0 0 0 0.580392 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect2_dropShadow_6254_673" result="effect3_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_6254_673" result="shape" />
                        </filter>
                        <filter
                            id="filter1_d_6254_673"
                            x="251.307"
                            y="0.367793"
                            width="391.296"
                            height="106.548"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="15.9323" />
                            <feGaussianBlur stdDeviation="14.9366" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.00979167 0 0 0 0 0.117887 0 0 0 0 0.195833 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6254_673" result="shape" />
                        </filter>
                        <filter
                            id="filter2_d_6254_673"
                            x="104.702"
                            y="67.9264"
                            width="306.669"
                            height="106.548"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="15.9323" />
                            <feGaussianBlur stdDeviation="14.9366" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.00979167 0 0 0 0 0.117887 0 0 0 0 0.195833 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6254_673" result="shape" />
                        </filter>
                        <filter
                            id="filter3_d_6254_673"
                            x="0.172752"
                            y="138.683"
                            width="357.626"
                            height="106.548"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="15.9323" />
                            <feGaussianBlur stdDeviation="14.9366" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.00979167 0 0 0 0 0.117887 0 0 0 0 0.195833 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6254_673" result="shape" />
                        </filter>
                        <filter
                            id="filter4_d_6254_673"
                            x="9.18447"
                            y="222.108"
                            width="355.37"
                            height="106.548"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="15.9323" />
                            <feGaussianBlur stdDeviation="14.9366" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.00979167 0 0 0 0 0.117887 0 0 0 0 0.195833 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6254_673" result="shape" />
                        </filter>
                        <filter
                            id="filter5_d_6254_673"
                            x="564.976"
                            y="78.8043"
                            width="348.836"
                            height="106.548"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="15.9323" />
                            <feGaussianBlur stdDeviation="14.9366" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.00979167 0 0 0 0 0.117887 0 0 0 0 0.195833 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6254_673" result="shape" />
                        </filter>
                        <filter
                            id="filter6_d_6254_673"
                            x="572.363"
                            y="252.195"
                            width="348.836"
                            height="106.548"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="15.9323" />
                            <feGaussianBlur stdDeviation="14.9366" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.00979167 0 0 0 0 0.117887 0 0 0 0 0.195833 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6254_673" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6254_673" result="shape" />
                        </filter>
                        <linearGradient
                            id="paint0_linear_6254_673"
                            x1="443.142"
                            y1="99.8003"
                            x2="443.142"
                            y2="353.33"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#E26A7E" />
                            <stop offset="1" stopColor="#E9BCC3" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_6254_673"
                            x1="351.429"
                            y1="74.1108"
                            x2="351.429"
                            y2="353.33"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.111914" stopColor="white" />
                            <stop offset="0.670316" stopColor="#D897A6" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_6254_673"
                            x1="503.62"
                            y1="106.837"
                            x2="503.62"
                            y2="353.33"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF8094" />
                            <stop offset="1" stopColor="#FFAFBC" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_6254_673"
                            x1="666.348"
                            y1="111.252"
                            x2="482.668"
                            y2="350.969"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.230872" stopColor="#FF92A2" />
                            <stop offset="1" stopColor="#D897A6" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_6254_673"
                            x1="538.697"
                            y1="123.558"
                            x2="538.697"
                            y2="357.161"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF5B76" />
                            <stop offset="1" stopColor="#FACAD2" />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_6254_673"
                            x1="472.36"
                            y1="353.33"
                            x2="338.01"
                            y2="79.2271"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFDADA" />
                            <stop offset="0.961538" stopColor="#FFA3B4" />
                        </linearGradient>
                        <linearGradient
                            id="paint6_linear_6254_673"
                            x1="410.476"
                            y1="401.821"
                            x2="407.873"
                            y2="203.63"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint7_linear_6254_673"
                            x1="406.906"
                            y1="328.821"
                            x2="404.303"
                            y2="130.63"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint8_linear_6254_673"
                            x1="406.906"
                            y1="328.821"
                            x2="404.303"
                            y2="130.63"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint9_linear_6254_673"
                            x1="463.257"
                            y1="308.821"
                            x2="460.655"
                            y2="110.63"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint10_linear_6254_673"
                            x1="512.476"
                            y1="312.877"
                            x2="509.873"
                            y2="114.686"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint11_linear_6254_673"
                            x1="558.476"
                            y1="315.056"
                            x2="555.873"
                            y2="116.865"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint12_linear_6254_673"
                            x1="571.726"
                            y1="385.986"
                            x2="569.123"
                            y2="187.795"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.803412" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint13_linear_6254_673"
                            x1="467.882"
                            y1="-2.50638"
                            x2="500.615"
                            y2="104.552"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.303689" stopColor="#35A5D5" />
                            <stop offset="0.89827" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint14_linear_6254_673"
                            x1="408.134"
                            y1="-71.8741"
                            x2="419.824"
                            y2="63.4534"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.580613" stopColor="#3DBDF1" />
                            <stop offset="1" stopColor="#1A6F92" stopOpacity="0.35" />
                        </linearGradient>
                        <linearGradient
                            id="paint15_linear_6254_673"
                            x1="283.955"
                            y1="101.899"
                            x2="326.723"
                            y2="172.764"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.303689" stopColor="#35A5D5" />
                            <stop offset="0.89827" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint16_linear_6254_673"
                            x1="229.125"
                            y1="-4.31548"
                            x2="244.728"
                            y2="130.212"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.580613" stopColor="#3DBDF1" />
                            <stop offset="1" stopColor="#1A6F92" stopOpacity="0.35" />
                        </linearGradient>
                        <linearGradient
                            id="paint17_linear_6254_673"
                            x1="199.442"
                            y1="176.74"
                            x2="266.409"
                            y2="287.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.303689" stopColor="#35A5D5" />
                            <stop offset="0.89827" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint18_linear_6254_673"
                            x1="144.108"
                            y1="66.4409"
                            x2="157.096"
                            y2="201.529"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.580613" stopColor="#3DBDF1" />
                            <stop offset="1" stopColor="#1A6F92" stopOpacity="0.35" />
                        </linearGradient>
                        <linearGradient
                            id="paint19_linear_6254_673"
                            x1="249.307"
                            y1="242.35"
                            x2="326.235"
                            y2="323.682"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.303689" stopColor="#35A5D5" />
                            <stop offset="0.89827" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint20_linear_6254_673"
                            x1="152.255"
                            y1="149.866"
                            x2="165.341"
                            y2="284.936"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.580613" stopColor="#3DBDF1" />
                            <stop offset="1" stopColor="#1A6F92" stopOpacity="0.35" />
                        </linearGradient>
                        <linearGradient
                            id="paint21_linear_6254_673"
                            x1="668.27"
                            y1="79.475"
                            x2="576.267"
                            y2="143.257"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.303689" stopColor="#35A5D5" />
                            <stop offset="0.89827" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint22_linear_6254_673"
                            x1="705.545"
                            y1="6.56245"
                            x2="718.921"
                            y2="141.575"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.580613" stopColor="#3DBDF1" />
                            <stop offset="1" stopColor="#1A6F92" stopOpacity="0.35" />
                        </linearGradient>
                        <linearGradient
                            id="paint23_linear_6254_673"
                            x1="664.526"
                            y1="233.528"
                            x2="555.063"
                            y2="210.062"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.303689" stopColor="#35A5D5" />
                            <stop offset="0.89827" stopColor="white" />
                        </linearGradient>
                        <linearGradient
                            id="paint24_linear_6254_673"
                            x1="712.932"
                            y1="179.954"
                            x2="726.308"
                            y2="314.966"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.580613" stopColor="#3DBDF1" />
                            <stop offset="1" stopColor="#1A6F92" stopOpacity="0.35" />
                        </linearGradient>
                        <clipPath id="clip0_6254_673">
                            <rect width="551.176" height="357.453" fill="white" transform="translate(161.193 49.0791)" />
                        </clipPath>
                    </defs>
                </motion.svg>
            </div>
        </div>
    )
}
