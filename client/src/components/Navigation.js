import * as React from 'react';
import { Tabs, Tab , Box } from '@mui/material';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({handlePageChange}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    console.log('<<<< tab.name: ', event.target.name, ">>>>>>\n")
    handlePageChange(event.target.name);

  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab name="AboutMe" label="About Me" {...a11yProps(0)} />
          <Tab name="Portfolio" label="Portfolio" {...a11yProps(1)} />
          <Tab name="Contact" label="Contact" {...a11yProps(2)} />
          <Tab name="Resume" label="Resume" {...a11yProps(3)} />
        </Tabs>
      </Box>
    </Box>
  );
}