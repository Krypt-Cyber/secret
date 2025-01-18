# Project Structure for DecentraLive Streaming

## Frontend (React)
- `frontend/`
  - `public/`
    - `index.html`          # Main HTML file
  - `src/`
    - `components/`        # Reusable components
      - `Header.js`        # Header component
      - `Footer.js`        # Footer component
      - `Sidebar.js`       # Sidebar component
      - `StreamingComponent.js` # Component for live streaming
    - `pages/`             # Page components
      - `Home.js`          # Home page
      - `Profile.js`       # User profile page
      - `Dashboard.js`     # User dashboard
      - `Login.js`         # User login page
      - `Register.js`      # User registration page
    - `App.js`             # Main application component
    - `index.js`          # Entry point for React application
    - `styles/`           # CSS styles
      - `App.css`         # Main styles
      - `Header.css`      # Header styles
      - `Footer.css`      # Footer styles

## Backend (Node.js, Express, MongoDB)
- `backend/`
  - `src/`
    - `index.js`          # Entry point for the server
    - `routes/`           # API routes
      - `auth.js`         # Authentication routes
      - `streams.js`      # Live streaming routes
      - `admin.js`        # Admin routes
    - `models/`           # Database models
      - `User.js`         # User model
      - `Stream.js`       # Stream model
    - `controllers/`      # Business logic
      - `authController.js` # Authentication logic
      - `streamController.js` # Streaming logic
    - `middleware/`       # Middleware functions
      - `authMiddleware.js` # Authentication middleware
    - `config/`           # Configuration files
      - `db.js`           # Database connection
      - `server.js`       # Server configuration

## Smart Contracts
- `smart-contracts/`
  - `contracts/`
    - `Token.sol`         # ERC20 Token contract
    - `MiningSystem.sol`  # Mining system contract
  - `truffle-config.js`   # Truffle configuration file

## Documentation
- `README.md`             # Project overview and setup instructions
