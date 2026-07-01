const otpStore = new Map<string, { code: string; expiresAt: number }>();

export function generateOTP(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

export function saveOTP(phone: string, code: string) {
  otpStore.set(phone, {
    code,
    expiresAt: Date.now() + 2 * 60 * 1000, // ۲ دقیقه
  });
}

export function verifyOTP(phone: string, code: string): boolean {
  const entry = otpStore.get(phone);
  if (!entry) return false;
  if (Date.now() > entry.expiresAt) {
    otpStore.delete(phone);
    return false;
  }
  if (entry.code !== code) return false;
  otpStore.delete(phone);
  return true;
}