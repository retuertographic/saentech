import Image from "next/image";
import { brandRows } from "./data";

export function BrandMarquee() {
  return (
    <div className="st-marquee">
      {brandRows.map((row, r) => (
        <div
          key={r}
          className={`st-marquee__row${r % 2 ? " st-marquee__row--reverse" : ""}`}
          style={{ ["--count" as string]: row.length }}
        >
          <div className="st-marquee__track">
            {[...row, ...row].map((logo, i) => (
              <div className="st-marquee__item" key={`${logo.src}-${i}`} aria-hidden={i >= row.length}>
                <Image src={logo.src} alt={i < row.length ? logo.alt : ""} width={113} height={45} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
