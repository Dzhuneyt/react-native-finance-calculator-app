/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card, Divider, Paragraph, Title} from 'react-native-paper';

const Calculators = ({navigation}: any) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{flexGrow: 1}}
          style={styles.scrollView}>
          <Title style={styles.title}>Time Value of Money (TVM)</Title>
          <Card style={styles.card} onPress={() => navigation.push('FVM')}>
            <Card.Title title="Future Value of Money" />

            <Card.Content>
              <Paragraph>
                Future value is the value of an asset at a specific date. It
                measures the nominal future sum of money that a given sum of
                money is "worth" at a specified time in the future assuming a
                certain interest rate, or more generally, rate of return; it is
                the present value multiplied by the accumulation function. The
                value does not include corrections for inflation or other
                factors that affect the true value of money in the future. This
                is used in time value of money calculations.
              </Paragraph>
            </Card.Content>
          </Card>

          <Divider />

          <Card style={styles.card}>
            <Card.Title title="Present Value of Future Money" />
            <Card.Content>
              <Paragraph>
                In economics and finance, present value (PV), also known as
                present discounted value, is the value of an expected income
                stream determined as of the date of valuation. The present value
                is always less than or equal to the future value because money
                has interest-earning potential, a characteristic referred to as
                the time value of money, except during times of negative
                interest rates, when the present value will be more than the
                future value.
              </Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  // Make the container full height
  container: {flex: 1},

  scrollView: {
    backgroundColor: Colors.lighter,
    padding: 10,
    flexGrow: 1,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 50,
  },
});

export default Calculators;
