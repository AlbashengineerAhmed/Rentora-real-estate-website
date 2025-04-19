# Rentora - Professional Real Estate Solutions

## Overview

Rentora is a modern and professional real estate solutions website designed to provide comprehensive property management and real estate services. Built with Next.js, Rentora offers a user-friendly experience with features such as property listings, market analysis, investment advice, and more. The website aims to connect property owners, tenants, and investors in a seamless and efficient manner.

![Home Page](https://example.com/homepage.png)

## Technologies Used

- **Next.js:** A React framework for building performant and SEO-friendly web applications.
- **Tailwind CSS:** A utility-first CSS framework for rapidly styling the website.
- **JavaScript:** The primary programming language for implementing the website's functionality.
- **AOS (Animate On Scroll):** A library for adding subtle animations as users scroll through the page, enhancing the user experience.
- **Jost Font:** A modern and versatile font used for a clean and professional look.

## File Structure

The `app/` directory is the heart of the Next.js application and contains the following structure:

- `about-us/`: Contains the About Us page, providing information about the company and its mission.
- `blogs/`: Contains the Blogs page, featuring articles and news related to real estate.
- `facilities/`: Contains the Facilities page, showcasing available amenities and features.
- `favicon.ico`: The website's favicon, displayed in the browser tab.
- `globals.css`: The global CSS file, importing Tailwind CSS and defining custom styles and variables.
- `layout.js`: The root layout component, defining the overall page structure, including the header and footer.
- `page.js`: The main Home page component, displaying the hero banner, about section, categories, features, and services.
- `services/`: Contains the Services page, detailing the services offered by Rentora.
- `_Components/`: A directory containing reusable React components:
  - `About.jsx`: The About section component, displaying company information.
    ![About Section](https://example.com/about.png)
  - `AOSInit.jsx`: Initializes the Animate On Scroll library for adding animations.
  - `Banner.jsx`: The Hero banner component, featuring a call to action.
    ![Banner Section](https://example.com/banner.png)
  - `Categories.jsx`: The Categories section component, allowing users to browse different property types.
    ![Categories Section](https://example.com/categories.png)
  - `FacilitiesSearch.jsx`: A component for searching available facilities.
  - `Features.jsx`: The Features section component, highlighting key benefits.
    ![Features Section](https://example.com/features.png)
  - `Footer.jsx`: The Footer component, displaying contact information and links.
    ![Footer Section](https://example.com/footer.png)
  - `Header.jsx`: The Header component, providing navigation links.
    ![Header Section](https://example.com/header.png)
  - `Services.jsx`: The Services section component, showcasing available services.
    ![Services Section](https://example.com/services.png)

## Key Components

- **Header:** The navigation header provides links to different sections of the website, ensuring easy navigation.
- **Banner:** The hero banner section captures the user's attention with a compelling call to action and visually appealing design.
- **About:** The About Us section provides information about the company, its mission, and its values.
- **Categories:** The Categories section allows users to browse different property types, making it easy to find what they're looking for.
- **Features:** The Features section highlights the key benefits of using Rentora's services.
- **Services:** The Services section showcases the range of services offered by Rentora, such as property management, market analysis, and investment advice.
- **Footer:** The footer section provides contact information, links to important pages, and copyright information.

## Setup Instructions

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd real-estate-website-final
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Run the development server:

    ```bash
    npm run dev
    ```

5.  Open your browser and visit `http://localhost:3000` to view the website.

## Contributing

We welcome contributions to Rentora! If you'd like to contribute, please follow these guidelines:

### How to Contribute

1.  **Fork the repository:** Click the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.
2.  **Clone the repository:** Clone the forked repository to your local machine using `git clone <your_fork_url>`.
3.  **Create a new branch:** Create a new branch for your feature or bug fix using `git checkout -b feature/your-feature-name` or `git checkout -b fix/your-bug-fix`.
4.  **Make your changes:** Implement your feature or bug fix, following the project's coding style and best practices.
5.  **Commit your changes:** Commit your changes with clear, concise, and descriptive messages using `git commit -m "Your commit message"`.
6.  **Push your changes:** Push your changes to your forked repository using `git push origin feature/your-feature-name` or `git push origin fix/your-bug-fix`.
7.  **Submit a pull request:** Click the "Create Pull Request" button on your forked repository page to submit a pull request to the main repository.

### Code Style

Please follow the project's coding style and best practices. Use ESLint and Prettier to ensure consistent code formatting.

### Commit Messages

Write clear, concise, and descriptive commit messages. Use the following format:

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Apply code style changes
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

### Pull Request Guidelines

- Ensure your pull request addresses a specific issue or feature.
- Provide a clear and concise description of your changes.
- Include relevant screenshots or GIFs if applicable.
- Be responsive to feedback and address any comments or concerns.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
