import { UserProfile } from "./One/UserProfile";
import { Collections } from "./Three/Collections";
import { JobList } from "./Two/JobList";

export default function App() {
  return (
    <div className="flex w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      <Collections />
    </div>
  );
}
