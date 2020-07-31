import React from 'react'
/** @jsx jsx */
import { jsx, Flex, SxStyleProp } from 'theme-ui'
import { Link } from 'gatsby'

interface PaginationProps {
  max: number
  currentPage: number
  displayRange?: number
  onSelect?: Function
  getPath: (page: number) => string
}

const baseLinkStyle: SxStyleProp = {
  marginX: 3,
  color: 'text',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}

const Pagination: React.FC<PaginationProps> = ({ max = 10, currentPage, displayRange = 1, getPath }) => {
  if (max === 1) return null
  let start = 1
  if (currentPage - displayRange > 0) {
    start = currentPage - displayRange
  }
  let end = currentPage + displayRange
  if (end > max) end = max
  const options = []
  for (let x = start; x <= end; x += 1) {
    const isActive = x === currentPage
    options.push(
      <Link
        key={x}
        to={getPath(x)}
        sx={{
          color: isActive ? 'mutedText' : 'text',
          paddingX: 3,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {x}
      </Link>
    )
  }

  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginY: 2
      }}
    >
      {currentPage !== 1 && (
        <Link sx={baseLinkStyle} to={getPath(currentPage - 1)}>
          Previous Page
        </Link>
      )}
      <Flex>{options}</Flex>
      {currentPage !== max && (
        <Link sx={baseLinkStyle} to={getPath(currentPage + 1)}>
          Next Page
        </Link>
      )}
    </Flex>
  )
}

export default Pagination
