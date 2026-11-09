// Contact number for the business (Mexico, +52). Digits only, no "+".
export const WHATSAPP_NUMBER = "526141731455";
export const WHATSAPP_DISPLAY = "614 173 1455";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vi su página de Regando la Historia y me interesa colaborar con el canal.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const text = message.trim();
  return text
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;
}
