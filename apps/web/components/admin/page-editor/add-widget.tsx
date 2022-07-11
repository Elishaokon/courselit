import { Close } from "@mui/icons-material";
import {
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Typography,
} from "@mui/material";
import { EDIT_PAGE_ADD_WIDGET_TITLE } from "../../../ui-config/strings";
import widgets from "../../../ui-config/widgets";

interface WidgetsListProps {
    onSelection: (...args: any[]) => void;
    onClose: (...args: any[]) => void;
}

function AddWidget({ onSelection, onClose }: WidgetsListProps) {
    return (
        <Grid container direction="column">
            <Grid item>
                <List>
                    <ListItem>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h6">
                                    {EDIT_PAGE_ADD_WIDGET_TITLE}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={onClose}>
                                    <Close fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                    {Object.keys(widgets).map((item, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton onClick={(e) => onSelection(item)}>
                                <Typography>{item}</Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
}

export default AddWidget;