// Outbound destinations from https://www.saentech.com/ (only the homepage is cloned)
export const SITE = "https://www.saentech.com";

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Conócenos", href: `${SITE}/conocenos/` },
  { label: "Saentech PRO", href: `${SITE}/saentech-pro/` },
  { label: "Catálogo", href: `${SITE}/catalogo/` },
  { label: "Contacto", href: `${SITE}/contacto/` },
  { label: "BAJO PEDIDO", href: "https://bajopedido.saentech.com/login" },
];

// The source site points both Facebook and X icons to the Facebook page.
export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/saentech", icon: "facebook" },
  { label: "X-twitter", href: "https://www.facebook.com/saentech", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/saen.tech", icon: "instagram" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/saentech-canarias-s.l./", icon: "linkedin" },
] as const;

export const clientAccessUrl = "https://pedidos.saentech.com/ogonlineapp/login/";

export const contactInfo = {
  phone: "922 616 266",
  hours: "L-J: 08:00 - 17:00 | V: 08:00 - 14:00",
  summerHours: "Julio y Agosto L-J: 08:00 - 16:00 | V: 08:00 - 14:00",
  address: "C/Tijarafe, 23 Polígono Industrial Los Majuelos La Laguna Tenerife",
};
