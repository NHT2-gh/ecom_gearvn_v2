export function formatNumber(number: number): string {
  return Intl.NumberFormat().format(number);
}

export function formatBytes(bytes: number, decimals?: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export function formatPrice(price: number): string {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}
