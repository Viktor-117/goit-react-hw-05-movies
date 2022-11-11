import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';

export default function Home() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
