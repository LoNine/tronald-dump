import { Grid, Paper } from "@material-ui/core";
import { styled } from '@material-ui/core/styles'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Quote = ({ quote }) => {
  return (
    <Grid item xs={6} md={4}>
      <Item>{quote}</Item>
    </Grid>
  );
};

export default Quote;
