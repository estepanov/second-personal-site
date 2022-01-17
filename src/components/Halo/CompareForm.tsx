import { Button, Flex, Input, Spinner } from "theme-ui"
import { InputGroup } from "../elements/Form/InputGroup";

interface CompareFormProps {
  onSubmit(): void;
  register(key: string, opts: any): any;
  errors?: any;
  disabled?: boolean;
  loading?: boolean;
}

const CompareForm = ({ onSubmit, disabled, loading, errors, register }: CompareFormProps) => {
  return (
    <Flex sx={{
      flexDirection: ['column', 'row'],
      flexWrap: ['wrap', 'nowrap'],
      padding: 2,
      position: 'relative'
    }}
      as="form"
      onSubmit={onSubmit}>

      <Flex
        sx={{ flex: 1, marginBottom: [1, 0] }}
      >
        <InputGroup
          mb={0}
          disabled={disabled}
          label="Xbox Gamer Tag"
          name="tag1"
          register={register('tag1', { required: true })}
          Component={Input}
          errors={errors}
        />
      </Flex>
      <Flex
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginBottom: '1px',
          marginLeft: [0, 2]
        }}>
        <Button type="submit" disabled={disabled} sx={{
          backgroundColor: 'secondary',
          display: 'flex',
          alignItems: 'center',
          minWidth: 150,
          justifyContent: 'center',
          '&:disabled': {
            background: 'background',
            color: 'secondary'
          }
        }}>
          {loading ? 'Loading...' : 'Compare'}
          {loading && <Spinner size={20} sx={{ marginLeft: 2, color: 'secondary' }} />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default CompareForm;
