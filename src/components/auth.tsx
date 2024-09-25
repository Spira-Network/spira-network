import {Login} from '@/components/login';
import {Logout} from '@/components/logout';
import {ProfilePage} from '@/components/ProfilePage';
import {authSubscribe, type User} from '@junobuild/core-peer';
import {createContext, useEffect, useState, type ReactNode} from 'react';
import { ProfileForm } from './ProfileForm';

export const AuthContext = createContext<{user: User | undefined | null}>({user: undefined});

interface AuthProps {
  children: ReactNode;
}

export const Auth = ({children}: AuthProps) => {
  const [user, setUser] = useState<User | undefined | null>(undefined);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  const handleProfileCreated = () => {
    setHasProfile(true);
  };

  return (
    <AuthContext.Provider value={{user}}>
      {user !== undefined && user !== null ? (
        <div>
          {!hasProfile ? (
            <ProfileForm onProfileCreated={handleProfileCreated} />
          ) : (
            <>
              <ProfilePage />
              {children}
              <Logout />
            </>
          )}
        </div>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  );
};
