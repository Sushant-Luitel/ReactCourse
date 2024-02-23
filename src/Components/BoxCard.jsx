import React from "react";
import "./BoxCard.css";
import { useState } from "react";
export function BoxCard({ style, children }) {
  const [show, setShow] = useState(true);
  return (
    <section className={show ? "" : "hidden"}>
      <div className={`container ${style}`}>{children}</div>
      <button onClick={() => setShow(!show)} className=" reset-button">
        Hide
      </button>
    </section>
  );
}
