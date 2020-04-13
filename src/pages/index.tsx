import React from 'react'
import { Button, Flex, Text, Box } from 'rebass'
import Layout from '../layouts'
// import { Link } from 'gatsby'

// import Link from '../components/elements/Link'

const IndexPage = () => {
  return (
    <Layout>
      <Flex py={1}>
        <Box width={1 / 2} mr="auto" p={4} color="primary">
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="far fa-code" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              coding
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="fal fa-skiing" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              enjoying fresh pow
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="fal fa-truck-container" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              deploying a new project
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="fal fa-bullseye-arrow" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              setting new goals
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="fal fa-gamepad-alt" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              playing Halo
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="fal fa-hat-cowboy" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              collecting hats
            </Text>
          </Flex>
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize={5}>
              <i className="far fa-plane-departure" />
            </Text>
            <Text fontSize={4} lineHeight="1em" fontFamily="nav">
              going somehwere now
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex py={1}>
        <Box width={1 / 2} mr="auto" p={4} color="background" bg="primary">
          The world wide web
        </Box>
        <Box width={1 / 2} ml="auto" p={4}>
          <Button variant="primary" mr={2}>
            Beep
          </Button>
          <Button variant="outline">Boop</Button>
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
