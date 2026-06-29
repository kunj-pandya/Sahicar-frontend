export function formatPrice(price: number): string {
  if (price >= 10000000) {
    const crValue = price / 10000000;
    return `₹${crValue.toFixed(2)} Cr`;
  }
  const lakhValue = price / 100000;
  return `₹${lakhValue.toFixed(2)} L`;
}

export function formatKm(km: number): string {
  return `${new Intl.NumberFormat("en-IN").format(km)} km`;
}

export function formatEMI(emi: number): string {
  return `₹${emi.toLocaleString("en-IN")}/mo`;
}

export function getDiscount(originalPrice: number, discountedPrice: number): number {
  if (originalPrice <= 0) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}
