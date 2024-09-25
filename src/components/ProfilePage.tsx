import { useEffect, useState } from 'react';
import { getDoc } from '@junobuild/core-peer';

export const ProfilePage = () => {
  const [profile, setProfile] = useState<{name: string, category: string, bio: string} | undefined>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getDoc<{name: string, category: string, bio: string}>({
          collection: 'profiles',
          key: 'user_profile' // Use the same key as in ProfileForm
        });
        setProfile(data?.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {profile.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {profile.category}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.bio}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};