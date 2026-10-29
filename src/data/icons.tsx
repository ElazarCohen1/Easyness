import {
  Scale,
  Landmark,
  Calculator,
  TrendingUp,
  Handshake,
  Gem,
  Banknote,
  ShieldAlert,
  Home as HomeIcon,
  type LucideIcon,
} from "lucide-react";
import { DomainId } from "./domains";


export const ICONS: Record<DomainId, LucideIcon> = {
  juridique: Scale,
  fiscal: Landmark,
  comptable: Calculator,
  financier: TrendingUp,
  commercial: Handshake,
  patrimonial: Gem,
  bancaire: Banknote,
  immobilier: HomeIcon,
  Fraud: ShieldAlert,
};