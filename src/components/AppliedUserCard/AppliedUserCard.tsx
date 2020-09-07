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

import formatDate from 'utils/date';

import styles from './AppliedUserCard.module.scss';

interface IAppliedUserCardProps {
  courseDto: {
    availableCount: number;
    description: string;
    id: number;
    maxStudents: number;
    startDate: Date;
    title: string;
  };
  user: {
    about: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    verified: boolean;
  };
  apply: Function;
  reject: Function;
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

const AppliedUserCard: FC<IAppliedUserCardProps> = ({ courseDto, user, apply, reject }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
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

        <Typography variant="h5" component="h2">
          {courseDto.title}
        </Typography>
        <Typography>{`Максимальное количество студентов: ${courseDto.maxStudents}`}</Typography>
        <Typography>{`Количество свободных мест: ${courseDto.availableCount}`}</Typography>
        <Typography>{`Дата начала занятий: ${formatDate(courseDto.startDate)}`}</Typography>
        <Accordion
          className={classes.accordeon}
          expanded={expanded === 'aboutCourse'}
          onChange={handleChange('aboutCourse')}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography className={classes.heading}>О курсе</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{courseDto.description}</Typography>
          </AccordionDetails>
        </Accordion>
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              apply();
            }}
          >
            Подтвердить участие
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              reject();
            }}
          >
            Отказать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppliedUserCard;
