import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useCallback, useEffect, useState } from 'react';

import languageData from '../../../data/languages.json';
import {
  MultiLingualItemData,
  MultiLingualTable,
  MultiLingualTableCSVEntryRow,
} from '../../../types';
import { fetchMultiLingualData } from '../../../utils/multiLingual';
import TableCell from '../../presentational/TableCell/TableCell';
import styles from './styles';


const MultiLingualTableContainer = () => {
  const [initialized, setInitialized] = useState(false);
  const [multiLingualData, setMultiLingualData] = useState(undefined as MultiLingualItemData | undefined);
  const [table, setTable] = useState(undefined as MultiLingualTable | undefined);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedSourceIndex, setSelectedSourceIndex] = useState(0);
  const [translationMap, setTranslationMap] = useState(
    {} as Record<string, MultiLingualTableCSVEntryRow>,
  );
  const selectItemAndSource = useCallback(
    (itemIndex: number, sourceIndex: number, data?: MultiLingualItemData) => {
      setSelectedItemIndex(itemIndex);
      setSelectedSourceIndex(sourceIndex);
      const _table = (multiLingualData || data)![itemIndex]?.tables[sourceIndex] || {};
      const _translations: Record<string, MultiLingualTableCSVEntryRow> = {};
      _table.data.forEach((row) => {
        _translations[row.languageCode] = row;
      });
      setTranslationMap(_translations);
      setTable(_table);
    },
    [multiLingualData],
  );
  useEffect(() => {
    if (initialized  || multiLingualData) {
      return;
    }
    setInitialized(true);
    fetchMultiLingualData().then((data) => {
      setMultiLingualData(data);
      const langCodes = new Set();
      languageData.forEach(({ code }) => langCodes.add(code));
      selectItemAndSource(0, 0, data);
    });
  },  [initialized, multiLingualData, selectItemAndSource]);
  const buildColor = (code: string) => translationMap[code] ? table?.color : undefined;
  const buildTooltip = (code: string, name: string) => {
    const label = translationMap[code]?.label;
    return label ? `${label} (${name})` : (
     `No translation found in this source for ${table?.primaryLabel} in language '${name}'`
    );
  };
  return multiLingualData ? (
    <Box sx={styles.root}>
      <Grid
        container
        sx={styles.header}
      >
        <Grid sx={styles.headerItem}>
          <FormControl>
            <Select
              label="Food Item"
              onChange={({ target: { value }}) => selectItemAndSource(value as number, 0)}
              value={selectedItemIndex}
              variant="standard"
            >
              {multiLingualData.map(({ primaryLabel }, index) => (
                <MenuItem
                  key={`${index}-${primaryLabel}`}
                  value={index}
                >
                  <Typography variant="h4">
                    {primaryLabel}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Food Item
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid sx={styles.headerItem}>
          <FormControl>
            <Select
              label="Data Source"
              onChange={({ target: { value }}) => (
                selectItemAndSource(selectedItemIndex, value as number)
              )}
              value={selectedSourceIndex}
              variant="standard"
            >
              {multiLingualData[selectedItemIndex]?.tables.map(({ source }, index) => (
                <MenuItem
                  key={`${index}-${source}`}
                  value={index}
                >
                  <Typography variant="h6">
                    {source}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Data Source
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={styles.tableInner}>
        {languageData.map(({ code, name }) => (
          <TableCell
            color={buildColor(code)}
            key={`${selectedItemIndex}-${selectedSourceIndex}-${code}-${name}`}
            label={code}
            tooltip={buildTooltip(code, name)}
          />
        ))}
      </Box>
    </Box>
  ) : (
    <Box sx={styles.loaderContainer}>
      <CircularProgress
        color="secondary"
        size={100}
      />
    </Box>
  );
};

export default MultiLingualTableContainer;
