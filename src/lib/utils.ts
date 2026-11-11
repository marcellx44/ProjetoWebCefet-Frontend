import { createCn } from "cn/config"

// Ensina ao cn que os tamanhos de texto do Figma (index.css) são font-size, não cor
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "h1",
            "h3",
            "h4",
            "body-lg",
            "body-md",
            "body-sm",
            "label-md",
            "label-sm",
            "overline",
            "mono-data",
            "mono-md",
            "mono-sm",
            "mono-label",
          ],
        },
      ],
    },
  },
})
