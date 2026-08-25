import React from "react";
import { getRecommendedRPGs, RPGS } from "../data/Rpgsdata";
import { RPGCard } from "./RPGcard";

type RPGType = typeof RPGS[keyof typeof RPGS];

interface RecommendationsProps {
  currentRpgId: string;
  onSelectRpg?: (rpg: RPGType) => void;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ currentRpgId, onSelectRpg }) => {
  const recommendations = getRecommendedRPGs(currentRpgId);

  if (recommendations.length === 0) return null;

  return (
    <div style={{ marginTop: "24px" }}>
      <h3 style={{ marginBottom: "12px", color: "#fff" }}>Semelhantes em Categoria</h3>
      <div style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "8px" }}>
        {recommendations.map((rpg) => (
          <div key={rpg.id} onClick={() => onSelectRpg?.(rpg)} style={{ cursor: "pointer" }}>
            <RPGCard rpg={rpg} onOpen={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
};