import { motion } from "framer-motion";
import TimeLine from "./timeline";

const Description = () => {
  return (
    <div className="mt-8 ml-4 flex flex-col md:flex-row gap-3 md:gap-10">
      <TimeLine />
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.25,
          }}
          className="text-5xl font-bold"
        >
          Maroon Moshaver Arjan
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.5,
          }}
          className="text-4xl font-bold"
        >
          React Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.75,
          }}
          className="w-full mt-2 text-xl"
        >
          The website on which I collaborated with this team was a
          cryptocurrency trading platform, and I held the responsibility for the
          application logic. This encompassed managing all routing, API calls,
          authorization processes, as well as real-time functionalities such as
          websockets or Pusher events, among other features.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
          className="flex gap-2 items-center mt-1"
        >
          <span className="w-[3px] h-[3px] rounded-full bg-primary"></span>
          <p className="text-sm">
            Routing - API - WebSocket - State Management(Redux & Context) -
            Performance Optimization
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
