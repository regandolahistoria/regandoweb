import { describe, expect, it } from "vitest";

import { whatsappUrl } from "@/lib/whatsapp";

describe("WhatsApp contact link", () => {
  it("opens a chat with 614 173 1455 using Mexico's +52 code", () => {
    expect(whatsappUrl("").startsWith("https://wa.me/526141731455")).toBe(true);
  });

  it("pre-fills the visitor's message", () => {
    expect(whatsappUrl("Hola, quiero cotizar")).toBe(
      "https://wa.me/526141731455?text=Hola%2C%20quiero%20cotizar",
    );
  });
});
