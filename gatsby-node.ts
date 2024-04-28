import axios from "axios";
import { GatsbyNode } from "gatsby";

export type Generation = {
  from: string;
  to: string;
  generationmix: GenerationMix[];
};

type GenerationMix = {
  fuel: string;
  perc: number;
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const response = await axios.get(
    "https://api.carbonintensity.org.uk/generation"
  );

  const energyGenerationNodeData: Generation = response.data.data;

  const energyGenerationNode = {
    ...energyGenerationNodeData,
    id: createNodeId(`energy_generation_id`),
    internal: {
      type: "EnergyGeneration",
      contentDigest: createContentDigest(energyGenerationNodeData),
    },
  };

  createNode(energyGenerationNode);
};
