
export const domainIds = [
  "juridique",
  "fiscal",
  "comptable",
  "financier",
  "commercial",
  "patrimonial",
  "bancaire",
  "immobilier",
  "Fraud"
] as const;

export type DomainId = (typeof domainIds)[number];



