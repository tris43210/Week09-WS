import { SlowComponent } from "@/Components/SlowComponent";
import { Suspense } from "react";
import Loading from "../slow/loading";
import MotionAnimation from "@/Components/MotionAnimation";
import NavigationMotion from "@/Components/NavigationMotion";

export default function Fast() {
  return (
    <div>
      <p>This is the Fast page</p>
      {/* <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense> */}
      <MotionAnimation />
      <NavigationMotion>
        
            <a>Link 1</a>
            <a>Link 2</a>
            <a>Link 3</a>
            <a>Link 4</a>
        
      </NavigationMotion>
    </div>
  );
}
