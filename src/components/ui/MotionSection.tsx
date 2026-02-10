"use client";

import { motion, MotionProps } from "framer-motion";
import { useIsMobile } from "../../hooks/use-is-mobile";
import React from "react";

type MotionSectionProps = MotionProps & React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
};

export default function MotionSection({
    children,
    className,
    ...props
}: MotionSectionProps) {
    const isMobile = useIsMobile();

    if (isMobile) {
        // On mobile, render a plain section with NO framer props
        return (
            <section className={className} id={props.id}>
                {children}
            </section>
        );
    }

    // On desktop, render the full motion wrapper
    return (
        <motion.section className={className} {...props}>
            {children}
        </motion.section>
    );
}
