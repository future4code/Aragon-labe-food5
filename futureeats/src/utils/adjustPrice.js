export const adjustPrice = price => {
  price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}