"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Docker",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "AWS",
];

export default function BubbleCarousel() {
  return (
    <div
      className="
        relative
        w-[600px]
        h-[300px]
        mx-auto
        overflow-hidden
      "
      style={{
        perspective: "1000px",
      }}
    >

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          w-[300px]
          h-[300px]
        "
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          translateX: "-50%",
          translateY: "-50%",
        }}
      >

        {skills.map((skill, index) => {

          const angle =
            (180 / (skills.length - 1)) * index - 90;


          return (
            <motion.div
              key={skill}
              className="
                absolute
                left-1/2
                top-1/2
                w-24
                h-24
                rounded-full
                bg-white/10
                backdrop-blur-md
                border
                border-white/30
                flex
                items-center
                justify-center
                text-white
                font-semibold
                shadow-xl
              "
              style={{
                transformStyle: "preserve-3d",

                transform: `
                  rotateY(${angle}deg)
                  translateZ(250px)
                `,
              }}

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {skill}
            </motion.div>
          );
        })}

      </motion.div>

    </div>
  );
}