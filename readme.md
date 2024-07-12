# React Form Handling with Formik

![React Form Handling with Formik](https://www.patterns.dev/img/reactjs/react-logo@3x.svg)

This project demonstrates how to create a responsive login form in a React application using Formik for efficient form state management, validation, and submission handling.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AlvisPr/Using-Formik-MIT-Assignment.git
   cd react-formik-login

2. Install dependencies by executing  - npm install 

3. Start The Development Server  - npm start 



## Features

- **Form State Management:** Utilizes Formik's useFormik hook to manage form state with initialValues for email and password fields.

- **Form Validation:** Implements custom validation rules using Formik's validate function:
Checks if email is empty or doesn't match the email format (/\S+@\S+\.\S+/).Ensures password is not empty.

- **Error Handling:** Displays error messages ("Email is required", "Username should be an email", "Password is required") in real-time below input fields when validation fails.

- **Submission Handling:** Alerts "Login Successful" upon valid form submission using the onSubmit handler.

## Usage

- Enter a valid email address and password in the input fields.
- Click the "Submit" button to trigger form submission.
- If validation fails (e.g., empty fields or invalid email format), corresponding error messages will appear.
- Upon successful validation, an alert will confirm "Login Successful".


## License

- This project is licensed under the MIT License. See the LICENSE file for details [here](./LICENSE).
