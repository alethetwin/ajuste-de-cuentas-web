## Why

The application currently lacks any authentication guard mechanism. The dashboard and all protected routes are accessible without login, and there's no token management or session persistence. Users can navigate directly to `/` or access any page under `AppLayout` without going through the login flow. Additionally, error feedback exists but isn't consistently used for validation messages.

## What Changes

- **New Login Handler**: Add submit handler to Login.vue that POSTs credentials to backend API and stores returned token in localStorage
- **Router Guard**: Implement Vue Router guard (`beforeEach`) that checks localStorage token before allowing access to protected routes
- **Protected Routes**: All routes under `AppLayout` (including dashboard) require valid authentication token
- **Token Persistence**: "Remember me" checkbox persists token across browser restarts via localStorage
- **Logout Integration**: Add logout link/button in topbar that clears token and redirects to login
- **Error Feedback**: Replace inline error messages with ToastService for consistent UX

## Capabilities

### New Capabilities

- `auth/client-token`: Manages authentication tokens, validation logic, and persistence layer (localStorage with remember-me support)
