import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Card, Container, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    padding: '20px',
    minWidth: 275,
    maxWidth: 800,
    margin: "200px auto 0",
  },
  cardAnswer: {
    padding: '20px',
    minWidth: 275,
    maxWidth: 800,
    margin: "50px auto 0",
  },
  questionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 20,
    width: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
  },
  input: {
    width: '50%',
  },
  pos: {
    marginBottom: 12,
  },
  textarea: {
    width: '100%',
  }
});

export const Form = (props) => {
  const classes = useStyles();

  const [reference, setReference] = useState('The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. “The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”');
  const [question, setQuestion] = useState('What country is under the pressure?');

  const handleRefChange = (event) => {
    setReference(event.target.value);
  };

  const handleQChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    props.actions.makeRequest(reference, question);
  };

  return (
    <Container maxWidth='lg'>
      <Card className={classes.card}>
        <div className={classes.textarea}>
          <TextField
            id="standard-multiline-flexible"
            label="Reference text"
            multiline
            rowsMax="4"
            value={reference}
            onChange={handleRefChange}
            className={classes.textarea}
            margin="normal"
          />
        </div>
        <div className={classes.questionWrapper}>
          <Typography variant="h2" className={classes.title}>Ask a question:</Typography>
          <TextField
            id="outlined-name"
            label="Question"
            className={classes.input}
            value={question}
            onChange={handleQChange}
            margin="normal"
            variant="outlined"
          />
        </div>
        <Button href='' className={classes.button} onClick={handleSubmit} color="primary" variant="contained">Get an answer</Button>
      </Card>

      {
        !!props.poster.answer.length && (
          <Card className={classes.cardAnswer}>
            <Typography variant="h5">
              Here is the answer:
            </Typography>
            <Typography>
              {props.poster.answer}
            </Typography>
          </Card>
        )
      }
    </Container>
  );
};

Form.propTypes = {
  poster: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    poster: state.poster,
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
)(Form);
