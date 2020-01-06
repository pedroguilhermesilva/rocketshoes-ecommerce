export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency', // beacuse is a currency (moeda)
  currency: 'BRL', // type of this currency (moeda)
});
