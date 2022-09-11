import { routeSignal } from '../components/link.component.tsx';
import { useEffect } from 'preact/hooks';

export default function RouteSignalUpdater() {
  useEffect(() => {
    const int: ReturnType<typeof setInterval> = setInterval(() => {
      console.info('running!');
      if (location.pathname !== routeSignal.value)
        routeSignal.value = location.pathname;
    }, 100);
    return () => {
      clearInterval(int);
    }
  }, []);
  return <></>;
}