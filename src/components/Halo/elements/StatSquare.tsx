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
  }}>
    <Flex
      sx={{
        fontFamily: 'nav',
        fontWeight: 'display',
        fontSize: 7,
        color: 'gray700'
      }}
    >
      {value}
    </Flex>
    <Flex
      sx={{
        fontFamily: 'heading',
        fontWeight: 'display',
        color: 'gray500',
        fontSize: 4
      }}
    >
      {title}
    </Flex>
  </Flex>
}
