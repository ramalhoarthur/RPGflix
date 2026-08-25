import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RPGCard } from "./RPGCard";

interface RowProps {
  title: string;
  items: any[];
  onOpen: (rpg: any) => void;
}

export function Row({ title, items, onOpen }: RowProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 640, behavior: "smooth" });
  };

  return (
    <div className="gr-row">
      <div className="gr-row-title">
        <span className="bar" />
        {title}
      </div>
      <div className="gr-track-wrap">
        <button className="gr-arrow left" onClick={() => scroll(-1)} aria-label="Rolar para a esquerda">
          <ChevronLeft size={26} />
        </button>
        <div className="gr-track" ref={trackRef}>
          {items.map((rpg, i) => (
            <RPGCard key={rpg.id + i} rpg={rpg} onOpen={onOpen} />
          ))}
        </div>
        <button className="gr-arrow right" onClick={() => scroll(1)} aria-label="Rolar para a direita">
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}