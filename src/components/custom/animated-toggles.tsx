import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const tiers = ["Free", "Premium"];
const subTiers = ["Monthly", "Annual"];

const SubAnimatedToggles = ({ items }: { items: string[] }) => {
  const [selected, setSelected] = React.useState(items[0]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{opacity: 0, scale: 0}}
      transition={{
        duration: 0.3
      }}
      className="flex gap-2 shadow-lg flex-1 transition-all duration-300 rounded-full"
    >
      {items.map((item, index) => (
        <div
          onClick={() => setSelected(item)}
          onKeyDown={(event: { key: string }) =>
            event.key === "Enter" ? setSelected(item) : null
          }
          tabIndex={index}
          key={item}
          className={cn(
            "px-4 cursor-pointer py-2 flex flex-col justify-center items-center relative z-10 transition-all duration-300",
            item === selected && "text-black"
          )}
        >
          <div className="font-semibold">{item}</div>

          {item === selected ? (
            <motion.div
              layoutId="activeSubPill"
              style={{
                background: "#FFFFFF",
                width: "100%",
                height: "100%",
                borderRadius: "100px",
                position: "absolute",
                inset: "0rem",
                zIndex: -9999,
              }}
              transition={{
                type: "easeInOut"
              }}
            />
          ) : null}
        </div>
      ))}
    </motion.div>
  );
};

const AnimatedToggles = ({ items }: { items: string[] }) => {
  const [selected, setSelected] = React.useState(items[0]);

  return (
    <div className="flex flex-col sm:flex-row gap-2 px-4 py-2 shadow-lg flex-1 transition-all duration-300 rounded-full">
      {items.map((item, index) => (
        <motion.div
          onClick={() => setSelected(item)}
          onKeyDown={(event: { key: string }) =>
            event.key === "Enter" ? setSelected(item) : null
          }
          tabIndex={index}
          key={item}
          className={cn(
            "cursor-pointer py-2 flex flex-col justify-center items-center relative z-10 transition-all duration-300",
            item === selected && "text-white",
            item === "Free" ? "px-16" : "px-4"
          )}
        >
          {item === "Free" && <div className="font-semibold">{item}</div>}
          {item === "Premium" && selected !== "Premium" && (
            <>
              <div className="font-semibold">{item}</div>
              <div className={cn("text-xs")}>
                {subTiers[0]} + {subTiers[1]}
              </div>
            </>
          )}
          {item === "Premium" && selected === "Premium" && (
            <SubAnimatedToggles items={subTiers} />
          )}

          {item === selected ? (
            <motion.div
              layoutId="activePill"
              style={{
                background: "#000000",
                width: "100%",
                height: "100%",
                borderRadius: "100px",
                position: "absolute",
                inset: "0rem",
                zIndex: -9999,
              }}
              transition={{
                type: 'easeInOut',
              }}
            />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
};

const AnimatedTogglesContainer = () => {
  return (
    <Card className="shadow-lg" id="day4">
      <CardHeader>
        <CardTitle>Day-4: Animated toggles</CardTitle>
      </CardHeader>
      <CardContent className="min-h-64 w-fit mx-auto flex items-center transition-all duration-300">
        <AnimatedToggles items={tiers} />
      </CardContent>
    </Card>
  );
};

export { AnimatedTogglesContainer };
