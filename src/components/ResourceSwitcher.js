import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


//custom component that changes what the appointments are sorted by.
export default function ResourceSwitcher({mainResourceName, onChange, resources,}){ 
     const StyledDiv = styled('div')(({ theme }) => ({
        [`&.${classes.container}`]: {
            display: 'flex',
            marginBottom: theme.spacing(2),
            justifyContent: 'flex-end',
         },
        [`& .${classes.text}`]: {
        ...theme.typography.h6,
        marginRight: theme.spacing(2),
        },
    }));

    const PREFIX = 'calendar';

    const classes = {
    appointment: `${PREFIX}-appointment`,
    container: `${PREFIX}-container`,
    content: `${PREFIX}-content`,
    text: `${PREFIX}-text`,
    };
    
    return(
    <StyledDiv className={classes.container}>
        <div className={"resource-sorter-text"
        }>
          Sort by:
        </div>
        <Select
          variant="standard"
          value={mainResourceName}
          onChange={e => onChange(e.target.value)}
        >
          {resources.map(resource => (
            <MenuItem key={resource.fieldName} value={resource.fieldName}>
              {resource.title}
            </MenuItem>
          ))}
        </Select>
      </StyledDiv>
    )}
