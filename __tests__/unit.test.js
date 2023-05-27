// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber tests
test('valid phone number 1', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number 2', () => {
    expect(functions.isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone number 1', () => {
    expect(functions.isPhoneNumber('5555555555')).toBe(false);
});

test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber('0987')).toBe(false);
});

// isEmail tests
test('valid email 1', () => {
    expect(functions.isEmail('mwgill@ucsd.edu')).toBe(true);
});

test('valid email 2', () => {
    expect(functions.isEmail('a@yahoo.com')).toBe(true);
});

test('invalid email 1', () => {
    expect(functions.isEmail('melodygill.com')).toBe(false);
});

test('invalid email 2', () => {
    expect(functions.isEmail('u@a')).toBe(false);
});

// isStrongPassword tests
test('strong password 1', () => {
    expect(functions.isStrongPassword('Password')).toBe(true);
});

test('strong password 2', () => {
    expect(functions.isStrongPassword('a1234567890')).toBe(true);
});

test('weak password 1', () => {
    expect(functions.isStrongPassword('2small')).toBe(false);
});

test('weak password 2', () => {
    expect(functions.isStrongPassword('[].dfhsh38nvndjnsd]@%^&]')).toBe(false);
});

// isDate tests
test('valid date 1', () => {
    expect(functions.isDate('4/4/2005')).toBe(true);
});

test('valid date 2', () => {
    expect(functions.isDate('12/25/2023')).toBe(true);
});

test('invalid date 1', () => {
    expect(functions.isDate('a/b/cdef')).toBe(false);
});

test('invalid date 2', () => {
    expect(functions.isDate('4/2/99')).toBe(false);
});

// isHexColor tests
test('valid hex color 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('valid hex color 2', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
});

test('invalid hex color 1', () => {
    expect(functions.isHexColor('FFF_FFF')).toBe(false);
});

test('invalid hex color 2', () => {
    expect(functions.isHexColor('#FFFFF')).toBe(false);
});