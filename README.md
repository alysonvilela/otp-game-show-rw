Discovering Proof of Concepts - Redwoodjs
---
## Tested
- Create endpoint
- Customize endpoints
- Discover CLI
  - Migrations - `yarn rw prisma migrate dev`
  - Types genaration - `yarn rw g types`
  - Scaffold - `yarn rw g scaffold <service>`
  - Layouts - `yarn rw g layout <layout-name>`
- Query by another index (slug/otp...) instead of the main "id"
- Integration with UI libraries (shadcn and tailwind)
- CI/CD


## Should test
- Functions
- Domains/Models
- Server components
- Scripts
- Prefetching
- Instagration with Global State managers (zustand, redux) and how to deal with hydrations
- Server components(experimental)
- Logger

## Good points
- API folder is just powerful.
- Ease graphql constructions.
- CLI just works, setups is pretty helpful and the documentations are great.
- Scaffolding its a good base for the whole development and mainly to study and get the opinated architecture provided by the framework. But in large scale might not be the best choice and cause more confusing.
- Opinated architectural in general is good because it saves time to develop what really needs to be developed, like use-cases, domain rules and etc.

## Weak points until now
- No documentations about custom endpoints (query by slug, query by id), but its possible.
- Cells seems to be performant(ssr), but its confusing.
  - Passed about 1-2 hours to understand that queryBySlug was possible only by adding `beforeQuery` could make it work.
  - Pages seems to be just a wrapper for Cells, this makes the folder structure become real big. Could merge them into a single point
  - This feature seems to be more a equivalent to Nextjs Pages (with getStaticProps and the other hooks) than a proper component.
  - Such a big file and it will always be like that, no option (if you are going through the opinated architecture design).
- Uses Prisma: Here is a consideration: prisma is very good for migrations documentation and type construction, but its much heavy. If the company/startup have already an infrastructure to deal with just like Vercel does, its awesome. But in the most cases, small growing project don't have one, so the Lock-ins with those popular vendors start to become a risk. Could have just a Query Builder like `kysely lib` or another small ORM like `drizzle`.
- Regeneration: When you change the prisma schema, you need to generate all DB types and scaffolding, the easiest way to do it is by removing all scaffolding files and generate again.
  
