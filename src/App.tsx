import { Hero } from "./components/custom/hero";
import { FluidMenu } from "./components/custom/fluid-menu";
import { motion } from "motion/react";
import { DynamicStatusBtn } from "./components/custom/dynamic-status";
import { AnimatedCheckboxes } from "./components/custom/animated-checkboxes";
import { AnimatedTogglesContainer } from "./components/custom/animated-toggles";
import { SharedLayoutTabs } from "./components/custom/shared-layout-tabs";
import { Footer } from "./components/custom/footer";

const compsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.4,
      // staggerChildren: 0.2,
      // delayChildren: 0.2,
    },
  },
};

// TODO: add suspense for lazy loading
function App() {
  return (
    <div className="max-w-7xl px-4 py-24 mx-auto antialiased">
      <Hero />
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={compsVariants}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <FluidMenu />
        <DynamicStatusBtn />
        <AnimatedCheckboxes />
        <AnimatedTogglesContainer />
        <SharedLayoutTabs />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
