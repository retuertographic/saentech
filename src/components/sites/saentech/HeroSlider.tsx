"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "./data";
import { ChevronIcon } from "./icons";

const INTERVAL = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(next, INTERVAL);
    return () => window.clearTimeout(id);
  }, [index, paused, next]);

  return (
    <div className="st-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="st-slider__frame">
        {heroSlides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(max-width: 767px) 92vw, 502px"
            priority={i === 0}
            className={`st-slider__img${i === index ? " is-active" : ""}`}
          />
        ))}
        <div className="st-slider__dots" role="tablist" aria-label="Diapositivas">
          {heroSlides.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Diapositiva ${i + 1}`}
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      <button type="button" className="st-slider__next" aria-label="Siguiente" onClick={next}>
        <ChevronIcon />
      </button>
    </div>
  );
}
