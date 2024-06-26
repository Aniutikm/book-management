# Book Management Application

This is a Book Management application built with Angular 18. The application allows users to display, add, edit, and delete books. It interacts with REST and GraphQL APIs and is configured with Jest for unit testing and ESLint for code linting.

## Features

- Display a list of books
- Add a new book
- Edit an existing book
- Delete a book
- Jest for unit testing
- ESLint for code linting

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Angular CLI installed globally

## Installation

To install this project, follow these steps:

1. Clone the repository:
   git clone <repository_url>
   cd book-management

2. Install the dependencies:
   npm install

## Running the Application

To run the application, use the following command:

   ng serve

Open your browser and navigate to <http://localhost:4200>.

## Running Unit Tests

This project uses Jest for unit testing. To run the tests, use the following command:

   npm test

To run a specific test file, use:

   npx jest src/app/book-form/book-form.component.spec.ts

## Linting the Code

This project uses ESLint for code linting. To lint the code, use the following command:

   npm run lint

To automatically fix linting issues, use:

   npm run lint:fix

## Project Structure

book-management/
  src/
    app/
      book-list/
        book-list.component.ts
        book-list.component.html
        book-list.component.scss
        book-list.component.spec.ts
      book-form/
        book-form.component.ts
        book-form.component.html
        book-form.component.scss
        book-form.component.spec.ts
      book/
        book.component.ts
        book.component.html
        book.component.scss
        book.component.spec.ts
      models/
        book.model.ts
      services/
        book.service.ts
        book-graph.service.ts
        book-service-resolver.service.ts
        book.interface.ts
    assets/
    environments/
    index.html
    main.ts
    styles.scss
  .editorconfig
  .eslintignore
  .eslintrc.json
  angular.json
  package.json
  README.md
  tsconfig.json
  tsconfig.spec.json

## Improvements

While the application is functional, there are several improvements that could be made:

- Type Safety: Replace all occurrences of <any> with specific types to leverage TypeScript's type-checking capabilities.
- Async Pipe: Use the async pipe in templates to handle observables more effectively and avoid manual subscription management.
- Error Handling: Implement comprehensive error handling for API calls to provide better user feedback.
- Unit Tests: Expand the unit test coverage to include more edge cases and ensure the robustness of the application.
- Performance Optimization: Analyze and optimize the performance of the application, particularly with large data sets.

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature-branch)
6. Create a pull request
