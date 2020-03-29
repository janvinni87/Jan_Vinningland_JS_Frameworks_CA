import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: 60,
    textAlign: 'center',
  },
}));

const Footer = ({data}) => {
  const classes = useStyles();
  const d = new Date();
  const y = d.getFullYear();
  const footerText = `&copy; ${y} Jan Terje Vinningland`;

  return (
    <Typography paragraph className={classes.footer}>
      { ReactHtmlParser(footerText) }
    </Typography>
  );
};

export default Footer;
