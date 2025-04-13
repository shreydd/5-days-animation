import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HomeIcon,
  MailIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const menuButtonVariants = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.4 } },
  closed: { opacity: 1, transition: { duration: 0.4 } },
};

const FluidMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const iconSize = 22;
  const iconStrokeWidth = 1;

  return (
    <Card className="shadow-lg" id="day1">
      <CardHeader>
        <CardTitle>Day 1 - Fluid Menu Animation</CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent>
        <motion.div className="w-fit min-h-64 mx-auto">
          <motion.button
            type="button"
            onClick={toggleMenu}
            className="rounded-full -space-y-2 hover:cursor-pointer bg-gray-100 p-3 w-fit"
            initial="initial"
            animate={openMenu ? "open" : "closed"}
            variants={menuButtonVariants}
          >
            {!openMenu ? (
              <MenuIcon size={iconSize} strokeWidth={iconStrokeWidth} />
            ) : (
              <XIcon strokeWidth={iconStrokeWidth} size={iconSize} />
            )}
          </motion.button>
          <AnimatePresence>
            {openMenu && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                className="flex flex-col -mt-2 -space-y-2"
                exit={"hidden"}
              >
                <motion.button
                  type="button"
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  className="rounded-full hover:cursor-pointer bg-gray-100 p-3 w-fit"
                >
                  <HomeIcon strokeWidth={iconStrokeWidth} size={iconSize} />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  className="rounded-full hover:cursor-pointer bg-gray-100 p-3 w-fit"
                >
                  <MailIcon strokeWidth={iconStrokeWidth} size={iconSize} />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  className="rounded-full hover:cursor-pointer bg-gray-100 p-3 w-fit"
                >
                  <UserIcon strokeWidth={iconStrokeWidth} size={iconSize} />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  className="rounded-full hover:cursor-pointer bg-gray-100 p-3 w-fit"
                >
                  <SettingsIcon strokeWidth={iconStrokeWidth} size={iconSize} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export { FluidMenu };
