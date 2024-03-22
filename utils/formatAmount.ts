const PLN_FORMATTER = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })

// Use currency variable when more than one currency will be supported
export const formatAmount = (amount: number, _currency = 'PLN'): string => {
  return PLN_FORMATTER.format(amount).replace(',', '.')
}
