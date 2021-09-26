import { useState } from "react";

let acumularTime = 0;

const useTimer = () => {
  const [isMarch, setIsMarch] = useState(false);
  const [control, setControl] = useState(false);

  let pantalla;
  let pctIndicator;
  let timeActual;
  let acumularTime2;
  let acumularResume;
  let timeActu2;
  let timeInicial;
  let ss;
  let mm;

  const start = () => {
    if (!isMarch) {
      timeActu2 = new Date();
      timeActu2 = timeActu2.getTime();
      acumularResume = timeActu2 - acumularTime;
      timeInicial = new Date();
      timeInicial.setTime(acumularResume);
      setControl(setInterval(count, 10));
      setIsMarch(true);
    }
  };

  const count = () => {
    pctIndicator = document.querySelector("#pct-ind");
    pantalla = document.getElementById("pct");
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();

    pctIndicator.style = `
      stroke-dashoffset: ${(1 - (mm * 4) / 100) * (2 * (22 / 7) * 40)};
    `;

    if (ss < 10) {
      ss = "0" + ss;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    pantalla.innerHTML = mm + ":" + ss;
  };

  const stop = () => {
    pantalla = document.getElementById("pct");
    if (isMarch) {
      clearInterval(control);
      setIsMarch(false);
    }
  };

  const reset = () => {
    pctIndicator = document.querySelector("#pct-ind");
    pantalla = document.getElementById("pct");
    if (isMarch) {
      clearInterval(control);
      setIsMarch(false);
    }
    acumularTime = 0;
    pantalla.innerHTML = "00:00";
    pctIndicator.style = `
      stroke-dashoffset: ${2 * (22 / 7) * 40};
    `;
  };

  return [start, stop, reset];
};

export default useTimer;
