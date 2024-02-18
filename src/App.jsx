import { UserProfile } from "./One/UserProfile";
import { JobList } from "./Two/JobList";

export default function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      <JobList />
    </div>
  );
}
