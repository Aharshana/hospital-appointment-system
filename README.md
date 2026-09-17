# 🏥 Hospital Appointment Booking System

A responsive web-based **Hospital Appointment Booking System** developed using **HTML, CSS, and JavaScript**.

The system allows patients to enter their details, select a department and doctor, choose an appointment date and time, view booked appointments, search appointments, and cancel appointments.

---

## 📌 Project Overview

The Hospital Appointment Booking System is designed to simplify the basic appointment booking process.

Instead of managing appointments manually, the system provides a simple web interface where users can:

- Enter patient information
- Select a medical department
- Select a doctor
- Select appointment date and time
- Book an appointment
- View booked appointments
- Search appointments
- Cancel appointments

The project demonstrates frontend development, form handling, client-side validation, dynamic table generation, search functionality, and CRUD-style data manipulation.

---

## 🎯 Problem Statement

Traditional appointment booking processes may involve manual registration, phone calls, or paperwork.

This project provides a simple digital interface for managing appointment information and demonstrates how a web-based appointment system can improve organization and accessibility.

---

## 🎯 Objectives

The main objectives of this project are:

1. To develop a simple hospital appointment booking interface.
2. To collect patient information through a structured form.
3. To allow users to select departments and doctors.
4. To allow users to select appointment dates and times.
5. To display booked appointments dynamically.
6. To provide appointment search functionality.
7. To provide appointment cancellation functionality.
8. To perform client-side form validation.
9. To create a responsive user interface.
10. To demonstrate basic web application development using HTML, CSS, and JavaScript.

---

## ⭐ Key Features

### 👤 Patient Registration

The system collects:

- Patient Name
- Email
- Phone Number
- Department
- Doctor
- Appointment Date
- Appointment Time

### 🏥 Department Selection

Users can select from available departments:

- Cardiology
- Neurology
- Orthopedics
- Dermatology
- Pediatrics

### 👨‍⚕️ Doctor Selection

Users can select an available doctor from the doctor list.

### 📅 Appointment Booking

Users can select:

- Appointment date
- Appointment time

and submit the appointment.

### 📋 Appointment List

Booked appointments are displayed dynamically in a table.

### 🔎 Search

Users can search appointments by patient name.

### ❌ Appointment Cancellation

Users can cancel an existing appointment.

### 📱 Responsive Design

The interface adapts to smaller screen sizes such as:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive design |
| JavaScript | Application logic and dynamic functionality |
| GitHub | Source code repository |
| GitHub Pages | Optional frontend deployment |

---

# 🏗️ Project Architecture

The current version is a frontend-only application.

```text
User
  │
  ▼
HTML Interface
  │
  ▼
CSS Styling
  │
  ▼
JavaScript
  │
  ├── Form Handling
  ├── Appointment Creation
  ├── Appointment Display
  ├── Search
  └── Appointment Cancellation
```

---

# 📂 Project Structure

```text
hospital-appointment/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains:

- Page structure
- Appointment form
- Patient input fields
- Department selection
- Doctor selection
- Appointment date/time
- Appointment table
- Search field

### `style.css`

Contains:

- Page styling
- Form styling
- Table styling
- Button styling
- Responsive layout
- Mobile design

### `script.js`

Contains:

- Appointment creation
- Appointment display
- Search functionality
- Appointment deletion
- Form reset
- Client-side logic

---

# 🔄 Application Workflow

```text
Start
  │
  ▼
Open Hospital Appointment System
  │
  ▼
Enter Patient Details
  │
  ▼
Select Department
  │
  ▼
Select Doctor
  │
  ▼
Select Date & Time
  │
  ▼
Submit Appointment
  │
  ▼
Appointment Added
  │
  ▼
Appointment Displayed in Table
  │
  ├───────────────┐
  ▼               ▼
Search         Cancel
  │               │
  ▼               ▼
Filter        Delete Appointment
Results
```

---

# 📝 Functional Requirements

## 1. Patient Details

The system should allow users to enter:

- Patient name
- Email
- Phone number

## 2. Department Selection

The system should provide a department selection option.

## 3. Doctor Selection

The system should provide a doctor selection option.

## 4. Appointment Scheduling

The system should allow users to select:

- Date
- Time

## 5. Appointment Management

The system should allow users to:

- Create an appointment
- View appointments
- Search appointments
- Cancel appointments

---

# 🔐 Validation

The application uses HTML form validation for required fields.

The following fields are required:

- Patient Name
- Email
- Phone Number
- Department
- Doctor
- Appointment Date
- Appointment Time

The email field uses email-format validation.

---

# 🔄 CRUD Requirement

The current frontend prototype implements the following data operations:

| CRUD Operation | Current Implementation |
|---|---|
| Create | ✅ Implemented |
| Read | ✅ Implemented |
| Update | ❌ Not implemented |
| Delete | ✅ Implemented |

### Create

A new appointment is created when the user submits the form.

### Read

Existing appointments are displayed in the appointment table.

### Update

An appointment editing feature is not included in the current version.

### Delete

Users can cancel an appointment using the Delete button.

---

# 💾 Data Storage

The current version stores appointment information temporarily in a JavaScript array.

```javascript
let appointments = [];
```

Therefore:

> ⚠️ Appointment data is not permanently stored in a database.

Refreshing the browser will remove the current appointment data.

---

# 🗄️ Database Requirement

The current version does not use a database.

For a full-stack version, the application can be extended using:

```text
Frontend
   │
   ▼
