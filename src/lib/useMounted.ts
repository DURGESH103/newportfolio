import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * True once the component has hydrated on the client, false during SSR
 * and the initial hydration pass. Uses useSyncExternalStore (rather than
 * a useState+useEffect flag) so there's no setState call inside an effect.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
