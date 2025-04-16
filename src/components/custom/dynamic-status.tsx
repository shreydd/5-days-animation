import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShieldIcon, TriangleAlert } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const DynamicStatusBtn = () => {
  const [status, setStatus] = useState<
    "idle" | "analyzing" | "warning" | "success"
  >("idle");

  const analyzingVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const idleVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const successVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
      },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.1 } },
  };

  const warningVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
      },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.1 } },
  };

  const toggleAnimation = () => {
    if (status === "idle") {
      setStatus("analyzing");
    }
  };

  useEffect(() => {
    if (status === "analyzing") {
      setTimeout(() => {
        setStatus("warning");
      }, 1500);

      setTimeout(() => {
        setStatus("success");
      }, 3000);

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  }, [status]);

  return (
    <Card className="shadow-lg" id="day2">
      <CardHeader>
        <CardTitle>Day-2: Dynamic Status Indicator</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div className="min-h-64 w-fit mx-auto flex items-center">
          <motion.button
            type="button"
            className=""
            onClick={toggleAnimation}
            disabled={status !== "idle"}
          >
            {status === "analyzing" && (
              <motion.span className="flex gap-1 items-center bg-blue-100 px-4 py-2 rounded-full text-blue-500 font-normal">
                <motion.div>
                  <svg
                    className="mr-3 -ml-1 size-5 animate-spin text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />{" "}
                    <title>loader</title>
                  </svg>
                </motion.div>
                <motion.span
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={analyzingVariant}
                >
                  Analyzing Transaction
                </motion.span>
              </motion.span>
            )}

            {status === "warning" && (
              <motion.span className="flex gap-1 items-center bg-orange-100 px-4 py-2 rounded-full text-orange-500 font-normal">
                <TriangleAlert className="animate-wiggle" size={16} />
                <motion.span
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={warningVariant}
                >
                  Last remaining transaction
                </motion.span>
              </motion.span>
            )}

            {status === "success" && (
              <motion.span className="flex gap-1 items-center bg-green-100 px-4 py-2 rounded-full text-green-500 font-normal">
                <CheckCircle2 size={16} />
                <motion.span
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={successVariant}
                >
                  Transaction Safe
                </motion.span>
              </motion.span>
            )}

            {status === "idle" && (
              <motion.span className="flex gap-1 items-center bg-black/90 hover:cursor-pointer px-4 py-2 rounded-full text-white">
                <ShieldIcon size={16} />
                <motion.span
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={idleVariant}
                >
                  Check Transaction
                </motion.span>
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export { DynamicStatusBtn };
