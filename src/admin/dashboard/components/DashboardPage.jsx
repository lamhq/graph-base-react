// @flow

import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import Icon from '@material-ui/core/Icon';
import Warning from '@material-ui/icons/Warning';
import Store from '@material-ui/icons/Store';
import LocalOffer from '@material-ui/icons/LocalOffer';
import DateRange from '@material-ui/icons/DateRange';
import Update from '@material-ui/icons/Update';

import GridContainer from '../../../common/material-ui/components/Grid/GridContainer';
import GridItem from '../../../common/material-ui/components/Grid/GridItem';
import Card from '../../../common/material-ui/components/Card/Card';
import CardHeader from '../../../common/material-ui/components/Card/CardHeader';
import CardIcon from '../../../common/material-ui/components/Card/CardIcon';
import CardFooter from '../../../common/material-ui/components/Card/CardFooter';
import Danger from '../../../common/material-ui/components/Typography/Danger';

import { withMainLayout } from '../../hoc';

import { IBaseProps } from '../../../common/types';

import styles from './styles';

interface IProps extends IBaseProps {}

function DashboardPage(props: IProps) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50
                <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <i className="fab fa-twitter" />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withMainLayout(withStyles(styles)(DashboardPage));
