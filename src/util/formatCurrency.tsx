export default function formatCurrency(value: string | undefined){
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(Number(value));
  };