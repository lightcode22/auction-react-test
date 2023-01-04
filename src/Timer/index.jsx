import { useEffect, useState } from "react";
import useTimeDifference from "../hooks/useTimeDifference";
import {
  formatTime,
  getAdjustedTime,
  getNextCountdownEnd,
  getRemainingTime,
} from "../utils.js";
import HourglassIcon from "../HourglassIcon";
import styles from "./styles.module.css";

export default function Timer() {
  const [serverTimeDifference, setServerTimeDifference] = useState(0);

  const adjustedTime = getAdjustedTime(serverTimeDifference);

  const [countdownEnd, setCountdownEnd] = useState(() =>
    getNextCountdownEnd(adjustedTime, true)
  );

  const requestedDifference = useTimeDifference(countdownEnd);

  const [remainingTime, setRemainingTime] = useState(() =>
    getRemainingTime(countdownEnd, adjustedTime)
  );

  const displayTime = formatTime(remainingTime);

  useEffect(() => {
    const timeRemained = getRemainingTime(countdownEnd, adjustedTime);

    if (serverTimeDifference !== requestedDifference) {
      setServerTimeDifference(requestedDifference);
    }

    const countdown = setTimeout(() => {
      setRemainingTime(timeRemained);
    }, 1000);

    if (timeRemained.getTime() < 1000) {
      setCountdownEnd(getNextCountdownEnd(adjustedTime));
    }

    return () => clearTimeout(countdown);
  }, [remainingTime]);

  return (
    <div className={styles.timer}>
      <div className={styles.timeWrapper}>{displayTime}</div>
      <HourglassIcon color="#b45c5a" />
    </div>
  );
}
