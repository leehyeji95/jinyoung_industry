import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Groups from '@mui/icons-material/Groups';
import Engineering from '@mui/icons-material/Engineering';
import Forest from '@mui/icons-material/Forest';
import Rule from '@mui/icons-material/Rule';
import Mailbox from '@mui/icons-material/MarkunreadMailbox';

// Images
import SHEImage from "assets/images/SHE.png";
import safetyImage from "assets/images/safety.png";
import environImage from "assets/images/environ.png";
import ethicImage from "assets/images/ethic.png";
import reportImage from "assets/images/report.png";

import MKBox from "../../../../components/MKBox";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                index === 0 && (
                    <MKBox sx={{ pl: 5, pt: 5 }}>
                        <MKBox component="img" src={SHEImage} width="80%"/>
                    </MKBox>
                ) ||
                index === 1 && (
                    <MKBox sx={{ pl: 5, pt: 5 }}>
                        <MKBox component="img" src={safetyImage} width="80%"/>
                    </MKBox>
                ) ||
                index === 2 && (
                    <MKBox sx={{ pl: 5, pt: 5 }}>
                        <MKBox component="img" src={environImage} width="80%"/>
                    </MKBox>
                ) ||
                index === 3 && (
                    <MKBox sx={{ pl: 5, pt: 5 }}>
                        <MKBox component="img" src={ethicImage} width="80%"/>
                    </MKBox>
                ) ||
                index === 4 && (
                <MKBox sx={{ pl: 5, pt: 5 }}>
                <MKBox component="img" src={reportImage} width="80%"/>
                </MKBox>
                )


                // <Box sx={{ p: 3 }}>
                //     <Typography>{children}</Typography>
                // </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function IconTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="icon position tabs example" centered style={{height:"100px"}}>
                    <Tab icon={<Groups/>} label="SHE 방침" {...a11yProps(0)} iconPosition="top"/>
                    <Tab icon={<Engineering/>} label="안전보건경영" {...a11yProps(1)} />
                    <Tab icon={<Forest/>} label="환경경영" {...a11yProps(2)} />
                    <Tab icon={<Rule/>} label="윤리경영" {...a11yProps(3)} />
                    <Tab icon={<Mailbox/>} label="사이버신문고" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Item Three
            </CustomTabPanel>

        </Box>
    );
}
