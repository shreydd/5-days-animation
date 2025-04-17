import { LucideCoffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-sm flex flex-row w-fit mx-auto mt-16 items-center gap-1 text-balance text-neutral-500">
      Built with <LucideCoffee size={16} color="green" /> by{" "}
      <a
        target="_blank"
        href="https://shreyasr.com/?ref=5-days-prj"
        rel="noreferrer"
        className="text-green-800 underline"
      >
        Shreyas{" "}
      </a>
    </footer>
  );
};

export { Footer };
