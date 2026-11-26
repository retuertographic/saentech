"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { INITIAL_PRODUCTS, products } from "./data";
import { ChevronIcon } from "./icons";

export function Catalog() {
  const [count, setCount] = useState(INITIAL_PRODUCTS);
  const trackRef = useRef<HTMLDivElement>(null);
  const shown = products.slice(0, count);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="st-catalog">
      <button type="button" className="st-catalog__arrow st-catalog__arrow--prev" aria-label="Anterior" onClick={() => scrollBy(-1)}>
        <ChevronIcon />
      </button>
      <div className="st-catalog__grid" ref={trackRef}>
        {shown.map((p) => (
          <article className="st-card" key={p.code + p.name}>
            <span className="st-card__code">Código: {p.code}</span>
            <div className="st-card__img">
              <Image src={p.img} alt={p.name} width={260} height={260} sizes="260px" />
            </div>
            <h3 className="st-card__title" title={p.name}>
              {p.name}
            </h3>
          </article>
        ))}
      </div>
      <button type="button" className="st-catalog__arrow st-catalog__arrow--next" aria-label="Siguiente" onClick={() => scrollBy(1)}>
        <ChevronIcon />
      </button>
      {count < products.length && (
        <button type="button" className="st-loadmore" onClick={() => setCount(products.length)}>
          Cargar más
        </button>
      )}
    </div>
  );
}
