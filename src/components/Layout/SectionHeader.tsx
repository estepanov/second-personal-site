/** @jsxRuntime classic */ // real-dumb-fix https://github.com/system-ui/theme-ui/issues/1160#issuecomment-786822435
/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div
      sx={{
        paddingY: 3
      }}
    >
      <Heading as="h1" sx={{ margin: 0 }}>
        {title}
      </Heading>
      {subtitle && <Text
        sx={{
          fontSize: 1,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {subtitle}
      </Text>}
    </div>
  )
}

export default SectionHeader
