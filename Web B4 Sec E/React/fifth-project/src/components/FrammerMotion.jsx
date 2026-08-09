import React from "react";
import { motion } from "motion/react";

const FrammerMotion = () => {
  const links = [
    { title: "Google", url: "https://google.com" },
    { title: "GitHub", url: "https://github.com" },
    { title: "OpenAI", url: "https://openai.com" },
    { title: "Google", url: "https://google.com" },
    { title: "GitHub", url: "https://github.com" },
    { title: "OpenAI", url: "https://openai.com" },
    { title: "Google", url: "https://google.com" },
    { title: "GitHub", url: "https://github.com" },
    { title: "OpenAI", url: "https://openai.com" },
    { title: "Google", url: "https://google.com" },
    { title: "GitHub", url: "https://github.com" },
    { title: "OpenAI", url: "https://openai.com" },
  ];
  return (
    <>
      {/* <div className="grid grid-cols-2 gap-10 mx-10">
        <motion.div
          initial={{ translateX: "-500px", translateY: "-200px", opacity: 0 }}
          whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="border p-10 rounded-2xl h-[300px] bg-amber-200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          explicabo hic veniam, esse vitae voluptates. Non ratione commodi
          laboriosam sit placeat quod voluptas, nam reprehenderit illum tempore
          excepturi omnis quisquam necessitatibus. Quibusdam, tempora fuga, quis
          accusantium vitae dolores, at quo ipsa ut veniam voluptatum excepturi
          obcaecati tenetur cum! Quam, laborum?
        </motion.div>
        <motion.div
          initial={{ translateY: "-200px", translateX: "500px", opacity: 0 }}
          whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="border p-10 rounded-2xl h-[300px] bg-red-400"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          explicabo hic veniam, esse vitae voluptates. Non ratione commodi
          laboriosam sit placeat quod voluptas, nam reprehenderit illum tempore
          excepturi omnis quisquam necessitatibus. Quibusdam, tempora fuga, quis
          accusantium vitae dolores, at quo ipsa ut veniam voluptatum excepturi
          obcaecati tenetur cum! Quam, laborum?
        </motion.div>
        <motion.div
          initial={{ translateX: "-500px", translateY: "200px", opacity: 0 }}
          whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="border p-10 rounded-2xl h-[300px] bg-red-400"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          explicabo hic veniam, esse vitae voluptates. Non ratione commodi
          laboriosam sit placeat quod voluptas, nam reprehenderit illum tempore
          excepturi omnis quisquam necessitatibus. Quibusdam, tempora fuga, quis
          accusantium vitae dolores, at quo ipsa ut veniam voluptatum excepturi
          obcaecati tenetur cum! Quam, laborum?
        </motion.div>
        <motion.div
          initial={{ translateX: "500px", translateY: "200px", opacity: 0 }}
          whileInView={{ translateX: "0px", translateY: "0px", opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="border p-10 rounded-2xl h-[300px] bg-amber-200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          explicabo hic veniam, esse vitae voluptates. Non ratione commodi
          laboriosam sit placeat quod voluptas, nam reprehenderit illum tempore
          excepturi omnis quisquam necessitatibus. Quibusdam, tempora fuga, quis
          accusantium vitae dolores, at quo ipsa ut veniam voluptatum excepturi
          obcaecati tenetur cum! Quam, laborum?
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.5 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border w-[200px] h-[200px] bg-amber-100"
      >
        asdf
      </motion.div> */}

      <ul className="border bg-amber-50 p-5 flex flex-col gap-5">
        {links.map((link, index) => (
          <motion.li
            initial={{ opacity: 0, translateX: "-1000px" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className=" text-center border p-5 rounded-lg bg-amber-100"
          >
            Link 1
          </motion.li>
        ))}
        {/* <motion.li
          initial={{ opacity: 0, translateX: "-1000px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className=" text-center border p-5 rounded-lg bg-amber-100"
        >
          Link 2
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateX: "-1000px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className=" text-center border p-5 rounded-lg bg-amber-100"
        >
          Link 3
        </motion.li>
        <motion.li
          initial={{ opacity: 0, translateX: "-1000px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className=" text-center border p-5 rounded-lg bg-amber-100"
        >
          Link 4
        </motion.li> */}
      </ul>
    </>
  );
};

export default FrammerMotion;
