// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Rooms" titleTo="rooms" buttonLabel="New Room" buttonTo="newRoom">
        <Route path="/rooms/new" page={RoomNewRoomPage} name="newRoom" />
        <Route path="/rooms/{id}/edit" page={RoomEditRoomPage} name="editRoom" />
        <Route path="/rooms/{id}" page={RoomRoomPage} name="room" />
        <Route path="/rooms" page={RoomRoomsPage} name="rooms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Authors" titleTo="authors" buttonLabel="New Author" buttonTo="newAuthor">
        <Route path="/authors/new" page={AuthorNewAuthorPage} name="newAuthor" />
        <Route path="/authors/{id}/edit" page={AuthorEditAuthorPage} name="editAuthor" />
        <Route path="/authors/{id}" page={AuthorAuthorPage} name="author" />
        <Route path="/authors" page={AuthorAuthorsPage} name="authors" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
