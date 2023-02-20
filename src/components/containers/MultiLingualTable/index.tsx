import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useEffect, useState } from 'react';

import languageData from '../../../data/languages.json';
import {
  MultiLingualItemData,
  MultiLingualTable,
  MultiLingualTableCSVEntryRow,
} from '../../../types';
import { fetchMultiLingualData } from '../../../utils/multiLingual';
import TableCell from '../../presentational/TableCell';
import useStyles from './useStyles';

const MultiLingualTableContainer = () => {
  const classes = useStyles();
  const [initialized, setInitialized] = useState(false);
  const [multiLingualData, setMultiLingualData] = useState(undefined as MultiLingualItemData | undefined);
  const [table, setTable] = useState(undefined as MultiLingualTable | undefined);
  const [selectedFoodItemIndex, setSelectedFoodItemIndex] = useState(0);
  const [selectedSourceIndex, setSelectedSourceIndex] = useState(0);
  const [translationMap, setTranslationMap] = useState(
    {} as Record<string, MultiLingualTableCSVEntryRow>,
  );
  const selectItemAndSource = useCallback(
    (itemIndex: number, sourceIndex: number, data?: MultiLingualItemData) => {
      setSelectedFoodItemIndex(itemIndex);
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
    <div className={classes.root}>
      <Grid
        alignItems="flex-end"
        className={classes.header}
        direction="row"
        justifyContent="center"
        container
      >
        <Grid
          className={classes.headerItem}
          item
        >
          <FormControl>
            <Select
              label="Food Item"
              onChange={({ target: { value }}) => selectItemAndSource(value as number, 0)}
              value={selectedFoodItemIndex}
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
        <Grid
          className={classes.headerItem}
          item
        >
          <FormControl>
            <Select
              label="Data Source"
              onChange={({ target: { value }}) => (
                selectItemAndSource(selectedFoodItemIndex, value as number)
              )}
              value={selectedSourceIndex}
            >
              {multiLingualData[selectedFoodItemIndex]?.tables.map(({ source }, index) => (
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
      <div className={classes.tableInner}>
        {languageData.map(({ code, name }) => (
          <TableCell
            color={buildColor(code)}
            key={`${selectedFoodItemIndex}-${selectedSourceIndex}-${code}-${name}`}
            label={code}
            tooltip={buildTooltip(code, name)}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={classes.loaderContainer}>
      <CircularProgress
        color="secondary"
        size={100}
      />
    </div>
  );
};

export default MultiLingualTableContainer;
