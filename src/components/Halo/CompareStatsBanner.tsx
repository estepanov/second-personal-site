/** @jsx jsx */
import { jsx, Flex, Button, Box } from "theme-ui";
import Container from '../../components/Layout/Container'
import ChiefCroppedIcon from "./elements/ChiefCroppedIcon";

interface CompareStatsBannerProps {
  toggle(): void;
  expanded: boolean;
}

const CompareStatsBanner: React.FC<CompareStatsBannerProps> = ({ children, toggle, expanded }) => {
  return (
    <Box sx={{
      backgroundColor: 'background',
      marginBottom: 2,
    }}>
      <Container>
        <Flex sx={{
          paddingX: 2,
          paddingY: 2,
          flexDirection: 'column'
        }}>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              justifyContent: ['space-between']
            }}>
            <Flex
              sx={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Flex sx={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 4,
                fontFamily: 'nav',
                fontWeight: 'display',
                color: 'secondary',
                paddingRight: 3,
                height: [70, 50],
              }}>
                <ChiefCroppedIcon />
              </Flex>
              <Flex sx={{

                flexDirection: 'column',
                marginBottom: [2, 0]
              }}>
                <Flex sx={{
                  fontSize: 3,
                  fontFamily: 'heading',
                  fontWeight: 'display',
                  lineHeight: '1.5em',
                  // color: 'listHeader',
                  color: 'secondary',

                }}>
                  Who has better stats?
                </Flex>
                <Flex sx={{
                  // color: 'listContent'
                }}>
                  Enter another gamer tag to compare our Halo stats
                </Flex>
              </Flex>
            </Flex>

            <Flex>
              {
                expanded ?
                  <Button
                    variant="outline"
                    onClick={toggle}
                    sx={{
                      width: ['100%', 150],
                      borderColor: 'text',
                      color: 'text'
                    }}
                  >
                    Close
                  </Button>
                  :
                  <Button
                    onClick={toggle}
                    sx={{
                      width: ['100%', 150],
                      backgroundColor: 'secondary'
                    }}
                  >
                    Lets Go
                  </Button>
              }
            </Flex>
          </Flex>
        </Flex>
        <Box sx={{ display: expanded ? 'block' : 'none' }}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default CompareStatsBanner;
