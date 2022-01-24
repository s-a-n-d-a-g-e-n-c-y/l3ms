### What are we building?

- l3ms: a little, light, learning management system.

### Technically:

- reactjs with Jest for testing
- Supabase api
- MUI 5.0 with styled components

### Philosophy:

- build using standards, iterate to preferences
- mark what we don't know, learn about it, then knowledge-share

### Requirements

0. single page drill-down & modal driven UI
1. Login with magic link: one session at a time per link.
2. markdown driven blog roll
3. events driven by a static file with a countdown
4. modules containing: content, checklist, progress, workspaces, Q&A db w/upvotes
5. workspace: your l3ms dashboard (progress, latest)
6. i8n: interntionalization

### Roadmap
| Target | Feature |
| :--- | :----------- |
| Sprint 0 | Initial structure, Auth + pre-registration |
| Sprint 1 | blog & events |
| Sprint 2 | modules & auth |
| Sprint 3 | results page with recommednations |
| Sprint 4 | resources + private coffee w/ peers & mentors |
| Sprint 5 | books + content releases, resource updates, moderation of forums on each module |

### Libraries
| Library | Features |
| :--- | :----------- |
| Supabase | auth, users, storage, registration: modules, events, Q&A, workspaces (& todos) |
| react-markdown | blog + courses (content + resources) |

### Unknowns:

- ORM for API calls. Is there a wrapper for useEffect API calls
- events: countdown?
- chat: Asynchronous communications (inbox style)