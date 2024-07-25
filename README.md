# Onboard Application

## Overview
This project is a React-based web application designed to provide a dynamic and user-friendly interface. It includes various components like buttons, form fields, steppers, and upload functionalities to create a cohesive user experience.

https://www.figma.com/design/fLWMNWvXXifNAuS1P2xa57/Onboarding-Screens?node-id=1-13193&t=tKPr8S71rBgZgqMK-0

## Features

- Customizable Buttons: Flexible button components with different variants and sizes.
- Dynamic Form Fields: Easily configurable form fields to collect user input.
- Stepper Component: Visual step indicator to guide users through a multi-step process.
- File Upload: Drag-and-drop and file selection options for user uploads.
- State Management: Uses React state and context to manage application state.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS

## Components
### Button
A versatile button component with support for different variants, sizes, and icons.

#### Props:

- variant: Type of button (e.g., "primary", "secondary").
- size: Size of the button (e.g., "small", "medium").
- text: Button label.
- onClick: Click event handler.
- startIcon: Icon to display at the start.
- endIcon: Icon to display at the end.
- color: Button color (e.g., "primary", "secondary").
- disabled: Whether the button is disabled.
### Field
A form field component for text input with optional placeholder.

#### Props:

- value: Input value.
- onChange: Change event handler.
### Stepper
A step indicator to show progress in a multi-step process.

#### Props:

state: Current step (1 through 4).
### VoiceName
A component for entering a brand voice name.

### VoiceSuggestion
Provides a preview and generates a brand voice suggestion.

### ReferencesUploadFile
Handles file uploads with drag-and-drop functionality.

### WhichDescribe
Allows the user to select how they want to describe their brand voice.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

- Clone the repository:

```
git clone https://github.com/meou2731999/onboard-app.git
```

```
cd onboard-app
```

- Install dependencies:

```
npm install
```

- Run the development server:

```
npm run dev
```

- Open http://localhost:3000 in your browser to see the application.

- Run unit test:

```
npm test
```

## Contact

For any inquiries, please contact lebaquana1@gmail.com.
