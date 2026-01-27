# let dump my thinking here

what do i have to do next?

## home page
[ ] 'view upcoming classes' button scroll to section once, need to do with js button action instead of link
[ ] data display on ui and database table column doesn't match
[ ] student stories are static
[ ] join waitlist form and enroll form need to check user login status first before showing the form

## classes page
[ ] search form not working
[ ] 'load more classes' not working

## class detail page
[ ] whole page is static

## admin pages
- overall all admin tab ui are not polish. Need to check icon sizes, rendering data in ui
- class listing done, teachers listing done, student listing done, class application listing done, payment receipt listing done
- search, pagination, table done
- class can create, teacher can create, 

[ ] page navigation link check every pages

[ ] class edit, delete
[ ] teacher edit, delete
[ ] student create, edit, delete
[ ] class application edit
[ ] payment receipt edit






# class
[x] update class table schema to match with UI
[x] check class card rendering
[x] form validation error display in admin class create form
[ ] check class edit form/make class edit form work
[x] form input location should disable if class type field is online
[x] remove non-display or unnecessary form field
[ ] implement 'load more class' button in class list page


## what data display in home page class card?
1. class type (in-person, online)
2. class code (MKT-203)
3. class title 
4. start date
5. schedule time (start time)
6. location (for in-person type class)
7. platform (for online type class)
8. fee

## need to check after update class schema
[x] class action (createClass)
[x] location, platform field need to add in class creation form
[ ] class render in table
[ ] class render in home page card, class listing page card

## to update class table schema need to update user table schema first
- user schema seem ok. let just add user with teacher role first.