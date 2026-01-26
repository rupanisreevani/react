import { MountingPhase } from "./Component/MountingPhase";
import UnmountingPhase from "./Component/UnmountingPhase";

import { UpdatingPhase } from "./Component/UpdatingPhase";

function App() {
  return (
    <>
      {/* <MountingPhase /> */}
      {/* <UpdatingPhase></UpdatingPhase> */}
      <UnmountingPhase></UnmountingPhase>
    </>
  );
}

export default App;
