"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BurgerIcon, CloseIcon, PhoneIcon, ClockIcon } from "./icons";
import { clientAccessUrl, contactInfo, navLinks } from "./links";
import { CircleCta } from "./shared";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="st-header">
      <div className="st-header__inner">
        <Link href="/" className="st-header__logo" aria-label="Saentech inicio">
          <Image
            src="/sites/saentech/img/logotipo-saentech.png"
            alt="Saentech"
            width={653}
            height={195}
            priority
          />
        </Link>
        <button
          type="button"
          className="st-burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <BurgerIcon />
        </button>
      </div>

      <div className={`st-offcanvas${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="st-offcanvas__overlay" onClick={() => setOpen(false)} />
        <aside className="st-offcanvas__panel" role="dialog" aria-label="Menú">
          <button
            type="button"
            className="st-offcanvas__close"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <CloseIcon />
          </button>
          <nav>
            <ul className="st-offcanvas__nav">
              {navLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} tabIndex={open ? 0 : -1}>
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="st-offcanvas__cta">
            <CircleCta href={clientAccessUrl} label="Acceso clientes" small external />
          </div>
          <hr className="st-offcanvas__rule" />
          <ul className="st-offcanvas__info">
            <li>
              <PhoneIcon /> <a href="tel:922616266">{contactInfo.phone}</a>
            </li>
            <li>
              <ClockIcon /> {contactInfo.hours}
            </li>
            <li>
              <ClockIcon /> {contactInfo.summerHours}
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
