import { error } from "@sveltejs/kit";
import series from "../../../constants/series.js";

export function load(dados) {
  const seriesId = dados.params.id;
  for (let serie of series) {
    if (serie.id == seriesId) {
      return { serie };
    }
  }
  console.log(seriesId);

  error(404, "Série não encontrada");
}
