import {StyleSheet} from 'react-native';
import React from 'react';
import {Paragraph, TextInput, Title} from 'react-native-paper';
import {Finance} from 'financejs';

const FVM = () => {
  const [presentValue, setPresentValue] = React.useState(0);
  const [interest, setInterest] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const [compoundsPerYear, setCompoundsPerYear] = React.useState(1);

  const [result, setResult] = React.useState(0);

  const recalculate = () => {
    console.log('Recalculating');
    const finance = new Finance();
    const res = finance.FV(
      interest / compoundsPerYear,
      presentValue,
      years * compoundsPerYear,
    );
    console.log(res);
    setResult(res);
  };

  return (
    <>
      <Paragraph>
        Calculate the future value of money available in present time.
      </Paragraph>

      <TextInput
        onChangeText={text => {
          setPresentValue(parseFloat(text));
          recalculate();
        }}
        onBlur={() => recalculate()}
        style={styles.textField}
        label="Present Value (e.g. 25000)"
      />
      <TextInput
        onChangeText={text => {
          setInterest(parseFloat(text));
          recalculate();
        }}
        onBlur={() => recalculate()}
        style={styles.textField}
        label="Interest (%)"
      />
      <TextInput
        onChangeText={text => {
          setYears(parseFloat(text));
          recalculate();
        }}
        onBlur={() => recalculate()}
        style={styles.textField}
        label="Years invested (e.g. 5)"
      />
      <TextInput
        onChangeText={text => {
          if (!text.length) {
            setCompoundsPerYear(0);
            recalculate();
            return;
          }
          if (isNaN(Number(text))) {
            setCompoundsPerYear(0);
            recalculate();
          } else {
            setCompoundsPerYear(Number(text));
            recalculate();
          }
        }}
        onBlur={() => recalculate()}
        style={styles.textField}
        label="Number of compoundings per year"
        value={compoundsPerYear.toString()}
      />

      <Title style={styles.result}>Future Value of Money: ${result}</Title>
    </>
  );
};

const styles = StyleSheet.create({
  // Make the container full height
  textField: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  result: {
    textAlign: 'center',
    flexGrow: 1,
  },
});
export default FVM;
