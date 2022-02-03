# Documentation

### Background

3 week group project with React & Typescript.

### Team

MattSedmak, joched, fredrikandre

## Restaurant Booking App - ReactJS (TS)

We created a SPA with ReactJS with our own backend [API](https://github.com/MattSedmak/restaurant_server) and MongoDB as our database.

## Installation & Usage

1. [Clone repo](https://github.com/MattSedmak/restaurant_app)
2. `npm i`
3. `npm start`

`npm test` to start our tests.

## Naming Conventions

- Variabel names should be descriptive and use camelCase
- Functions should be arrow functions (ES6), descriptive and the names in camelCase
- Interface names should always start with a capital I and PascalCase, eg. IBooking
- Styled component names should match the html element they represent.

## Folder structure

- All components should be saved in the main Components folder.
- Components should have their own folder. 
- Styled Components should have their own file which is saved in the matching component folder.
- Pages should be saved in the main Pages folder.

--------------

# How the app works

## Booking

- User first selects what time they would like to eat (18:00 (6:PM) or 21:00 (9:PM))
  Then the user can choose between 1 - 12 guests (1-6 == 1 table, 7-12 == 2 tables).
- Then the react calendar appears showing availability for the current month, if a date is fully booked it will be disabled and the guest will not be able to choose that date.
- After the user clicks on the desired date the details form will pop up. The user can then fill in their details and confirm the booking.
- After a successful booking the user will see a thank you message with the details of their booking, and receive a email with their booking information and a         cancelation link.

## Cancelation

In the email there is a button that directs the user to our cancelation page, if the user clicks on confirm (Bekräfta avbokning) the booking is removed from database and the user will now see our landing page.

## Admin

- Admin can search by last name. We display all bookings with that last name.
- Admin can selected desired booking and have the ability to make changes, update, cancel, delete booking.
- Admin can also see if certain dates are fully booked.
- If there are 14 booked tables on a specific day and seating time, and admin select a booking that already has one of those 14 booked tables, admin can now edit     number of guests so that it equals 2 tables and the logic works.

--------------

# Improvements

- Also see our documentation for our [API](https://github.com/MattSedmak/restaurant_server).
- Improve the overall look and feel of the site.
- Log in for Admin users.
- More tests
- Creating our own form validations.
- Use a Cookie for GDPR and not LocalStorage.
- Refactoring - break down larger components into smaller components. With more experience and knowledge of React we should be able to make it a lot better and     more “reactish” :-)
- Add confirmation email when user/admin deletes or edits a booking.
- Add search by date/phone number function for admin - not just by lastname.
- Fix phone number to 'string' with validation for MongoDB's deletion of 0.

