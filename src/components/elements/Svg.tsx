import styled from '@emotion/styled'
import { space, layout, color, size } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Svg = styled('svg', {
  shouldForwardProp
})(space, layout, color, size)

export default Svg
