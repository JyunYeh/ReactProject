import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title = "FAQ" subtitle = "Frequently Asked Question Page" />
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography sx={{ width: '10%', flexShrink: 0 }} color={colors.greenAccent[500]} variant = "h5">
                    Important questions
                </Typography>
                <Typography color={colors.greenAccent[200]} variant = "h5">Market, Price, place...</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Details
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant = "h5">
                    Important
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Details
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        
    </Box>
};

export default FAQ;