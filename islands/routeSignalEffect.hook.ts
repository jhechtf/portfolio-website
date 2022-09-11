import { routeSignal } from '../components/link.component.tsx';
import { useEffect } from 'preact/hooks';

export default function useRouteSignal() {
  console.info('called!');
  useEffect(() => {
    console.info('hey jim!', routeSignal);
  }, [])
}
