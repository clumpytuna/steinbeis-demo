import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import { Card, Container, makeStyles, Toolbar, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    marginTop: 100,
    padding: 50,
  },
  header: {
    // fontSize: '2rem'
    marginBottom: 30,
  },
  tooltip: {
    backgroundColor: 'black',
    color: 'white'
  },
});

export const DefaultPage = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <h2>Diff docs</h2>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <div>
            <Typography className={classes.header} variant="h2">
              Doc heading
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <Tooltip title={"Changed here"}><Typography display="inline" className={classes.tooltip}>Accusamus eaque esse</Typography></Tooltip> inventore odio omnis repellat rerum. Culpa perferendis perspiciatis unde!
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque esse inventore odio omnis repellat rerum. Culpa perferendis perspiciatis unde!
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque esse inventore odio omnis repellat rerum. Culpa perferendis perspiciatis unde!
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eaque esse inventore odio omnis repellat rerum. Culpa perferendis perspiciatis unde!
            </Typography>
          </div>
        </Card>
      </Container>
    </div>
  );
}

DefaultPage.propTypes = {
  diffDocs: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    diffDocs: state.diffDocs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
