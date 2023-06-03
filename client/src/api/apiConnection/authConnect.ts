import { toast } from "react-toastify";
import baseURL from "../api";

interface RegisterResponse {
    message?: any;
    status: string;
  }

  interface LoginResponse {
    message?: any;
    status: string;
    user: object;
    token: string;
  }

  interface RegisterFormValues {
    name: string;
    userName: string;
    number: string;
    email: string;
    password: string;
  }

  
  interface LoginFormValues {
    userName: string;
    password: string;
  }
  interface AdminLoginFormValues {
    email: string;
    password: string;
  }

  interface AdminLoginResponse {
    message?: any;
    status: string;
    admin: object;
    token: string;
  }

export const register = async (values: RegisterFormValues): Promise<any> => {
  try {
    const response = await baseURL.post<RegisterResponse>('/api/auth/register', values);

    if (response.data.status === 'success') {
      toast.success('Registration successful');
      return 'success';
    } else {
      toast.error('Registration failed');
      return false;
    }
  } catch (error) {

    const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during registration';

    toast.error(errorMessage);
    throw new Error(errorMessage); // Throw the error to be caught by the caller
  }
};

export const login = async (values:LoginFormValues) => {
   
    try {
      const response = await baseURL.post<LoginResponse>('/api/auth/login', values);
  
      // Handle the success response
      if (response.data.status === 'success') {
        toast.success('Login successful');
        return response.data.token;
  
      } else {
        return false
      }
    } catch (error) {
  
      // Extract the error message if available
      const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during Login';
      toast.error(errorMessage);
    }
    
  };

  export const googleLogin = async ( values: any) => {
    try {
      
      const response = await baseURL.post('/api/auth/google_auth', values);
      
      
      if(response.data.status === 'Google login success') {
        toast.success('Google Login success')
        return response.data
      }
      else {
        toast.error('Login failed');
        return false

      }


    } catch (error) {
      
    }
  }
  
  export const adminLogin =async (values: AdminLoginFormValues) => {
    try {
      const response = await baseURL.post<AdminLoginResponse>('/api/admin/login', values);
  
      // Handle the success response
      if (response.data.status === 'success') {
        toast.success('Login successful');
        return response.data.token;
  
      } else {
        toast.error('Login failed');
        return false
      }
    } catch (error) {
  
      // Extract the error message if available
      const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during Login';
      toast.error(errorMessage);
    }
  }