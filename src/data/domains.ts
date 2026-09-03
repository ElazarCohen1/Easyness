export const domainIds = [
  "juridique",
  "fiscal",
  "comptable",
  "financier",
  "commercial",
  "patrimonial",
  "bancaire",
  "immobilier",
] as const;

export type DomainId = (typeof domainIds)[number];