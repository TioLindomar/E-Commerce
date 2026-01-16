export const sanitizeString = (text: string): string => {
  if (!text) return ""; // Proteção contra null/undefined
  return text.trim();
};

// 2. Transforma em minúsculo e limpa espaços (Ótimo para e-mails)
export const sanitizeEmail = (email: string): string => {
  if (!email) return "";
  return email.trim().toLowerCase();
};