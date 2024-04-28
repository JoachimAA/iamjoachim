import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import Title from "../components/typography/H3";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { graphql } from "gatsby";
import { Generation } from "../../gatsby-node";
import { format } from "date-fns";
import Body from "../components/typography/Body";
ChartJS.register(ArcElement, Tooltip, Legend);

export const query = graphql`
  query EnergyGenerationQuery {
    allEnergyGeneration {
      nodes {
        to
        from
        generationmix {
          perc
          fuel
        }
      }
    }
  }
`;

interface EnergyProps {
  data: {
    allEnergyGeneration: {
      nodes: Generation[];
    };
  };
}

export default function Energy({ data }: EnergyProps) {
  console.log("energy data -> ", data.allEnergyGeneration.nodes[0]);
  const energyData = data.allEnergyGeneration.nodes[0];

  console.log(energyData.generationmix.map((mix) => mix.fuel));
  console.log(energyData.generationmix.map((mix) => mix.perc));

  const doughnutData = {
    labels: energyData.generationmix.map((mix) => mix.fuel),
    datasets: [
      {
        label: "My First Dataset",
        data: energyData.generationmix.map((mix) => mix.perc),
        backgroundColor: [
          "rgb(0, 153, 76)",
          "rgb(0, 0, 0)",
          "rgb(255, 0, 0)",
          "rgb(153, 153, 255)",
          "rgb(153, 0, 153)",
          "rgb(0, 0, 153)",
          "rgb(54, 162, 235)",
          "rgb(255, 255, 0)",
          "rgb(192, 192, 192)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const formatDate = (date: string) => {
    return format(new Date(date), "H:m d/M/y");
  };

  return (
    <div>
      <Body
        message={`Stats as of ${formatDate(energyData.from)} - ${formatDate(
          energyData.to
        )}`}
      />
      <Doughnut data={doughnutData} />
    </div>
  );
}
