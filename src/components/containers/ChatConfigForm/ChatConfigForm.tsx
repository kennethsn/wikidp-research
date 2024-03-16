import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { When } from 'react-if';

import { Images } from '../../../constants';
import { ChatWikiDPPropertyInstruction } from '../../../types';
import styles from './styles';


type TextFieldChangeHandler = TextFieldProps['onChange'];
interface ChatConfigFormProps {
  apiKey: string;
  onApiKeyChange: (passage: string) => void;
  onPropertyInstructionsChange: (instructions: Array<ChatWikiDPPropertyInstruction>) => void;
  onWikibaseIdChange: (wikibaseId: string) => void;
  propertyInstructions: Array<ChatWikiDPPropertyInstruction>;
  wikibaseId?: string;
}

const propInstructionHelpText =
  'custom instruction for the LLM to analyze the values of these property statements';
const wikibaseIdHelpText =
  '(optional) Use this if the AI is unable to find the main subject\'s wikibase item';

export default function ChatConfigForm({
  apiKey,
  onApiKeyChange,
  onPropertyInstructionsChange,
  onWikibaseIdChange,
  propertyInstructions,
  wikibaseId,
}: ChatConfigFormProps) {

  const handleApiKeyFieldChange: TextFieldChangeHandler = (e) => onApiKeyChange(e.target.value);
  const handlePropertyInstructionChange = (
    (index: number, field: 'prompt' | 'property_id'): TextFieldChangeHandler => (e) => {
      const newProps = [...propertyInstructions];
      newProps[index][field] = e.target.value;
      onPropertyInstructionsChange(newProps);
    }
  );
  const handleAddInstructionButtonClick = () => onPropertyInstructionsChange([
    ...propertyInstructions,
    { prompt: '', property_id: '' },
  ]);
  const handleRemoveInstructionButtonClick = (index: number) => () => (
    onPropertyInstructionsChange(propertyInstructions.toSpliced(index, 1))
  );
  const handleWikibaseIdFieldChange: TextFieldChangeHandler = (e) => (
    onWikibaseIdChange(e.target.value)
  );

  return (
    <Grid
      container
      spacing={3}
      sx={styles.root}
    >
      <Grid md={7}>
        <TextField
          autoComplete="off"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={styles.inputAdornment}
              >
                <img
                  alt="OpenAI"
                  src={Images.openAI}
                />
              </InputAdornment>
            ),
          }}
          label="OpenAI API Key"
          onChange={handleApiKeyFieldChange}
          placeholder="sk-1234"
          required
          value={apiKey}
        />
      </Grid>
      <Grid md={5}>
        <TextField
          helperText={wikibaseIdHelpText}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={styles.inputAdornment}
              >
                <img
                  alt="Wikidata"
                  src={Images.wikidata}
                />
              </InputAdornment>
            ),
          }}
          label="Wikidata Id"
          onChange={handleWikibaseIdFieldChange}
          placeholder="Q1234"
          value={wikibaseId}
        />
      </Grid>
      <Grid xs={12}>
        <When condition={!!propertyInstructions.length}>
          <Typography
            color="text.secondary"
            variant="h6"
          >
            Property Instructions
          </Typography>
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            Configure and customize LLM instructions for each property.
          </Typography>
          <Box sx={styles.propInstructionsContainer}>
            {propertyInstructions?.map(({ prompt, property_id }, i) => (
              <Grid
                container
                key={i}
                spacing={5}
              >
                <Grid md={3}>
                  <TextField
                    fullWidth
                    helperText="Wikidata property"
                    label="Property Id"
                    onChange={handlePropertyInstructionChange(i, 'property_id')}
                    placeholder="P123"
                    value={property_id}
                  />
                </Grid>
                <Grid md={9}>
                  <TextField
                    fullWidth
                    helperText={propInstructionHelpText}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleRemoveInstructionButtonClick(i)}
                          >
                            <RemoveCircleOutlineSharpIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    label="Instruction"
                    multiline
                    onChange={handlePropertyInstructionChange(i, 'prompt')}
                    placeholder="Use this property to determine..."
                    value={prompt}
                    variant="filled"
                  />
                </Grid>
              </Grid>
            ))}
          </Box>
        </When>
        <Button
          onClick={handleAddInstructionButtonClick}
          size="small"
        >
          + Add Property Instruction
        </Button>
      </Grid>
    </Grid>
  );
}
