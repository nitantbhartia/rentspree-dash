'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { setUser } = useAuthStore();
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${response.access_token}` },
      }).then(res => res.json());

      setUser({
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
      });
      router.push('/dashboard');
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <button
              onClick={() => login()}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}