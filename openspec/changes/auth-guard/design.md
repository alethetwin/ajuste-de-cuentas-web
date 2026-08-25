## Context

The application uses Vue Router with `AppLayout` wrapping protected routes. The login page exists at `/auth/login` but lacks authentication logic. Toast notifications exist via PrimeVue's `ToastService`.

## Goals / Non-Goals

**Goals:**
- Implement client-side token storage in localStorage
- Add router guard that validates tokens before route access
- Integrate logout in topbar component
- Replace inline errors with ToastService messages

**Non-Goals:**
- Backend authentication logic (handled by API)
- Role-based access control (future scope)
- Token refresh logic (initial version)

## Decisions

### 1. Client-Side Token Storage (localStorage)
**Why**: Simpler than cookies, works with standard REST APIs, persists across browser restarts when needed.  
**Alternatives Considered**:
- HTTP-only cookies: More secure but requires backend support and CORS configuration
- Memory storage: Would require user to stay logged in during session

### 2. Router Guard Pattern
**Why**: Centralized auth check at route level, single source of truth for protected paths.  
**Alternatives Considered**:
- Per-route guards: Too repetitive, harder to maintain
- Component-level checks: Duplication across multiple components

```
┌─────────────────────────────────────────────────────────────┐
│                    ROUTER GUARD FLOW                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   User navigates                                            │
│         ↓                                                   │
│   ┌─────────────────────┐                                  │
│   │ beforeEnter Hook    │                                  │
│   └──────────┬──────────┘                                  │
│              ↓                                              │
│   ┌─────────────────────┐                                  │
│   │ token = localStorage.getItem('token')                  │
│   └──────────┬──────────┘                                  │
│              ↓                                              │
│    Has Token? ───────┐                                      │
│           No         │                                      │
│            ↓          Yes                                    │
│      redirect()      next()                                  │
│      to '/auth/login'                                        │
└─────────────────────────────────────────────────────────────┘
```

### 3. Logout Location: Topbar
**Why**: Accessible from any protected page, consistent with common UI patterns.  
**Implementation**: Add logout button/link in `AppTopbar.vue` that clears token and redirects.

### 4. Toast Service for Errors
**Why**: PrimeVue already includes `ToastService`, provides consistent non-intrusive feedback.  
**Pattern**: Call `toast.add()` before redirecting on auth failures.

## Risks / Trade-offs

[Risk]: Token exposed in localStorage (XSS vulnerability)  
→ Mitigation: Accept trade-off for simplicity; consider httpOnly cookies if security audit required

[Risk]: No token refresh logic  
→ Mitigation: Future enhancement can add refresh endpoint calls before token expiration

[Risk]: "Remember me" persists indefinitely  
→ Mitigation: Consider adding logout link on login page for users who want to clear session

[Migrating from current state]:
1. Add token storage logic in Login.vue (submit handler)
2. Add router guard in `src/router/index.js`
3. Add logout component in AppTopbar.vue
4. Remove direct navigation from login button to `/`

## Open Questions

- Should we implement token expiration checking before each route access, or just on load?
- What error message should users see when token is invalid/expired?
