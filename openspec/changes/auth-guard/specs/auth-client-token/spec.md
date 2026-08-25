## Purpose

Manages authentication tokens for the client application, handling token storage, retrieval, and validation for protecting routes.

## ADDED Requirements

### Requirement: User can authenticate and receive token
The system SHALL accept user credentials via POST request to the authentication endpoint and return a valid authentication token upon successful validation.

#### Scenario: Successful login
- **WHEN** user enters valid email and password, checks "Remember me" if desired, and submits the form
- **THEN** system calls backend API with credentials, receives 200 OK response with token payload, stores token in localStorage under key 'token', redirects to dashboard

#### Scenario: Login without remember me
- **WHEN** user enters valid email and password but unchecks "Remember me", then submits the form
- **THEN** system calls backend API with credentials, receives 200 OK response with token payload, stores token in localStorage under key 'token', redirects to dashboard

### Requirement: User can logout and clear stored token
The system SHALL provide a logout mechanism that removes the stored authentication token from localStorage and navigates to the login page.

#### Scenario: Successful logout
- **WHEN** user clicks logout button in topbar
- **THEN** system removes token from localStorage, navigates to /auth/login route

### Requirement: User is redirected to login when accessing protected routes without token
The system SHALL check for a valid authentication token before allowing access to protected routes defined under the main layout.

#### Scenario: No token present on route access
- **WHEN** user navigates to any protected route (dashboard, uikit pages, etc.) while no token exists in localStorage
- **THEN** system redirects to /auth/login route without allowing page load

#### Scenario: Token exists but user accesses login page directly
- **WHEN** authenticated user navigates to /auth/login route
- **THEN** system allows access to login page (login page is not protected)

### Requirement: User remains authenticated after browser restart when remember me enabled
The system SHALL persist the authentication token across browser sessions for users who enable the remember me option.

#### Scenario: Browser restart with remembered session
- **WHEN** user enables "Remember me" during login, navigates to dashboard, then closes and reopens the browser
- **THEN** system retrieves stored token on page load, allows access to previously authenticated routes without requiring new login

### Requirement: Failed authentication displays error via Toast
The system SHALL display an error message using PrimeVue's ToastService when authentication fails.

#### Scenario: Invalid credentials
- **WHEN** user submits form with invalid email or password combination
- **THEN** system receives 401/403 response from API, displays "Invalid credentials" toast message, does not redirect to dashboard

### Requirement: Token expiration redirects to login
The system SHALL detect expired or invalid tokens and redirect the user to login page.

#### Scenario: Expired token on route access
- **WHEN** user attempts to access a protected route with an expired token in localStorage
- **THEN** system detects token is no longer valid (backend rejects), redirects to /auth/login, displays optional "Session expired" toast
