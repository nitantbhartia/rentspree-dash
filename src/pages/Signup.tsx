import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Facebook } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { FacebookProvider, LoginButton } from 'react-facebook';

export function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` },
        }).then(res => res.json());

        // Mock successful signup
        console.log('Google Signup Success:', userInfo);
        navigate('/dashboard');
      } catch (error) {
        console.error('Google signup error:', error);
      }
    },
    onError: () => {
      console.error('Google Login Failed');
    }
  });

  const handleFacebookLogin = async (response: any) => {
    try {
      // Mock successful Facebook signup
      console.log('Facebook Signup Success:', response);
      navigate('/dashboard');
    } catch (error) {
      console.error('Facebook signup error:', error);
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Mock successful email signup
      console.log('Email Signup:', { name, email, password });
      navigate('/dashboard');
    } catch (error) {
      console.error('Email signup error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left side - Sign up form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <Link to="/" className="flex items-center justify-center mb-8">
                <Building2 className="h-8 w-8" style={{ color: '#1f15e1' }} />
                <span className="ml-2 text-2xl font-bold text-gray-900">RentSpree</span>
              </Link>
              <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-[#1f15e1] hover:text-[#1f15e1]/90">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* Social Login Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => googleLogin()}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img src="/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                  Continue with Google
                </button>

                <FacebookProvider appId="mock-app-id">
                  <LoginButton
                    scope="email"
                    onSuccess={handleFacebookLogin}
                    onError={(error) => {
                      console.error('Facebook Login Failed:', error);
                    }}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Facebook className="h-5 w-5 text-[#1877F2] mr-2" />
                    Continue with Facebook
                  </LoginButton>
                </FacebookProvider>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Email Sign Up Form */}
              <form className="space-y-6" onSubmit={handleEmailSignup}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1f15e1] focus:border-[#1f15e1] sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1f15e1] focus:border-[#1f15e1] sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#1f15e1] focus:border-[#1f15e1] sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1f15e1] hover:bg-[#1f15e1]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f15e1]"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>

            <div className="text-sm text-center text-gray-600">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="text-[#1f15e1] hover:text-[#1f15e1]/90">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-[#1f15e1] hover:text-[#1f15e1]/90">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Branding */}
        <div className="hidden lg:flex lg:flex-1 bg-[#1f15e1]">
          <div className="flex flex-col justify-center px-12 lg:px-16">
            <div className="space-y-8 text-white">
              <h2 className="text-4xl font-bold">
                The Complete Rental Management Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg">Screen tenants with comprehensive reports</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg">Manage rental applications efficiently</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-lg">Collect rent payments online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}