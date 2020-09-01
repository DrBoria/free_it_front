/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

import styles from './CourseCard.module.scss';

interface ICourseCardProps {
  courseId: number;
  title: string;
  description: string;
  startDate: string;
  apply: Function;
}

const CourseCard: FC<ICourseCardProps> = ({ courseId, title, description, startDate, apply }) => (
  <Card className={styles.card}>
    <CardContent>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <Typography color="textSecondary">{startDate}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          apply(courseId);
        }}
      >
        Подать заявку
      </Button>
    </CardContent>
  </Card>
);

export default CourseCard;
