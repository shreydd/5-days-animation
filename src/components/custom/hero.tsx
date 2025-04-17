import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">5-Day Animation</span>
          <span className="inline bg-gradient-to-r from-green-500 via-green-400 to-lime-500 bg-clip-text text-transparent">
            Challenge
          </span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6"
      >
        <p className="text-pretty text-gray-700  text-lg text-center">
          An attempt at the UI animation challenges listed <br /> by{" "}
          <a
            href="https://peerlist.io/challenges/ui-animation-challenge"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Peerlist x Aceternity
          </a>{" "}
        </p>
      </motion.div>
    </section>
  );
};

export { Hero };
