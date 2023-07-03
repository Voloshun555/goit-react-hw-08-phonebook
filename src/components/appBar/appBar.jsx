import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './appBar.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';

export function AppBar() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn)
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
