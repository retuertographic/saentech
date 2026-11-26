import Image from "next/image";
import Link from "next/link";
import { BrandMarquee } from "./BrandMarquee";
import { Catalog } from "./Catalog";
import { Header } from "./Header";
import { HeroSlider } from "./HeroSlider";
import { ClockIcon, PhoneIcon, PinIcon } from "./icons";
import { SITE, contactInfo } from "./links";
import { CircleCta, SocialIcons } from "./shared";
import "./saentech.css";

const benefits = [
  { icon: "icono-rayo.svg", label: "Envíos 24/48h" },
  { icon: "iconosMesa-de-trabajo-5-copia-3.svg", label: "Pedidos online" },
  { icon: "iconosMesa-de-trabajo-5-copia-5.svg", label: "Chat de soporte" },
  { icon: "iconosMesa-de-trabajo-5-copia-2.svg", label: "Atención Profesional al cliente" },
  { icon: "iconosMesa-de-trabajo-5-copia-6.svg", label: "Asesoramiento técnico y ventas" },
  { icon: "icono-servicio-postventa-efectivoMesa-de-trabajo-5-copia-4.svg", label: "Servicio postventa efectivo" },
];

const steps = [
  "Facilítanos tus datos a través del botón o por medio de nuestro chat. Uno de nuestros comerciales se pondrá en contacto contigo para asistirte en todo el proceso de compra.",
  "Rellena nuestro formulario con tus datos para procesar tu compra. Es rápido y fácil, y te aseguramos que tu información estará segura.",
  "¡Listo! Una vez confirmado, podrás acceder a nuestra área de clientes para gestionar tu compra y disfrutar de todos nuestros servicios.",
];

export function SaentechHome() {
  return (
    <div className="st-root">
      <div className="st-top">
        <Header />
        <section className="st-hero">
          <HeroSlider />
          <div className="st-hero__copy">
            <SocialIcons className="st-social--hero" />
            <p className="st-hero__kicker">Sector tecnológico</p>
            <h1 className="st-hero__title">Saentech</h1>
            <h2 className="st-hero__subtitle">mayorista y distribuidor informático</h2>
            <CircleCta href={`${SITE}/catalogo/`} label="Catálogo" variant="navy" />
          </div>
        </section>
      </div>

      <section className="st-benefits">
        <h2 className="st-outline-title">Nuestros beneficios</h2>
        <ul className="st-benefits__grid">
          {benefits.map((b) => (
            <li key={b.label}>
              <div className="st-benefits__icon">
                <Image src={`/sites/saentech/icons/${b.icon}`} alt="" width={190} height={172} />
              </div>
              <p>{b.label}</p>
            </li>
          ))}
        </ul>
        <div className="st-center">
          <CircleCta href={`${SITE}/saentech-pro/`} label="Servicios" />
        </div>
      </section>

      <section className="st-islands">
        <div className="st-islands__copy">
          <h2 className="st-islands__title">Distribución a todas las islas</h2>
          <p className="st-islands__lead">Profesionales en tecnología y servicios técnicos</p>
          <div className="st-stat">
            <h3>500 m2+</h3>
            <p>Miles de productos</p>
          </div>
          <div className="st-stat">
            <h3>Stock propio</h3>
            <p>Disponibles para recogida en 24h</p>
          </div>
        </div>
        <div className="st-islands__map">
          <Image src="/sites/saentech/img/mapa-canarias-lineas.png" alt="Mapa de las Islas Canarias" width={624} height={411} />
        </div>
      </section>

      <section className="st-brands">
        <h2 className="st-outline-title">marcas líderes</h2>
        <h3 className="st-subtitle">que trabajan y confían en nosotros</h3>
        <BrandMarquee />
      </section>

      <section className="st-process">
        <div className="st-process__head">
          <span className="st-process__line" />
          <h2>Nuestro proceso de compra paso a paso</h2>
        </div>
        <ol className="st-process__steps">
          {steps.map((text, i) => (
            <li key={i} style={{ ["--i" as string]: i }}>
              <span className="st-process__num">0{i + 1}.</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="st-process__cta">
          <CircleCta href={`${SITE}/contacto/#formulario`} label="Darse de alta" />
        </div>
      </section>

      <section className="st-catalog-section">
        <h2 className="st-outline-title">Nuestro catálogo</h2>
        <h3 className="st-subtitle">Disponemos de productos de última generación</h3>
        <Catalog />
      </section>

      <footer className="st-footer">
        <div className="st-footer__brand">
          <Link href="/" aria-label="Saentech inicio">
            <Image src="/sites/saentech/img/logotipo-vertical.png" alt="Saentech" width={388} height={369} />
          </Link>
          <ul>
            <li>mayorista en tecnología</li>
            <li>servicio técnico oficial</li>
          </ul>
        </div>
        <div className="st-footer__info">
          <SocialIcons className="st-social--footer" />
          <ul className="st-footer__contact">
            <li>
              <PhoneIcon /> <a href="tel:922616266">{contactInfo.phone}</a>
            </li>
            <li>
              <ClockIcon /> {contactInfo.hours}
            </li>
            <li>
              <ClockIcon /> {contactInfo.summerHours}
            </li>
            <li>
              <PinIcon /> {contactInfo.address}
            </li>
          </ul>
          <ul className="st-footer__legal">
            <li>
              <a href={`${SITE}/politica-privacidad/`}>Política de privacidad</a>
            </li>
            <li>
              <a href={`${SITE}/politica-de-cookies/`}>Política de cookies</a>
            </li>
          </ul>
          <a className="st-footer__powered" href="https://www.sysprovider.es/" target="_blank" rel="noopener noreferrer">
            Powered by Sysprovider
          </a>
        </div>
      </footer>
    </div>
  );
}
