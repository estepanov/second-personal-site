/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

interface StatSquareProps {
  title: string;
  value: string | number;
}

export const StatSquareMini = ({ title, value }: StatSquareProps) => {
  return <Flex sx={{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: ['100%', 170],
    paddingY: 2,
    paddingX: 4,
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: [2],

  }}>
    <Flex
      sx={{
        fontFamily: 'nav',
        fontWeight: 'display',
        fontSize: [5, 5],
        color: 'white',
        lineHeight: 1,
        textShadow: '0px 0px 5px black',
        marginBottom: 1,
      }}
    >
      {value}
    </Flex>
    <Flex
      sx={{
        // fontFamily: 'heading',
        // fontWeight: 'display',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: [3, 3],
        // opacity: 0.7,
        letterSpacing: 1,
        textAlign: 'center',
        lineHeight: 1,
        height: 45,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textShadow: '1px 1px 3px black'
      }}
    >
      {title}
    </Flex>
  </Flex>
}
