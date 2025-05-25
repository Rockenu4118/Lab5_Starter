// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('should be a phone number', () => { expect(isPhoneNumber('310-567-7623')).toBe(true) })
test('should be a phone number', () => { expect(isPhoneNumber('1-310-567-7622')).toBe(true) })
test('should be a phone number', () => { expect(isPhoneNumber('3105677623')).toBe(false) })
test('should be a phone number', () => { expect(isPhoneNumber('bruh')).toBe(false) })

test('should be an email', () => { expect(isEmail('a1hermosillo@ucsd.edu')).toBe(true) })
test('should be an email', () => { expect(isEmail('a1hermosilloucsd.edu')).toBe(false) })
test('should be an email', () => { expect(isEmail('----@ucsd.edu')).toBe(false) })
test('should be an email', () => { expect(isEmail('rockenu4118@hotmail.com')).toBe(true) })

test('should be a strong password', () => { expect(isStrongPassword('brobro17')).toBe(true) })
test('should be a strong password', () => { expect(isStrongPassword('99hi')).toBe(false) })
test('should be a strong password', () => { expect(isStrongPassword('pas')).toBe(false) })
test('should be a strong password', () => { expect(isStrongPassword('thebros88')).toBe(true) })

test('should be a date', () => { expect(isDate('10/10/2000')).toBe(true) })
test('should be a date', () => { expect(isDate('11/11/2002')).toBe(true) })
test('should be a date', () => { expect(isDate('111/0/22')).toBe(false) })
test('should be a date', () => { expect(isDate('brooo')).toBe(false) })

test('should be a hex color', () => { expect(isHexColor('00AAFF')).toBe(true) })
test('should be a hex color', () => { expect(isHexColor('LLAAFF')).toBe(false) })
test('should be a hex color', () => { expect(isHexColor('0011F')).toBe(false) })
test('should be a hex color', () => { expect(isHexColor('45F1A9')).toBe(true) })