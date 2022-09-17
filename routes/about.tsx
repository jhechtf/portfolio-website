import { Head } from "$fresh/runtime.ts";
import { routeSignal } from "../components/link.component.tsx";
import { effect } from "@preact/signals";
export default function AboutPage() {
  effect(() => {
    console.info(routeSignal.peek);
  });
  return (
    <div className="mx-auto pt-4 max-w-screen-lg">
      <Head>
        <title>Jim Burbridge &ndash; About</title>
      </Head>
      {routeSignal.value}
    </div>
  );
}
