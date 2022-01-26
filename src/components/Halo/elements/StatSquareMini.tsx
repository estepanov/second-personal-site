/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

interface StatSquareProps {
  title: string;
  value: string | number | null;
}

export const StatSquareMini = ({ title, value }: StatSquareProps) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: ["100%", 170],
        paddingY: 2,
        paddingX: 4,
        marginBottom: [2],
      }}
    >
      <Flex
        sx={{
          fontFamily: "nav",
          fontWeight: "display",
          fontSize: [5, 5],
          color: "white",
          lineHeight: 1,
          textShadow: "0px 0px 5px black",
          marginBottom: 1,
        }}
      >
        {value}
      </Flex>
      <Flex
        sx={{
          // fontFamily: 'heading',
          // fontWeight: 'display',
          color: "white",
          textTransform: "uppercase",
          fontSize: [3, 3],
          letterSpacing: 1,
          textAlign: "center",
          lineHeight: 1,
          height: 45,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textShadow: "1px 1px 3px black",
        }}
      >
        {title}
      </Flex>
    </Flex>
  );
};
