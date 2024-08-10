import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { graphql, HeadFC } from "gatsby";
import { Generation } from "../../gatsby-node";
import { format } from "date-fns";
import Body from "../components/typography/Body";
import H3 from "../components/typography/H3";
import styled from "styled-components";
import { firstLetterUppercase } from "../utils/energy/energy-utils";

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
  const energyData = data.allEnergyGeneration.nodes[0];

  const doughnutData = {
    labels: energyData.generationmix.map((mix) =>
      firstLetterUppercase(mix.fuel)
    ),
    datasets: [
      {
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

  const formatDay = (date: string) => {
    return format(new Date(date), "d/M/y");
  };

  const formatHoursMins = (date: string) => {
    return format(new Date(date), "h:mmaaa");
  };

  return (
    <>
      {energyData ? (
        <EnergyContainer>
          <H3 message="UK National Grid Generation Mix" />
          <Body message="This chart show the current mix of fuel types being used to generate electricity for the National Grid. The data comes from the Carbon Intensity API." />
          <Body
            message={`Current stats as of ${formatDay(
              energyData.from
            )} ${formatHoursMins(energyData.from)} - ${formatHoursMins(
              energyData.to
            )}`}
          />
          <Doughnut data={doughnutData} />
        </EnergyContainer>
      ) : (
        <Body message="No data to show" />
      )}
    </>
  );
}

export const Head: HeadFC = () => <title>Energy - Joachim Arthey</title>

const EnergyContainer = styled("div")({
  display: "grid",
  gap: "24px",
});
