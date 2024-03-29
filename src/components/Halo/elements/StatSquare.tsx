/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

interface StatSquareProps {
  title: string;
  value: string | number;
}

export const StatSquare = ({ title, value }: StatSquareProps) => {
  return <Flex sx={{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: ['auto', '300px'],
    paddingY: 2,
    paddingX: 4,
    alignSelf: 'flex-end'
  }}>
    <Flex
      sx={{
        fontFamily: 'nav',
        fontWeight: 'display',
        fontSize: 7,
        color: 'black',
        lineHeight: 1,
        textShadow: '0px 0px 12px white',
      }}
    >
      {value}
    </Flex>
    <Flex
      sx={{
        fontFamily: 'heading',
        fontWeight: 'display',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 4,
        letterSpacing: 1,
        textAlign: 'center',
        lineHeight: 1,
        textShadow: '0px 0px 8px black'
      }}
    >
      {title}
    </Flex>
  </Flex>
}
