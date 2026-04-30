'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import banner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="relative h-[60vh] container mx-auto rounded-lg shadow-2xl mt-5 overflow-hidden">
            <Image
                src={banner}
                alt="Banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        Discover Your Perfect Aesthetic
                    </h1>
                    <div className="flex gap-4">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-7 py-3 rounded-xl font-semibold text-white overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #5a00ff, #3f04ab, #8746ff)",
                                }}
                            >
                                {/* Glow Effect */}
                                <span className="absolute inset-0 rounded-xl blur-lg opacity-50 bg-gradient-to-r from-[#5a00ff] via-[#3f04ab] to-[#8746ff]"></span>

                                {/* Text */}
                                <span className="relative z-10">Browse Now..</span>
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;