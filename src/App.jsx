import React, { useEffect, useRef, useState } from "react";
import Prev from "../public/prev.svg";

import Slider from "./components/Slider/Slider";

const arr = [
  {
    id: 1,
    title: "Наука",
    data__start: 1975,
    data__next: 1985,
    information: [
      {
        data: 1975,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1980,
        description:
          "14 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1985,
        description:
          "15 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1985,
        description:
          "16 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
    ],
  },
  {
    id: 2,
    title: "Наука",
    data__start: 1985,
    data__next: 1995,
    information: [
      {
        data: 1985,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1990,
        description:
          "14 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1995,
        description:
          "15 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1995,
        description:
          "16 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
    ],
  },
  {
    id: 3,
    title: "Наука",
    data__start: 1995,
    data__next: 2005,
    information: [
      {
        data: 1995,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 1998,
        description:
          "14 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2000,
        description:
          "15 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2005,
        description:
          "16 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
    ],
  },
  {
    id: 4,
    title: "Наука",
    data__start: 2005,
    data__next: 2010,
    information: [
      {
        data: 2006,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2007,
        description:
          "14 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2007,
        description:
          "15 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2010,
        description:
          "16 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
    ],
  },
  {
    id: 5,
    title: "Наука",
    data__start: 2010,
    data__next: 2015,
    information: [
      {
        data: 2011,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2012,
        description:
          "14 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2013,
        description:
          "15 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2015,
        description:
          "16 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
    ],
  },
  {
    id: 6,
    title: "Наука",
    data__start: 2015,
    data__next: 2022,
    information: [
      {
        data: 2016,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2017,
        description:
          "14 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2018,
        description:
          "15 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
      {
        data: 2019,
        description:
          "16 сентября — частное солнечное затмение, видимое в Южной Африке ичасти Антарктиды",
      },
    ],
  },
];
function App(props) {
  const [disabelNext, setDisabelNext] = useState(false);
  const [disabelBtnPrev, setDisabelBtnPrev] = useState(false);
  const [count, setCount] = useState(1);

  const handelNexCount = () => {
    if (count >= 5) {
      setDisabelNext(!disabelNext);
    }
    setCount(count + 1);
    setDisabelBtnPrev(true);
    circleRange(count + 1);
  };
  const handelPrevCount = () => {
    if (count <= 2) {
      setDisabelBtnPrev(!disabelBtnPrev);
    }
    setCount(count - 1);
    setDisabelNext(false);
    circleRange(count - 1);
  };
  const handelActiveDot = (e) => {
    let num = Number(e.target.textContent);
    circleRange(num);
    if (num) {
      setCount(num);
      setDisabelNext(false);
    }
  };
  const circleRange = (num) => {
    let rotate = document.getElementById("circle");
    if (num === 1) {
      rotate.classList = "";
      rotate.classList.toggle("history__circle__one");
    } else if (num === 2) {
      rotate.classList = "";
      rotate.classList.toggle("history__circle__two");
    } else if (num === 3) {
      rotate.classList = "";
      rotate.classList.toggle("history__circle__three");
    } else if (num === 4) {
      rotate.classList = "";
      rotate.classList.toggle("history__circle__four");
    } else if (num === 5) {
      rotate.classList = "";
      rotate.classList.toggle("history__circle__five");
    } else if (num === 6) {
      rotate.classList = "";
      rotate.classList.toggle("history__circle__six");
    }
  };

  const outNum = (start) => {
    const [dataTimeStart, setDataTimeStart] = useState(start);
    const timerIdRef = useRef(0);
    let newStart = start;
    if (newStart > dataTimeStart) {
      startHandlerNext();
    }
    if (dataTimeStart === newStart) {
      stopHandler();
      return <div>{dataTimeStart}</div>;
    }
    if (newStart < dataTimeStart) {
      startHandlerPrev();
    }
    function startHandlerNext() {
      if (timerIdRef.current) {
        return;
      }
      timerIdRef.current = setInterval(
        () => setDataTimeStart((c) => c + 1),
        30
      );
    }
    function startHandlerPrev() {
      if (timerIdRef.current) {
        return;
      }
      timerIdRef.current = setInterval(
        () => setDataTimeStart((c) => c - 1),
        30
      );
    }
    function stopHandler() {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    }

    return (
      <>
        {dataTimeStart}
      </>
    );
  };
 

  return (
    <div className="history">
      <div className="history__container">
        <div className="history__header">
          <div className="history__line"></div>
          <h1 className="history__title">Исторические даты </h1>
        </div>
        <div className="history__main">
          <div className="history__circle">
            <div className="history__circle__x"></div>
            <div className="history__circle__y"></div>
            <div id="circle" className="history__circle__one">
              <div onClick={handelActiveDot} className="ranger__one__container">
                <div className="range__one__dot"></div>
                <div
                  className={count !== 1 ? "range__one" : "range__one__active"}
                >
                  <div className="range__one__item">1</div>
                  <p className="range__title">Наука</p>
                </div>
              </div>

              <div onClick={handelActiveDot} className="ranger__two__container">
                <div className="range__two__dot"></div>
                <div
                  className={count !== 2 ? "range__two" : "range__two__active"}
                >
                  <div className="range__two__item">2</div>
                  <p className="range__title">Наука</p>
                </div>
              </div>
              <div
                onClick={handelActiveDot}
                className="ranger__three__container"
              >
                <div className="range__three__dot"></div>
                <div
                  className={
                    count !== 3 ? "range__three" : "range__three__active"
                  }
                >
                  <div className="range__three__item">3</div>
                  <p className="range__title">Наука</p>
                </div>
              </div>
              <div
                onClick={handelActiveDot}
                className="ranger__four__container"
              >
                <div className="range__four__dot"></div>
                <div
                  className={
                    count !== 4 ? "range__four" : "range__four__active"
                  }
                >
                  <div className="range__four__item">4</div>
                  <p className="range__title">Наука</p>
                </div>
              </div>

              <div onClick={handelActiveDot} className="range__five__container">
                <div className="range__five__dot"></div>
                <div
                  className={
                    count !== 5 ? "range__five" : "range__five__active"
                  }
                >
                  <div className="range__five__item">5</div>
                  <p className="range__title">Наука</p>
                </div>
              </div>
              <div onClick={handelActiveDot} className="range__six__container">
                <div className="range__six__dot"></div>
                <div
                  className={count !== 6 ? "range__six" : "range__six__active"}
                >
                  <div className="range__item">6</div>
                  <p className="range__title">Наука</p>
                </div>
              </div>
            </div>
          </div>

          {arr.map((item, key) => {
            return (
              <div key={item.id }  className="history__data">
                {count === item.id ? (
                  <>
                    <div
                      id="out"
                      value={props.value}
                      className="history__data__start"
                    >
                      {outNum(item.data__start)}
                    </div>
                    <div className="history__data__end">
                      {outNum(item.data__next)}
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="history__btn">
          <div className="history__btn__count">0{count}/06</div>
          <div className="history__btn__container">
            <button
              onClick={handelPrevCount}
              disabled={!disabelBtnPrev}
              className="history__btn__prev"
            >
              <Prev />
            </button>
            <button
              onClick={handelNexCount}
              disabled={disabelNext}
              className="history__btn__next"
            >
              <Prev />
            </button>
          </div>
        </div>
        <div className="history__slider">
          <Slider count = {count}  arr ={arr} />
        </div>
      </div>
    </div>
  );
}

export default App;
