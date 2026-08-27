# React CRUD Form

A simple **React CRUD Form Project** built to practice form handling, localStorage, CRUD operations, form validation, and different types of form fields.

## Features

* Controlled Form using `useState`
* Name field
* Email field
* Password field
* Phone field
* Gender using Radio Buttons
* Hobbies using Checkboxes
* City using Select Dropdown
* Insert/Register records
* View registered records
* Edit/Update records
* Delete records
* Store data in Browser `localStorage`
* Load saved data using `useEffect`
* Form validation
* Responsive CSS design

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Browser LocalStorage
* React Hooks

  * `useState`
  * `useEffect`

## Form Fields

The registration form contains:

| Field    | Type              |
| -------- | ----------------- |
| Name     | Text              |
| Email    | Email             |
| Password | Password          |
| Phone    | Telephone         |
| Gender   | Radio Button      |
| Hobbies  | Checkbox          |
| City     | Select / Dropdown |

## CRUD Operations

### Create

Users can register a new record through the form.

The record is saved in `localStorage`.

### Read

Saved records are loaded using `useEffect()` and displayed in a table.

### Update

Clicking the **Edit** button loads the selected record back into the form.

The user can modify the information and click **Update**.

### Delete

Clicking the **Delete** button removes the selected record from the table and `localStorage`.

## Data Storage

The project uses browser `localStorage`.

Data is stored under the key:

```javascript
Data
```

The stored data has the following structure:

```javascript
[
  {
    name: "Alfaz",
    email: "alfaz@gmail.com",
    password: "123456",
    phone: "9876543210",
    gender: "Male",
    hobbies: ["Coding", "Gaming"],
    city: "Ahmedabad"
  }
]
```

## Validation

The form validates:

* Name is required
* Name must contain at least 3 characters
* Email must be valid
* Password must contain at least 6 characters
* Phone must contain 10 digits
* Gender must be selected
* At least one hobby must be selected
* City must be selected

## Project Structure

```text
src/
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
│
├── package.json
└── README.md
```

## How to Run

Clone or download the project.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## Learning Objectives

This project was created to understand:

1. React controlled forms
2. Handling multiple inputs with one `handleChange()` function
3. Radio buttons
4. Checkboxes
5. Select dropdowns
6. Form validation
7. `useState`
8. `useEffect`
9. Browser localStorage
10. Create, Read, Update and Delete operations

## Future Improvements

The project can be extended with:

* Search functionality
* Sorting
* Pagination
* Better password security
* Backend API
* Database integration
* Authentication
* Admin dashboard

## Author

**Alfaz Memon**

---

### Project Status

**Completed:** Form, CRUD, Gender, Checkbox, Selection, localStorage, useEffect, and validation.

**Next planned features:** Search, Sorting, and Pagination.
