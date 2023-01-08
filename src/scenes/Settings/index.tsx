import React, { useEffect, useState } from "react";
import DefaultMargin from "../../defaultMargin";
import AccountSettings from "./AccountSettings";
import Orders from "./Orders";
import { motion } from "framer-motion";

// const one = {
//   hidden: { pathLength: 0 },
//   visible: {
//     pathLength: 1,
//     transition: { duration: 1, ease: "easeInOut" },
//   },
// };
// const two = {
//   hidden: { pathLength: 0 },
//   visible: {
//     pathLength: 1,
//     transition: { duration: 0.25, ease: "easeInOut", delay: 1 },
//   },
// };
// const three = {
//   hidden: { pathLength: 0 },
//   visible: {
//     pathLength: 1,
//     transition: { duration: 0.25, ease: "easeInOut", delay: 1.2 },
//   },
// };

// <motion.svg
// height="100"
// width="100"
// initial="hidden"
// animate="visible"
// >
// <motion.circle
//   variants={one}
//   cx="50"
//   cy="50"
//   r="40"
//   style={{ stroke: "green", strokeWidth: "12px" }}
//   fill="none"
// />
// <motion.line
//   variants={two}
//   x1="30"
//   y1="50"
//   x2="55"
//   y2="75"
//   style={{ stroke: "#299F00", strokeWidth: "12px" }}
//   fill="none"
// />
// <motion.line
//   variants={three}
//   x1="47"
//   y1="75"
//   x2="95"
//   y2="30"
//   style={{ stroke: "#299F00", strokeWidth: "12px" }}
//   fill="none"
// />
// </motion.svg>

type pagesType = "orders" | "accountSettings";

enum page {
  orders = "orders",
  accountSettings = "accountSettings",
}

const index: React.FC = () => {
  const [active, setActive] = useState<pagesType>(page.orders);

  return (
    <DefaultMargin>
      <div className="flex gap-3 mt-10">
        <button
          className={`${
            active === page.orders
              ? "text-black bg-white "
              : "text-white bg-black hover:opacity-80"
          }  transition-all px-4 py-2 rounded-full border-2 border-black`}
          onClick={() => setActive(page.orders)}
        >
          Zamówienia
        </button>
        <button
          className={`${
            active === page.accountSettings
              ? "text-black bg-white"
              : "text-white bg-black hover:opacity-80"
          }  transition-all px-4 py-2 rounded-full border-2 border-black`}
          onClick={() => setActive(page.accountSettings)}
        >
          Ustawienia Konta
        </button>
      </div>
      
    

      {active === page.orders && <Orders />}
      {active === page.accountSettings && <AccountSettings />}
    </DefaultMargin>
  );
};

export default index;
