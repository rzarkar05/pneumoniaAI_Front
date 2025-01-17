import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../components/organisms';
import {
  Hero,
  Hub,
  Partners,
  Pricings,
  Reviews,
  Support,
} from './components';

import { reviews, support, integrations } from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '50%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const IndexView = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.shape}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Reviews data={reviews} />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Hub />
        </Section>
      </div>

      <Divider />
    </div>
  );
};

export default IndexView;
