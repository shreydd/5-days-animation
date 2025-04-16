import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const AnimatedCheckboxes = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  const draw = {
    hidden: { pathLength: activeCheckbox ? 1 : 0, opacity: 0 },
    visible: () => {
      const delay = 0.2;
      return {
        pathLength: activeCheckbox ? 0 : 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 0.4, bounce: 0 },
          opacity: { delay, duration: 0.4 },
        },
      };
    },
  };

  const toggleCheckBox = () => {
    setActiveCheckbox(!activeCheckbox);
  };

  return (
    <Card className="shadow-lg" id="day3">
      <CardHeader>
        <CardTitle>Day-3: Animated Checkboxes</CardTitle>
      </CardHeader>
      <CardContent className="max-w-fit min-h-64 flex items-center mx-auto">
        <div className="">
          <motion.button
            className="text-gray-700 hover:cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center size-fit gap-2"
            onClick={() => toggleCheckBox()}
          >
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              initial="hidden"
              animate="visible"
            >
              <motion.rect
                width="24"
                height="24"
                x="4"
                y="4"
                rx="5"
                stroke="#4a5565"
                variants={draw}
                style={{
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  fill: "transparent",
                  borderRadius: "4px",
                }}
              />

              {activeCheckbox && (
                <>
                  <motion.rect
                    width="24"
                    height="24"
                    x="4"
                    y="4"
                    stroke="#2b7fff"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.2,
                      scale: { type: "spring", duration: 0.2, bounce: 0.5 },
                    }}
                    style={{
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      fill: "#2b7fff",
                      borderRadius: "4px",
                    }}
                  />
                  <motion.path
                    d="M9 17 L14 22 L23 11"
                    fill="none"
                    stroke="white"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  />
                </>
              )}
              <title>checkcheck</title>
            </motion.svg>

            <span
              className={cn(
                "relative inline-block line-clamp-1",
                activeCheckbox && "text-gray-500"
              )}
            >
              Click to toggle the animation
              {/* Animated strikethrough */}
              <motion.div
                className="absolute left-0 top-1/2 h-[1px] bg-black"
                style={{
                  width: "100%",
                  transform: "translateY(-50%)",
                  originX: 0,
                }}
                initial={false}
                animate={{
                  scaleX: activeCheckbox ? 1 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AnimatedCheckboxes };
