import HompageText from "./HomePageText.png";
import HomePage2 from "./sportHome.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const fontStyles = {
    fontFamily: "Monospace, sans-serif",
    fontWeight: "bold",
  };

  return (
    <section
      id="home"
      className="gap-16 bg-purple-100 py-10 md:h-full md:pb-10"
    >
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <motion.div
          className="z-10 mt-32 md:basis-3/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* HEADINGS */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
              <img alt="home-page-text" src={HompageText} />
            </div>
          </div>

          <p className="mt-8 text-sm" style={fontStyles}>
            Sportify is the application that connects you with people
            passionate about sports, providing you with a platform to find
            partners or join teams that share the same sports interests and
            passions. Experience the joy and beauty of being part of a team or
            finding workout partners to achieve your fitness goals. With
            Sportify, you will discover communities united by a passion for
            sports and be able to create lasting connections, contributing to
            an active and energetic lifestyle.
          </p>

          {/* ACTIONS */}
          <div className="mt-8 flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Link
                to="/login"
                className="rounded-md bg-purple-600 px-10 py-2 hover:bg-purple-800 hover:text-white"
              >
                Join Now
              </Link>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-sm font-bold text-purple-500 underline hover:text-red-300"
            >
              <Link to="/about">Learn More</Link>
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img alt="home-page-2" src={HomePage2} />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
