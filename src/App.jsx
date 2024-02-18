import { UserProfile } from "./One/UserProfile";
import { Collections } from "./Three/Collections";
import { JobList } from "./Two/JobList";
import { UserList } from "./Five/UserList";

export default function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      {/* <Collections /> */}
      <UserList />
    </div>
  );
}
