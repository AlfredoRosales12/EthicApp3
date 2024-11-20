import {List, ListItem, ListItemIcon, ListItemText,ListItemButton,Box,Divider } from '@mui/material';
export default function NavListDrawer({navLinks}){
    return(
        <Box sx={{width: 250}}>
            <nav>
                <div style={{display:'flex', justifyContent:'left', margin:'15px'}}>
                    <img src="src/assets/ethicapp-logo.png" alt="Inicio" style={{ width: 130, height: 30 }} />
                </div>
                <List>
                    {navLinks.map((item) => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton component="a" href="#trash">                            
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                        ))
                    }             
                </List>
            </nav>
            <Divider/>
            <nav>
                
            </nav>
        </Box>
    );
}
