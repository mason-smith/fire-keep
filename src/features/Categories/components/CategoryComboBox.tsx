import React, { useState, useEffect, useCallback } from 'react';

import { EuiComboBox } from '@elastic/eui';

type OptType = {
  label: string;
};

const allOptionsStatic: OptType[] = [
  {
    label: 'Titan',
  },
  {
    label: 'Enceladus',
  },
  {
    label: 'Mimas',
  },
  {
    label: 'Dione',
  },
  {
    label: 'Iapetus',
  },
  {
    label: 'Phoebe',
  },
  {
    label: 'Rhea',
  },
  {
    label:
      "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
  },
  {
    label: 'Tethys',
  },
  {
    label: 'Hyperion',
  },
];

export const CategoryComboBox = () => {
  const [allOptions, setAllOptions] = useState<OptType[]>(allOptionsStatic);
  const [selectedOptions, setSelected] = useState<OptType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [options, setOptions] = useState<OptType[]>([]);
  let searchTimeout: NodeJS.Timeout;
  const onChange = (selectedOptions: OptType[]) => {
    setSelected(selectedOptions);
  };

  const onSearchChange = useCallback((searchValue) => {
    setLoading(true);
    setOptions([]);

    clearTimeout(searchTimeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    searchTimeout = setTimeout(() => {
      // Simulate a remotely-executed search.
      setLoading(false);
      setOptions(
        allOptions.filter((option) =>
          option.label.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    }, 1200);
  }, []);

  const onCreateOption = (
    searchValue: string,
    flattenedOptions: OptType[] = [],
  ) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        (option) => option.label.trim().toLowerCase() === normalizedSearchValue,
      ) === -1
    ) {
      // Simulate creating this option on the server.
      setAllOptions([...allOptions, newOption]);
      setOptions([...options, newOption]);
    }

    // Select the option.
    setSelected((prevSelected) => [...prevSelected, newOption]);
  };

  useEffect(() => {
    // Simulate initial load.
    onSearchChange('');
  }, [onSearchChange]);

  return (
    <EuiComboBox
      placeholder="Search asynchronously"
      async
      options={options}
      selectedOptions={selectedOptions}
      isLoading={isLoading}
      onChange={onChange}
      onSearchChange={onSearchChange}
      onCreateOption={onCreateOption}
    />
  );
};
