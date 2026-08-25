## 1. Login Form Implementation

- [ ] 1.1 Add submit handler to Login.vue that prevents default, collects email and password values, then POSTs credentials to backend API endpoint
- [ ] 1.2 Handle successful API response by storing token in localStorage under key 'token', optionally showing success toast if remember me is checked
- [ ] 1.3 Handle failed API response (401/403) by catching error, calling ToastService to display appropriate error message, NOT redirecting to dashboard
- [ ] 1.4 Replace existing button navigation (`as="router-link" to="/"`) with form submission that handles auth flow instead
- [ ] 1.5 Verify login form works with valid credentials and redirects to dashboard after successful authentication

## 2. Router Guard Implementation

- [ ] 2.1 Add `beforeEach` router guard in `src/router/index.js` that checks for token in localStorage before allowing navigation to protected routes
- [ ] 2.2 Implement conditional logic: if no token exists or token is invalid, redirect to `/auth/login`; otherwise allow navigation
- [ ] 2.3 Ensure login route `/auth/login` is NOT protected (can be accessed without token)
- [ ] 2.4 Verify all routes under AppLayout require authentication token before access
- [ ] 2.5 Test direct URL navigation to protected pages redirects properly when not authenticated

## 3. Logout Integration

- [ ] 3.1 Add logout button or link component to `AppTopbar.vue` in topbar navigation area
- [ ] 3.2 Implement click handler that removes token from localStorage using `localStorage.removeItem('token')`
- [ ] 3.3 After clearing token, redirect user to `/auth/login` route
- [ ] 3.4 Verify logout works from any protected page and clears session state

## 4. End-to-End Verification

- [ ] 4.1 Test unauthenticated user accessing dashboard via browser history or direct URL navigates to login
- [ ] 4.2 Test remember me functionality: login with remember me, close browser, reopen, verify still authenticated
- [ ] 4.3 Test logout clears session and redirects to login page
- [ ] 4.4 Test invalid credentials show toast message and do not redirect or store token
- [ ] 4.5 Verify ToastService is properly configured and displaying messages (check PrimeVue setup in main.js)

## 5. Cleanup

- [ ] 5.1 Remove any hardcoded navigation from Login.vue button to dashboard (replace with proper form submission)
- [ ] 5.2 Ensure no direct access to protected routes exists without going through auth flow first
