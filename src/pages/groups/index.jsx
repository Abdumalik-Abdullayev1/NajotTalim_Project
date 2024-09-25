import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { GroupsTable } from '@components';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className='mb-4'
      >
        <Tab value="one" label="Faol" />
        <Tab value="two" label="Tugagan" />
      </Tabs>
      
      <GroupsTable/>
    </Box>
  );
}