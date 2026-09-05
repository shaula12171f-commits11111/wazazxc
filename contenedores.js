// contenedores.js
// Junta las chicas dentro de "galerias". Por ahora solo esta Ichika.

import { ichika } from './galerias/ichika/ichika_contenedor.js';

export const categorias = {
  galerias: {
    titulo: "Galerías",
    subgalerias: [ichika]
  }
};
