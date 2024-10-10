import { useEffect, useState } from "react";
import { calendar, bonus, introDescription } from "../../data/data";

import styles from "./Accordion.module.css";

export const Accordion = () => {
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  async function fetchCalendar(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setCalendarData(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCalendar(calendar);
  }, [calendar]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    const temp = [...multiple];
    const findIndexOfCurrentId = temp.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      temp.push(getCurrentId);
    } else {
      temp.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(temp);
  }

  if (errorMsg !== null) {
    return (
      <div className={styles["error-msg-container"]}>
        <p>SOMETHING WENT WRONG &#40; {errorMsg} &#41;</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles["loading-msg-container"]}>
        <img src="/assets/svg/loading.svg" />
      </div>
    );
  }

  return (
    <>
      <div className={styles["accordion-container"]}>
        <p className={styles["intro-description"]}>{introDescription}</p>
        <button
          className={styles["selection-btn"]}
          onClick={() => {
            setEnableMultipleSelection(!enableMultipleSelection);
            setSelected(null);
            setMultiple([]);
          }}
        >
          {enableMultipleSelection ? "Enable" : "Disable"} MultiSelection
        </button>
        <h1 className={styles["gradient"]}>
          Entire Universe
          <br /> in 1 Year
        </h1>
        <div className={styles["accordion"]}>
          {calendarData.map((item) => (
            <div className={styles["accordion-item"]} key={item.id}>
              <div className={styles["month"]}>
                <p className={`${styles["month-name"]} ${styles["gradient"]}`}>
                  {item.month}
                </p>
                <img
                  src="/assets/svg/caret-down.svg"
                  height={32}
                  onClick={
                    enableMultipleSelection
                      ? () => handleSingleSelection(item.id)
                      : () => handleMultipleSelection(item.id)
                  }
                />
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className={styles["events"]}>
                  {item.events.map((event, index) => (
                    <div key={index} className={styles["event"]}>
                      <h1 className={styles["day"]}>{event.day}</h1>
                      {event.event.map((e, index) => (
                        <div key={index} className={styles["sub-event"]}>
                          <img
                            src={e.img}
                            alt={index}
                            className={styles["sub-event-img"]}
                          />
                          {e.timeStamp && (
                            <div className={styles["time-stamp-container"]}>
                              {e.timeStamp.map((time, index) => (
                                <span className={styles["seconds"]} key={index}>
                                  {time}
                                </span>
                              ))}
                            </div>
                          )}
                          <p className={styles["sub-event-discription"]}>
                            <span> {e.description}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
