// react
import { useCallback, useState } from 'react';
// component
import { Box, Tab, Tabs } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  tab1: React.ReactNode;
  tab2: React.ReactNode;
};

export default function SwitchTab({ tab1, tab2 }: Props) {
  const [currentTab, setCurrentTab] = useState('ly-thuyet');

  const TABS = [
    { value: 'ly-thuyet', label: 'Biểu diễn bài mẫu', component: tab1 },
    { value: 'thuc-hanh', label: 'Thực hành', component: tab2 },
  ];

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);
  return (
    <>
      <Tabs value={currentTab} onChange={handleChangeTab} sx={{ mb: 2 }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>

      {TABS.map((tab) => tab.value === currentTab && <Box key={tab.value}>{tab.component}</Box>)}
    </>
  );
}
