import { Set, Router, Route } from '@redwoodjs/router'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

import DashLayout from './layouts/DashLayout/DashLayout'
import HomeLayout from './layouts/HomeLayout/HomeLayout'
import RoomByIdPage from './pages/Room/RoomPageId/RoomPageId'
import RoomPageOtp from './pages/Room/RoomPageOtp/RoomPageOtp'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={DashLayout}>
        <Route path="/r/" page={RoomRoomsPage} name="rooms" />
        <Route path="/r/make" page={RoomNewRoomPage} name="makeRoom" />
        <Route path="/r/otp/{otp:String}" page={RoomPageOtp} name="roomByOtp" />
        <Route path="/r/{id:String}" page={RoomByIdPage} name="roomById" />
        <Route path="/r/{id:String}/edit" page={RoomEditRoomPage} name="editRoom" />
      </Set>
      <Set wrap={AdminLayout} title="Authors" titleTo="authors" buttonLabel="New Author" buttonTo="newAuthor">
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
