export interface MenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: string; // Font Awesome class, e.g. "fa-solid fa-house"
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "MCP Servers",
        href: "#",
        description: "All about our MCP Servers",
        icon: "fa-solid fa-chart-pie",
      },
      {
        name: "Agents",
        href: "#",
        description: "Meet our expert Agents",
        icon: "fa-solid fa-bolt",
      },
      {
        name: "Bots",
        href: "#",
        description: "Discover our advanced Bots",
        icon: "fa-solid fa-shield-halved",
      }
    ],
  },
  {
    name: "Pricing",
    href: "/pricing"
  },
  {
    name: "About Us",
    href: "/about"
  },
  {
    name: "Contact Us",
    href: "/contact"
  },
  {
    name: "Blog",
    href: "/blog"
  }
];

export const footerMenuData: MenuItem[] = [
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "MCP Servers",
        href: "#",
        description: "All about our MCP Servers",
        icon: "fa-solid fa-chart-pie",
      },
      {
        name: "Agents",
        href: "#",
        description: "Meet our expert Agents",
        icon: "fa-solid fa-bolt",
      },
      {
        name: "Bots",
        href: "#",
        description: "Discover our advanced Bots",
        icon: "fa-solid fa-shield-halved",
      }
    ],
  },
  {
    name: "Policies",
    href: "#",
    children: [
      {
        name: "Cookies Policy",
        href: "/policies/cookies",
        description: "Read our Cookies Policy",
        icon: "fa-solid fa-cookie-bite",
      },
      {
        name: "Privacy Policy",
        href: "/policies/privacy",
        description: "Read our Privacy Policy",
        icon: "fa-solid fa-user-shield",
      },
      {
        name: "Data Policy",
        href: "/policies/data",
        description: "Read our Data Policy",
        icon: "fa-solid fa-database",
      },
      {
        name: "Terms and Condition",
        href: "/policies/terms",
        description: "Read our Terms and Condition",
        icon: "fa-solid fa-file-contract",
      }
    ],
  },
  {
    name: "Pricing",
    href: "/pricing"
  },
  {
    name: "About Us",
    href: "/about"
  },
  {
    name: "Contact Us",
    href: "/contact"
  }
];