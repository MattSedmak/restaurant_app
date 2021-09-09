# Documentation

### Background

3 week shcool project, first project with React.

### Team

sedmak, joched, fredrikandre

## Restaurant Booking App - ReactJS (TS)

We created a SPA with ReactJS with our own [API](https://github.com/MattSedmak/restaurant_server) and MongoDB as our database.

## Installation

1. [Clone repo](https://github.com/MattSedmak/restaurant_app)
2. `npm i`
3. `npm start`

`npm test` to start our tests.

## Naming Conventions

- Variabel names should be descriptive and use camelCase
- Functions should be arrow functions (ES6), descriptive and the names in camelCase
- Interface names should always start with a capital I and PascalCase, eg. IBooking

## Booking

- User first select what time to eat (18:00 (6:PM) or 21:00 (9:PM))
  Then user can choose 1-12 guests (1-6 == 1 table, 7-12 == 2 tables)
- Now we show react calendar for 1 month, if it is fully booked we have disabled that day (tileDisabled).
- After User click on desired date we will show the form with a submit, with some simple validation.
- After successful booking the user will see a thank you message with some details for the booking, and receive a mail with booking information and a cancelation link.

## Cancelation

In the email we have a button that go to our page, if Customer click on confirm (Bekräfta avbokning) the booking is removed from database and the User will now see our landing page.

## Admin

- Admin can search by last name. We display all bookings with that last name.
- User can selected desired booking and have the ability to make changes, update, cancel, delete booking.

### Note:

If there is 14 booked tables on a specific day and seating time, and admin select a booking that already has one of those 14 booked tables, admin can now edit number of guests so that it equals 2 tables and the logic works.

# Improvements

- Also see our documentation for our [API](https://github.com/MattSedmak/restaurant_server).
- Improve the overall looks and feel of the site
- Log in for Admin
- More tests
- Creating our own From validations
- Cookie for GDPR and not LocalStorage
- Refactoring - smaller components. This is our first React project, so with more experience and knowledge of React we should be able to make it allot better and more “reactish” :-)
