import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { sectionVariants } from "../../../animations";

function Hero() {
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  let greetingText = "Good Evening";
  let GreetingIcon = IoMoonOutline;
  let timeClass = styles.evening; 

  if (hour < 12) {
    greetingText = "Good Morning";
    GreetingIcon = IoSunnyOutline;
    timeClass = styles.morning;
  } else if (hour < 18) {
    greetingText = "Good Afternoon";
    GreetingIcon = IoSunnyOutline; 
    timeClass = styles.afternoon;
  }

  return (
    <motion.section className={styles.hero}
      variants={sectionVariants}>
      <div>
        <h1 className={styles.title}>
          {greetingText}, Adeniregun{" "}
          <GreetingIcon className={`${styles.greetingIcon} ${timeClass}`} />
        </h1>
        <p>
          Welcome back. Ready to discover your next favorite song?
        </p>
      </div>
    </motion.section>
  );
}

export default Hero;