REST API
   │
   ▼
Backend
   │
   ▼
Database
```

Possible database technologies include:

- MySQL
- PostgreSQL
- SQLite

The SOP recommends designing database entities, attributes, primary keys, relationships, and constraints when a database is used. :contentReference[oaicite:2]{index=2}

---

# 🌐 REST API Requirement

The current frontend-only version does not contain a REST API.

For a full-stack implementation, example endpoints could be:

```text
POST    /api/appointments
GET     /api/appointments
GET     /api/appointments/{id}
PUT     /api/appointments/{id}
DELETE  /api/appointments/{id}
```

These correspond to the CRUD REST API pattern specified in the project SOP. :contentReference[oaicite:3]{index=3}

---

# 🖥️ User Interface

The application contains the following UI sections:

### Header

Displays the hospital name and system description.

### Appointment Form

Allows users to enter and submit appointment details.

### Appointment Table

Displays currently booked appointments.

### Search

Allows users to search for appointments using the patient name.

### Footer

Displays project/hospital information.

---

# 📱 Responsive Design

The application is designed to work across different screen sizes.

Responsive CSS is used to modify the layout for smaller devices.

Supported screen types include:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🧪 Testing

The following test cases can be performed.

| Test Case | Expected Result | Status |
|---|---|---|
| Submit empty form | Browser displays required-field validation | ✅ |
| Enter valid patient details | Appointment is created | ✅ |
| Enter invalid email | Email validation is triggered | ✅ |
| Select department | Department is selected | ✅ |
| Select doctor | Doctor is selected | ✅ |
| Select date/time | Appointment details are accepted | ✅ |
| Submit appointment | Appointment appears in table | ✅ |
| Search patient | Matching appointment is displayed | ✅ |
| Delete appointment | Appointment is removed | ✅ |
| Open on mobile | Layout adapts to screen | ✅ |

---

# 🧪 Testing Scenarios

## Scenario 1 — Valid Appointment

**Input:**

```text
Patient Name: Rahul
Email: rahul@example.com
Phone: 9876543210
Department: Cardiology
Doctor: Dr. Arun Kumar
Date: Valid future date
Time: 10:00
```

**Expected Result:**

Appointment should be added to the appointment table.

---

## Scenario 2 — Missing Required Field

Leave one or more required fields empty.

**Expected Result:**

The browser should prevent form submission and request the missing information.

---

## Scenario 3 — Search Appointment

Enter a patient's name into the search box.

**Expected Result:**

Appointments matching the entered name should be displayed.

---

## Scenario 4 — Cancel Appointment

Click the **Delete** button.

**Expected Result:**

A confirmation message should appear.

After confirmation, the appointment should be removed.

---

# 🚧 Limitations

The current version has the following limitations:

1. No backend server.
2. No permanent database.
3. Appointment data is stored only in browser memory.
4. Data is lost after refreshing the page.
5. No user authentication.
6. No admin login.
7. No doctor dashboard.
8. No appointment editing functionality.
9. No REST API.
10. No server-side validation.
11. No real hospital integration.

---

# 🚀 Future Enhancements

The project can be extended into a complete full-stack application.

### Backend

Add:

- Spring Boot or Django
- REST API
- Business logic
- Server-side validation
- Exception handling

### Database

Add MySQL/PostgreSQL/SQLite for permanent appointment storage.

### Authentication

Add:

- Patient login
- Doctor login
- Admin login

### Appointment Management

Add:

- Edit appointment
- Reschedule appointment
- Appointment status
- Confirmation messages
- Cancellation history

### Doctor Dashboard

Doctors can view:

- Today's appointments
- Patient information
- Appointment history
- Available slots

### Admin Dashboard

Administrators can manage:

- Doctors
- Departments
- Patients
- Appointments

### Notifications

Future versions can include:

- Email notifications
- SMS notifications
- Appointment reminders

---

# 🔒 Security Considerations

A production version should:

- Validate input on both client and server.
- Use secure authentication.
- Protect patient information.
- Avoid storing passwords in source code.
- Use environment variables for sensitive credentials.
- Apply appropriate authorization.
- Use secure database access.

The project SOP specifically requires avoiding hard-coded passwords, API keys, and database credentials. :contentReference[oaicite:4]{index=4}

---

# 📊 SOP Requirement Compliance

| Requirement | Status |
|---|---|
| Project requirement analysis | ✅ |
| Frontend interface | ✅ |
| Responsive design | ✅ |
| Form handling | ✅ |
| Client-side validation | ✅ |
| Create operation | ✅ |
| Read operation | ✅ |
| Delete operation | ✅ |
| Search | ✅ |
| Update operation | ❌ |
| Backend | ❌ |
| REST API | ❌ |
| Database | ❌ |
| Server-side validation | ❌ |
| Authentication | ❌ |
| Postman API testing | ❌ |
| Database testing | ❌ |
| GitHub repository | ✅ |
| Project documentation | ✅ |
| Future enhancement plan | ✅ |

> **Note:** This repository represents a frontend prototype. The SOP's complete full-stack submission requirements require backend, database, REST API, complete CRUD, server-side validation, and API/database testing. These components must be added before claiming full compliance with the SOP. :contentReference[oaicite:5]{index=5}

---

# 📸 Screenshots

Add screenshots of the application here before final submission.

Recommended screenshots:

1. Home page
2. Appointment booking form
3. Filled appointment form
4. Successful appointment
5. Appointment table
6. Search functionality
7. Delete/cancel confirmation
8. Mobile/responsive view

Example:

```text
docs/
├── home-page.png
├── appointment-form.png
├── appointment-list.png
├── search.png
└── mobile-view.png
```

Then add them to the README using:

```markdown
![Home Page](docs/home-page.png)
```

---

# ▶️ How to Run

## Method 1 — GitHub

Open the repository on GitHub.

Navigate to:

```text
hospital-appointment/index.html
```

Download or open the project files.

---

## Method 2 — Local Browser

Download the project and open:

```text
index.html
```

in a web browser.

No server is required for the current frontend-only version.

---

# 📦 Submission Checklist

Before submitting the project, verify:

### Source Code

- [x] `index.html`
- [x] `style.css`
- [x] `script.js`
- [x] `README.md`

### Functionality

- [x] Appointment creation
- [x] Appointment display
- [x] Appointment search
- [x] Appointment cancellation
- [x] Form validation
- [x] Responsive UI

### Documentation

- [x] Project overview
- [x] Problem statement
- [x] Objectives
- [x] Features
- [x] Technology stack
- [x] Architecture
- [x] Project structure
- [x] Workflow
- [x] Functional requirements
- [x] Validation
- [x] Testing
- [x] Limitations
- [x] Future enhancements
- [x] Submission checklist

### Full-Stack SOP Requirements Still Needed

- [ ] Update operation
- [ ] Backend
- [ ] REST API
- [ ] Database
- [ ] ORM/JPA
- [ ] Server-side validation
- [ ] API testing using Postman
- [ ] Database verification
- [ ] Authentication
- [ ] Complete frontend-backend integration

---

# 📚 Documentation Requirements

For a complete academic submission, the following documentation can be maintained:

```text
docs/
│
├── project-report.pdf
├── architecture.png
├── er-diagram.png
├── api-documentation.md
├── test-cases.md
└── screenshots/
```

The project SOP lists project overview, problem statement, objectives, technology stack, architecture, ER diagram, UI screenshots, API documentation, CRUD implementation, testing, installation/run instructions, challenges, future enhancements, and repository details as documentation items. :contentReference[oaicite:6]{index=6}

---

# 👩‍💻 Author

**Aharshana R**

Computer and Communication Engineering

GitHub: [Aharshana](https://github.com/Aharshana)

---

# 📄 Project Information

**Project:** Hospital Appointment Booking System

**Type:** Web Application

**Category:** Healthcare / Hospital Management

**Frontend:** HTML, CSS, JavaScript

**Backend:** Not included in current prototype

**Database:** Not included in current prototype

**Version:** 1.0

**Year:** 2026

---

# 📜 License

This project is developed for educational and academic purposes.

---

## ⭐ Conclusion

The Hospital Appointment Booking System demonstrates the basic concepts of frontend web application development and appointment management.

The current version provides appointment creation, viewing, searching, and cancellation through a responsive web interface.

The application can be further developed into a complete full-stack hospital management solution by adding a backend, REST API, database, authentication, complete CRUD operations, server-side validation, and persistent data storage.

WEB APPLICATION LINK:
