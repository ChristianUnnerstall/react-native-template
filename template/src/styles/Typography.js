import * as Colors from './Colors';

const baseHeader = {
  fontFamily: 'Roboto-Black',
  color: Colors.secondary,
};

const baseText = {
  fontFamily: 'Robote-Regular',
};

export const header1 = {
  ...baseHeader,
  fontSize: 20,
};

export const header2 = {
  ...baseHeader,
  fontSize: 18,
};

export const header3 = {
  ...baseHeader,
  fontSize: 16,
};

export const text = {
  ...baseText,
  textAlign: 'justify',
  marginVertical: 10,
};

export const quote = {
  fontFamily: 'Roboto-Italic',
  borderLeftWidth: 6,
  paddingLeft: 16,
  marginVertical: 10,
  borderColor: Colors.secondary,
};

export const link = {
  ...baseText,
  color: Colors.linkText,
  textDecorationLine: 'underline',
};

export const code = {
  fontFamily: 'Courier New',
};
