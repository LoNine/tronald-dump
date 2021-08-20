import { Grid } from "@material-ui/core";
import Quote from "./Quote/Quote";

const QuotesContainer = ({ info }) => {
  return(
    <Grid container  spacing={2}>
      {info.map((quote) => <Quote key={quote.id} quote={quote.value}/>)}
    </Grid>
  );
};

export default QuotesContainer;
