import * as Colors from './Colors';

const base = {
  marginVertical: 1,
};

const rounded = {
  borderRadius: 5,
};

export const small = {
  backgroundColor: Colors.buttonBackground,
  paddingHorizontal: 10,
  paddingVertical: 6,
  shadowColor: Colors.buttonShadow,
  shadowOffset: {
    width: -2,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  width: 100,
};

export const smallRounded = {
  ...base,
  ...small,
  ...rounded,
};

export const smallText = {
  color: Colors.buttonText,
  textAlign: 'center',
};

export const medium = {
  backgroundColor: Colors.buttonBackground,
  paddingHorizontal: 12,
  paddingVertical: 8,
  shadowColor: Colors.buttonShadow,
  shadowOffset: {
    width: -2,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  width: 120,
};

export const mediumRounded = {
  ...base,
  ...medium,
  ...rounded,
};

export const mediumText = {
  color: Colors.buttonText,
  textAlign: 'center',
};

export const large = {
  backgroundColor: Colors.buttonBackground,
  paddingHorizontal: 16,
  paddingVertical: 10,
  shadowColor: Colors.buttonShadow,
  shadowOffset: {
    width: -2,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  width: 160,
};

export const largeRounded = {
  ...base,
  ...large,
  ...rounded,
};

export const largeText = {
  color: Colors.buttonText,
  textAlign: 'center',
};
