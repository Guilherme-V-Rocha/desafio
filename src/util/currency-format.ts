export function currencyFormat(value: number) {
  if (value % 1 !== 0) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
}
