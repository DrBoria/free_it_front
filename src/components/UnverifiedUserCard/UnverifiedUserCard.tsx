/* eslint-disable react/button-has-type */
import React, { FC, useState, ChangeEvent } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  AccordionSummary,
  makeStyles,
  Theme,
  createStyles,
  Accordion,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './UnverifiedUserCard.module.scss';

interface IUnverifiedUserCardProps {
  user: {
    about: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    verified: boolean;
  };
  verify: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordeon: {
      margin: '15px 0',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    buttonsContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
);

const AppliedUserCard: FC<IUnverifiedUserCardProps> = ({ user, verify }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        {/* USER INFO SECTION */}
        <Typography variant="h5" component="h2">
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        <Typography>{user.email}</Typography>
        <Accordion
          className={classes.accordeon}
          expanded={expanded === 'aboutUser'}
          onChange={handleChange('aboutUser')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography className={classes.heading}>О пользователе</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{user.about}</Typography>
          </AccordionDetails>
        </Accordion>

        {/* APPROVE BUTTONS SECTION */}
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              verify();
            }}
          >
            Активировать пользователя
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppliedUserCard;
