import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Grid, ImagesIcon, ListTodoIcon } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react"; // Import LayoutGroup
import { useState } from "react";

const tabs = [
  {
    label: "List view",
    icon: <ListTodoIcon size={16} />,
  },
  {
    label: "Card view",
    icon: <Grid size={16} />,
  },
  {
    label: "Pack view",
    icon: <ImagesIcon size={16} />,
  },
];

const bounties = [
  {
    name: "Monkey D Luffy",
    price: "3,000,000,000",
    imgSrc:
      "https://static.wikia.nocookie.net/onepiece/images/1/17/Monkey_D._Luffy%27s_Seventh_Wanted_Poster.png/",
  },
  {
    name: "Roronoa Zoro",
    price: "1,360,000,000",
    imgSrc:
      "https://i.pinimg.com/736x/92/7f/42/927f42b0468107578a3df0d8cb4a33c8.jpg",
  },
  {
    name: "Sanji",
    price: "1,032,000,000",
    imgSrc:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/one-piece-bounty-wanted-vinsmoke-sanji-design-template-80e0cc6caab8e08cfc842321058a594b_screen.jpg?ts=1702722618",
  },
];

function SharedLayoutTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Card className="shadow-lg col-span-full" id="day5">
      <CardHeader>
        <CardTitle>Day-5: Shared Layout Tabs</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[600px] w-fit mx-auto flex items-start transition-all duration-300">
        <motion.div className="space-y-2 w-96">
          <h2 className="">Bounty</h2>

          <div className="flex flex-col w-full">
            <nav className="border-b border-[#eeeeee] pb-4">
              <ul className="list-none p-0 m-0 font-medium text-sm flex gap-1 w-full">
                {tabs.map((item) => (
                  <motion.li
                    key={item.label}
                    initial={false}
                    className={cn(
                      "rounded-full w-full relative cursor-pointer flex flex-nowrap justify-start gap-2 items-center flex-1 min-w-0 select-none list-none m-0 z-10 font-medium text-sm px-4 py-2 transition-all duration-300",
                      selectedTab === item && "text-white"
                    )}
                    onClick={() => setSelectedTab(item)}
                  >
                    <motion.span className="flex flex-nowrap">{item.icon}</motion.span>
                    <motion.span className="flex flex-nowrap text-nowrap">{item.label}</motion.span>
                    {item === selectedTab ? (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 size-full z-[-99] rounded-full px-4 py-2 bg-blue-600/80"
                        layoutId="underline"
                        id="underline"
                      />
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Wrap with LayoutGroup here */}
            <LayoutGroup>
              <main className="mt-4 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    className={cn(
                      selectedTab.label === "List view" &&
                        "flex flex-col gap-2 w-full transition-all duration-300",
                      selectedTab.label === "Card view" &&
                        "grid grid-cols-2 w-full gap-2 transition-all duration-300",
                      selectedTab.label === "Pack view" && "flex w-full transition-all duration-300"
                    )}
                    layout
                    transition={{ duration: 0.5, layout: { type: "easeInOut" } }}
                  >
                    {bounties.map((item, index) => (
                      <motion.div
                        key={item.name}
                        layoutId={`card-${item.name}`}
                        className={cn(
                          "border p-2 rounded bg-white shadow transition-all duration-500",
                          selectedTab.label === "List view" && "flex items-center gap-2",
                          selectedTab.label === "Card view" && "flex flex-col justify-start",
                          selectedTab.label === "Pack view" &&
                            "absolute top-0 left-1/2 -translate-x-1/2"
                        )}
                        style={
                          selectedTab.label === "Pack view"
                            ? {
                                rotate: `${index * 5 - (bounties.length - 1) * 2.5}deg`,
                                zIndex: bounties.length - index,
                                scale: 1 - index * 0.05,
                                animationDuration: "0.5s",
                                transitionDuration: "0.5s",
                              }
                            : {}
                        }
                      >
                        <motion.div>
                          <motion.img
                            layoutId={item.imgSrc}
                            src={item.imgSrc}
                            width={
                              selectedTab.label === "List view"
                                ? "48"
                                : selectedTab.label === "Card view"
                                ? "100%"
                                : "148"
                            }
                            height={selectedTab.label === "List view" ? "48" : "148"}
                            alt="wanted posters"
                          />
                        </motion.div>
                        <motion.div className="space-2">
                          <motion.p layoutId={`name-${item.name}`} className="font-medium">
                            {item.name}
                          </motion.p>
                          <motion.p className="text-base text-gray-800">
                            <motion.span
                              layoutId={`price-img-${item.name}`}
                              className="text-neutral-400 text-sm font-medium flex gap-1 items-center"
                            >
                              <motion.img
                                layoutId={`berries-${item.name}`}
                                alt="berries"
                                src="https://static.wikia.nocookie.net/onepiece/images/d/de/Beli.png"
                                decoding="async"
                                loading="lazy"
                                width="10"
                                height="10"
                                className=""
                                data-image-name="Beli.png"
                                data-image-key="Beli.png"
                                data-relevant="0"
                                data-src="https://static.wikia.nocookie.net/onepiece/images/d/de/Beli.png/revision/latest?cb=20141206091723"
                              />{" "}
                              <motion.span layoutId={`price-${item.name}`}>{item.price}</motion.span>
                            </motion.span>{" "}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </main>
            </LayoutGroup>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

export { SharedLayoutTabs };
