# GYM-Management-System
This is a full-featured Gym Management System built using HTML, CSS, JavaScript, and Firebase (Authentication and Firestore). The system is designed to simplify and automate the daily operations of a gym by providing different roles and dashboards for Admin, Members, and Visitors.

Key Features

Admin Panel

Secure login with Firebase Authentication

Add new gym members with personal and membership details

Automatically calculate and store membership expiry dates

View, update, or delete existing member records

Generate and manage monthly bills for members

Send custom notifications and reminders (e.g., payment due, expiry alerts)

Upload daily workout plans accessible by all members


Member Dashboard

Login with assigned credentials

View personal profile, membership details, and expiry date

Download monthly bill receipts

Get reminders and updates from the admin

Access daily workout routines shared by the gym


Public Website (Visitor View)

Visitors can view the main website without logging in

Overview of gym services, membership plans, and contact options

Option to join by registering through the membership system


Technologies Used
Frontend: HTML, CSS, JavaScript

Backend: Firebase (Authentication, Firestore Database)

Authentication: Role-based login system (Admin/Member)

Hosting: Firebase Hosting (optional)


Folder Structure
/index.html              # Main landing page (public)
 /login.html             # Login page for both roles
 /admin.html             # Admin dashboard
 /member.html            # Member dashboard
 /js/                    # JavaScript logic
 /css/                   # Stylesheets
 /assets/                # Images and icons


Firebase Services Used

Authentication – Email/password login for admin and members

Firestore – Stores member data, bills, workouts, and notifications

Firebase Rules – Secured access to data based on user roles


Setup Instructions

Clone the repository

Connect your Firebase project and replace the config in firebaseConfig section

Set up Firebase Authentication (email/password) and Firestore collections

Update Firebase security rules to ensure proper access control

Deploy locally or host via Firebase Hosting


Security Rules Example

match /members/{userId} {
  allow read, write: if request.auth != null && (
    request.auth.uid == userId || request.auth.token.email == "admin@gym.com"
  );
}



Future Improvements

Add member progress tracking (weight, attendance, etc.)

Enable email notifications using Firebase Cloud Functions

Add payment gateway integration for online bill payments

Member feedback and support system
