import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="0.75rem"
      paddingX="0.25rem"
      borderRadius="0.25rem"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
