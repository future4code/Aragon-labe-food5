export const adjustPrice = (price) => {

  const newPrice = price.toLocaleString('pt-BR', {
    
      style: 'currency',
      currency: 'BRL',
    })
    return newPrice
  }