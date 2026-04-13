import { Variants, Transition } from "framer-motion"

const transition: Transition = {
    duration: 0.5,
    ease: "easeOut",
}

export const formVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition,
    },
}
