import { chairs } from "@/data/chairs";
import Chair from "./Chair";
import type { MotionValue } from "framer-motion";

function Chairs({
  locale,
  scrollProgress,
}: {
  locale: string;
  scrollProgress?: MotionValue<number>;
}) {
  return (
    <div>
      {chairs.map((chair) => (
        <Chair
          key={chair.id}
          chair={chair}
          locale={locale}
          fadeOnScroll={chair.id === "Table"}
          scrollProgress={scrollProgress}
        />
      ))}
    </div>
  );
}

export default Chairs;