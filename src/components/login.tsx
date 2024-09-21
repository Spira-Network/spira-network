import {Button} from '@/components/button';
import {NFIDProvider, signIn} from '@junobuild/core-peer';

export const Login = () => {
  const handleLogin = async () => {
    await signIn({
      provider: new NFIDProvider({
        appName: 'Spira Network',
        logoUrl: 'https://spira.network/horizontal.png'
      })
    });
  };

  return <>
    <Button onClick={signIn}>Sign in with II</Button>
    <Button onClick={handleLogin}>Sign in with NFID</Button>;
  </>
};