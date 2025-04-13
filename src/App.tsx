import { Hero } from "./components/custom/hero";
import { FluidMenu } from "./components/custom/fluid-menu";
import { motion } from "motion/react";

// TODO: add suspense for lazy loading
function App() {
  return (
    <div className="max-w-7xl px-4 py-24 space-y-16 mx-auto antialiased">
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FluidMenu />
      </motion.div>
    </div>
  );
}

export default App;
