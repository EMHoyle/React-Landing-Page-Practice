import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import MStyles from './MStyles';
import { Box } from '@material-ui/core';

const SideMenu = () => {
  const classes = MStyles();

  return (
    <Card className={classes.container}>
      <Box>

        <Button className={classes.button}>Todos</Button>

        <Button className={classes.button}>Productos</Button>

        <Button className={classes.button}>Recetas</Button>
        
        <Button className={classes.button}>Consejos</Button>

      </Box>
    </Card>
  );
}

export default SideMenu;

