import { Button, Flex, Input, Spinner } from "theme-ui"
import { InputGroup } from "../elements/Form/InputGroup";

interface CompareFormProps {
  onSubmit(): void;
  register(key: string, opts: any): any;
  errors?: any;
  hideSubmit?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const CompareForm = ({ onSubmit, hideSubmit, disabled, loading, errors, register }: CompareFormProps) => {

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
        sx={{ flex: 1, marginBottom: [2, 0] }}
      >
        <InputGroup
          autoFocus
          mb={0}
          disabled={!!loading}
          label="Xbox Gamer Tag"
          name="tag"
          register={register('tag', { required: true })}
          Component={Input}
          errors={errors}
        />
      </Flex>
      {!hideSubmit && <Flex
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginLeft: [0, 2]
        }}>
        <Button type="submit" disabled={disabled} sx={{
          backgroundColor: 'secondary',
          display: 'flex',
          alignItems: 'center',
          minWidth: 150,
          justifyContent: 'center',
          borderColor: 'secondary',
          borderWidth: '1px',
          borderStyle: 'solid',
          '&:disabled': {
            background: 'background',
            color: 'secondary'
          }
        }}>
          {loading ? 'Loading...' : 'Compare'}
          {loading && <Spinner size={20} sx={{ marginLeft: 2, color: 'secondary' }} />}
        </Button>
      </Flex>}
    </Flex>
  )
}

export default CompareForm;
